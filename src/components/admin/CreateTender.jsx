import React, { useState } from "react";

const CreateTender = () => {
  const [state, setState] = useState({
    tenderName: "",
    tenderDesc: "",
    tenderStart: "",
    tenderEnd: "",
    tenderBuffer: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState({
      tenderName: "",
      tenderDesc: "",
      tenderStart: "",
      tenderEnd: "",
      tenderBuffer: "",
    });
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-sm-6">
          <input
            placeholder="Tender Name"
            className="form-control mb-2 rounded-0"
            name="tenderName"
            type="text"
            value={state.tenderName}
            onChange={handleForm}
          />
          <input
            placeholder="Start Time"
            className="form-control mb-2 rounded-0"
            name="tenderStart"
            type="datetime-local"
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
            value={state.tenderDesc}
            onChange={handleForm}
          />
        </div>
        <div className="col-12 col-sm-6">
          <input
            placeholder="End Time"
            className="form-control mb-2 rounded-0"
            name="tenderEnd"
            type="datetime-local"
            value={state.tenderEnd}
            onChange={handleForm}
          />
        </div>

        <div className="col-12 col-sm-6">
          <input
            placeholder="Buffer Time"
            className="form-control mb-2 rounded-0"
            name="tenderBuffer"
            type="time"
            value={state.tenderBuffer}
            onChange={handleForm}
          />
        </div>
      </div>
      <div>
        <button type="submit">Save Tender</button>
      </div>
    </form>
  );
};

export default CreateTender;
