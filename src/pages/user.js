import React, { useContext, useEffect, useState } from "react";
import AvailableTenders from "../components/user/AvailableTenders";
import QotationModal from "../components/Modals/QotationModal";
import { MyContext } from "../context/myContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { message } from "antd";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [tenderData, setTenderData] = useState({});
  const { globalState, setGlobalState } = useContext(MyContext);

  const Message = (data) => {
    const { type, msg } = data;
    messageApi.open({
      type: type,
      content: msg,
    });
  };

  const getUpdateOfTenders = async () => {
    const data = await getDocs(collection(db, "admin"));
    const newData = data.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    }));
    const uniqueArray = globalState?.filter((obj1) => !newData.id === obj1.id);
    const mergeArray = [...uniqueArray, ...newData];
    const currentDate = new Date();
    let closestObject = null;
    let minDiffMinutes = 5;
    mergeArray.forEach((obj) => {
      const diff = Math.abs(new Date(obj.tenderStart) - currentDate); // Difference in milliseconds
      const diffMinutes = diff / (1000 * 60); // Convert difference to minutes

      if (diffMinutes <= minDiffMinutes) {
        minDiffMinutes = diffMinutes;
        closestObject = obj;
      }
    });
    setGlobalState(mergeArray);
    if (closestObject == null) {
      return;
    }
    let notice = {
      type: "warning",
      msg: "New Tender is placed in last 5 minutes",
    };
    Message(notice);
  };
  useEffect(() => {
    getUpdateOfTenders();
  }, []);

  return (
    <div className="mb-5">
      {contextHolder}
      <div className="bg-black text-center py-2">
        <span className="text-white">User Page</span>
      </div>
      <h4 className="mt-4 text-center">
        Available{" "}
        <span className="border-bottom border-primary border-2">Tenders</span>
      </h4>
      <section>
        <div className="container">
          {globalState.length === 0 ? (
            <div
              style={{ height: 200 }}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="loader"></div>
            </div>
          ) : (
            <AvailableTenders
              tableData={globalState}
              setBuyModal={setIsModalOpen}
              setTenderData={setTenderData}
            />
          )}
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
