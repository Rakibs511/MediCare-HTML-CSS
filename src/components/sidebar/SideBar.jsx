import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPostToggle, setProfileToggle } from "../profile/profileSlice";
import sideBarCss from "./sidebar.module.css";
const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onclickHandle = () => {
    localStorage.removeItem("authorization");
    navigate("/signin");
  };
  return (
    <div className={sideBarCss.sideBar}>
      <div className={sideBarCss.pl10}>
        <button
          className={sideBarCss.createPostButton}
          onClick={(e) => dispatch(setProfileToggle())}
        >
          Profile
        </button>
        <button
          className={sideBarCss.createPostButton}
          onClick={(e) => dispatch(setPostToggle())}
        >
          Create Post
        </button>
        <button className={sideBarCss.createPostButton}>My Post</button>
        <button
          className={sideBarCss.createPostButton}
          style={{marginTop:'450px'}}
          onClick={onclickHandle}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
