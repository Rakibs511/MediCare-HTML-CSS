import React from "react";
import { useNavigate } from "react-router-dom";
import sideBarCss from "./sidebar.module.css";
const SideBar = () => {
  const navigate = useNavigate();
  const onclickHandle = () => {
    localStorage.removeItem("authorization");
    navigate("/signin");
  };
  return (
    <div className={sideBarCss.sideBar}>
      <div className={sideBarCss.pl10}>
        <button onClick={onclickHandle}>Sign out</button>
      </div>
    </div>
  );
};

export default SideBar;
