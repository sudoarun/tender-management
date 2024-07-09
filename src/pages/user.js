import React, { useState } from "react";
import AvailableTenders from "../components/user/AvailableTenders";
import { arrayData } from "../utils";
import QotationModal from "../components/Modals/QotationModal";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenderData, setTenderData] = useState({});
  return (
    <div>
      <div className="bg-black text-center">
        <span className="text-white">User Page</span>
      </div>
      <h4 className="mt-4 text-center">Available Tenders</h4>
      <section>
        <div className="container">
          <AvailableTenders
            tableData={arrayData}
            setBuyModal={setIsModalOpen}
            setTenderData={setTenderData}
          />
        </div>
        <QotationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          tenderData={tenderData}
        />
      </section>
    </div>
  );
};

export default User;
