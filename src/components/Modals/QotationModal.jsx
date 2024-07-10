import React, { useState } from "react";
import { message, Modal } from "antd";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
const QotationModal = ({ isModalOpen, setIsModalOpen, tenderData }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState({
    companyName: "",
    bidCost: "",
    bidTime: new Date(),
  });
  const Message = (data) => {
    const { type, msg } = data;
    messageApi.open({
      type: type,
      content: msg,
    });
  };
  const handleValues = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  function addMinutesToISODate(isoDate, minutesToAdd) {
    const date = new Date(isoDate);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    const formattedDate = date.toISOString().substring(0, 16);
    return formattedDate;
  }

  function isDateWithinFiveMinutes(date) {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const currentTime = currentDate.getTime();
    const targetTime = targetDate.getTime();
    const differenceInMillis = Math.abs(currentTime - targetTime);
    return differenceInMillis <= 5 * 60 * 1000;
  }
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const id = state.companyName.replace(/[\s,]+/g, "-");
    let checkWithInTime = isDateWithinFiveMinutes(tenderData.tenderEnd);
    try {
      await setDoc(doc(db, "user", `${id}`), {
        ...state,
        tenderName: tenderData.tenderName,
        tenderID: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
        bidTime: new Date().toISOString(),
        Flag: checkWithInTime,
      }).then(async () => {
        if (!checkWithInTime) {
          let notice = {
            type: "success",
            msg: "Ouotation Submit Successfully",
          };
          Message(notice);
          setState({
            companyName: "",
            bidCost: "",
            bidTime: new Date().toDateString(),
          });
          setIsModalOpen(false);
          return;
        }
        const isoDate = tenderData.tenderEnd;
        const updatedISODate = addMinutesToISODate(isoDate, 12);
        console.log(updatedISODate);
        await updateDoc(doc(db, "admin", tenderData.id), {
          tenderEnd: updatedISODate,
        });
        let notice = {
          type: "success",
          msg: "Ouotation Submit Successfully",
        };
        Message(notice);
        setState({
          companyName: "",
          bidCost: "",
          bidTime: new Date().toDateString(),
        });
        setIsModalOpen(false);
      });
    } catch (e) {
      let notice = {
        type: "error",
        msg: "Something went wrong",
      };
      Message(notice);
      console.error("Error adding document: ", e);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Quotation Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={onFormSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Company Name"
            value={state.companyName}
            onChange={handleValues}
            name="companyName"
          />
          <input
            className="form-control mb-2"
            type="number"
            placeholder="Bid Costs"
            value={state.bidCost}
            onChange={handleValues}
            name="bidCost"
          />
          <input
            className="form-control mb-2"
            readOnly
            placeholder="Bid Time"
            value={state.bidTime}
            onChange={handleValues}
            name="bidTime"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </Modal>
    </>
  );
};
export default QotationModal;
