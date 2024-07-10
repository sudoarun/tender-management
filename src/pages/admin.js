import React, { useContext, useEffect, useState } from "react";
import CreateTender from "../components/admin/CreateTender";
import PreviousTender from "../components/admin/PreviousTender";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { MyContext } from "../context/myContext";

const Admin = () => {
  const [previousData, setPreviousData] = useState([]);
  const { globalState, setGlobalState } = useContext(MyContext);
  const loadData = async () => {
    const data = await getDocs(collection(db, "admin"));
    const newData = data.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    }));
    setPreviousData(newData);
    setGlobalState(newData);
  };
  useEffect(() => {
    if (previousData.length === 0) loadData();
  }, [globalState]);
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
          <h4 className="text-center">
            Create{" "}
            <span className="border-bottom border-primary border-2">
              Tender
            </span>
          </h4>
          <div className="container">
            <div className="mt-4">
              <CreateTender setPreviousData={setPreviousData} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h4 className="text-center">
            Previous{" "}
            <span className="border-bottom border-primary border-2">
              Tenders
            </span>
          </h4>
          <div className="mt-4">
            {previousData.length > 0 ? (
              <PreviousTender tableData={previousData} />
            ) : (
              <div
                style={{ height: 200 }}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
