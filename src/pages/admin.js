import React from "react";
import CreateTender from "../components/admin/CreateTender";
import PreviousTender from "../components/admin/PreviousTender";
import { arrayData } from "../utils";

const Admin = () => {
  return (
    <div>
      <div className="bg-black text-center">
        <span className="text-white fw-semibold">Admin Panel</span>
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
