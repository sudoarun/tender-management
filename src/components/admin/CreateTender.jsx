import React, { useContext, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { message } from "antd";
import { MyContext } from "../../context/myContext";
const CreateTender = ({ setPreviousData }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState({
    tenderName: "",
    tenderDesc: "",
    tenderStart: "",
    tenderEnd: "",
    tenderBuffer: "",
  });
  const { setGlobalState } = useContext(MyContext);
  const Message = (data) => {
    const { type, msg } = data;
    messageApi.open({
      type: type,
      content: msg,
    });
  };
  const handleForm = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = state.tenderName.replace(/[\s,]+/g, "-");
    try {
      await setDoc(doc(db, "admin", `${id}`), state).then(() => {
        setGlobalState((prev) => [...prev, state]);
        setPreviousData((prev) => [...prev, state]);
        let notice = {
          type: "success",
          msg: "Tender Added Successfully",
        };
        Message(notice);
      });
    } catch (e) {
      let notice = {
        type: "error",
        msg: "Something went wrong",
      };
      Message(notice);
      console.error("Error adding document: ", e);
    }
    setState({
      tenderName: "",
      tenderDesc: "",
      tenderStart: "",
      tenderEnd: "",
      tenderBuffer: "",
    });
  };
  return (
    <>
      {contextHolder}
      <form className="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-6">
            <input
              placeholder="Tender Name"
              className="form-control mb-2 rounded-0"
              name="tenderName"
              type="text"
              required
              value={state.tenderName}
              onChange={handleForm}
            />
            <input
              placeholder="Start Time"
              className="form-control mb-2 rounded-0"
              name="tenderStart"
              type="datetime-local"
              required
              value={state.tenderStart}
              onChange={handleForm}
            />
          </div>
          <div className="col-12 col-sm-6">
            <textarea
              placeholder="Tender Description"
              className="form-control mb-2 rounded-0"
              style={{ height: "90%" }}
              name="tenderDesc"
              required
              value={state.tenderDesc}
              onChange={handleForm}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              placeholder="End Time"
              className="form-control mb-2 rounded-0"
              name="tenderEnd"
              required
              type="datetime-local"
              value={state.tenderEnd}
              onChange={handleForm}
            />
          </div>

          <div className="col-12 col-sm-6">
            <input
              placeholder="Buffer Time in minutes"
              className="form-control mb-2 rounded-0"
              name="tenderBuffer"
              type="number"
              value={state.tenderBuffer}
              onChange={handleForm}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Save Tender
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTender;
