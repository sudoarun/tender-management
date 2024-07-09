import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="position-fixed transparency py-2 px-3"
      style={{ bottom: "20px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="d-flex list-style-none gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/user"}>User</Link>
        </li>
        <li>
          <Link to={"/admin"}>Admin</Link>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
