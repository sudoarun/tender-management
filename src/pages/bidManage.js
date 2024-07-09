import React from "react";
import { arrayData } from "../utils";

const BidManage = () => {
  return (
    <div className="mb-5">
      <h4 className="text-center mt-3">Bid Management</h4>
      <section className="mt-4">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tender Name</th>
                <th scope="col">Tender Description</th>
                <th scope="col">Tender Start</th>
                <th scope="col">Tender End</th>
                <th scope="col">Flag</th>
              </tr>
            </thead>
            <tbody>
              {arrayData?.map((el, index) => (
                <tr key={index}>
                  <th scope="row">{el.tenderName}</th>
                  <td>{el.tenderDesc}</td>
                  <td>{el.tenderStart}</td>
                  <td>{el.tenderEnd}</td>
                  <td>No</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default BidManage;
