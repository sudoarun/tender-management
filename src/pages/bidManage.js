import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const BidManage = () => {
  const [allBid, setAllBid] = useState([]);
  const getAllBids = async () => {
    const data = await getDocs(collection(db, "user"));
    const newData = data.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    }));
    setAllBid(newData);
  };
  useEffect(() => {
    getAllBids();
  }, []);
  return (
    <div className="mb-5">
      <h4 className="text-center mt-3">
        Bid{" "}
        <span className="border-bottom border-primary border-2">
          Management
        </span>
      </h4>
      <section className="mt-4">
        {allBid.length > 0 ? (
          <div className="container table-responsive-sm table-responsive-md">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Bid Cost</th>
                  <th scope="col">Bid Time</th>
                  <th scope="col">Tender ID</th>
                  <th scope="col">Tender Name</th>
                  <th scope="col">Flag</th>
                </tr>
              </thead>
              <tbody>
                {allBid
                  .sort((a, b) => a.bidCost - b.bidCost)
                  ?.map((el, index) => (
                    <tr key={index}>
                      <th scope="row">{el.companyName}</th>
                      <td>{el.bidCost}</td>
                      <td>{el.bidTime}</td>
                      <td>{el.tenderID}</td>
                      <td>{el.tenderName}</td>
                      <td>{el.Flag === true ? "true" : "false"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            style={{ height: 200 }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="loader"></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BidManage;
