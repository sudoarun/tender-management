import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Admin from "./pages/admin";
import User from "./pages/user";
import BidManage from "./pages/bidManage";
import { MyContext } from "./context/myContext";
import { useState } from "react";

function App() {
  const [globalState, setGlobalState] = useState("");
  return (
    <div>
      <MyContext.Provider value={{ globalState, setGlobalState }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/bid-manage" element={<BidManage />} />
        </Routes>
      </MyContext.Provider>
      <Navigation />
    </div>
  );
}

export default App;
