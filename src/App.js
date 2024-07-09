import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Admin from "./pages/admin";
import User from "./pages/user";
import BidManage from "./pages/bidManage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/bid-manage" element={<BidManage />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
