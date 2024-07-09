import React from "react";
import CreateTender from "../components/admin/CreateTender";
import PreviousTender from "../components/admin/PreviousTender";
import { arrayData } from "../utils";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="mb-5">
      <div className="bg-black d-flex justify-content-between py-2">
        <span className="text-white invisible">go Back</span>
        <span className="text-white fw-semibold">Admin Panel</span>
        <Link
          to={"bid-manage"}
          className="text-white me-3 text-decoration-underline"
        >
          Bid Manage
        </Link>
      </div>

      <section>
        <div className="mt-5">
          <h4 className="text-center">Create Tender</h4>
          <div className="container">
            <div className="mt-4">
              <CreateTender />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h4 className="text-center">Previous Tenders</h4>
          <div className="mt-4">
            <PreviousTender tableData={arrayData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
