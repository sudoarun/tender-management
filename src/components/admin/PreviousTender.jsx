import React from "react";

const PreviousTender = ({ tableData }) => {
  return (
    <div className="table-responsive-sm table-responsive-md">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tender Name</th>
            <th scope="col">Tender Description</th>
            <th scope="col">Tender Start</th>
            <th scope="col">Tender End</th>
            <th scope="col">Buffer Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((el, index) => (
            <tr key={index}>
              <th scope="row">{el?.tenderName}</th>
              <td>{el?.tenderDesc}</td>
              <td>{el?.tenderStart}</td>
              <td>{el?.tenderEnd}</td>
              <td>{el?.tenderBuffer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousTender;
