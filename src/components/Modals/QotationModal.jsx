import React, { useEffect, useState } from "react";
import { Modal } from "antd";
const QotationModal = ({ isModalOpen, setIsModalOpen, tenderData }) => {
  const [state, setState] = useState({
    companyName: "",
    bidCost: "",
    bidTime: "",
  });
  const handleValues = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  useEffect(() => {
    if (isModalOpen) {
      setState((prevState) => ({
        ...prevState,
        companyName: tenderData.tenderName,
      }));
    }
  }, [isModalOpen, tenderData]);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
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
            type="text"
            placeholder="Bid Costs"
            value={state.bidCost}
            onChange={handleValues}
            name="bidCost"
          />
          <input
            className="form-control mb-2"
            type="datetime-local"
            placeholder="Bid Time"
            value={state.bidTime}
            onChange={handleValues}
            name="bidTime"
          />
          <button>Submit</button>
        </form>
      </Modal>
    </>
  );
};
export default QotationModal;
