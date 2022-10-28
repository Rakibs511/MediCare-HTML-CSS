import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMyPostToggle } from "../../myPost/myPostSlice";
import { setSideBar } from "../../navbar/navBarSlice";
import { setPostToggle, setProfileToggle } from "../../profile/profileSlice";
import Hide_sideBarCss from "./hide_sideBar.module.css";

const Hide_sideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onclickHandle = () => {
    localStorage.removeItem("authorization");
    navigate("/signin");
  };
  return (
    <>
      <div
        className={Hide_sideBarCss.hideBg}
        onClick={() => dispatch(setSideBar())}
      ></div>
      <div className={Hide_sideBarCss.sideBar}>
        <div className={Hide_sideBarCss.pl10}>
          <button
            className={Hide_sideBarCss.createPostButton}
            onClick={(e) => dispatch(setProfileToggle())}
          >
            Profile
          </button>
          <button
            className={Hide_sideBarCss.createPostButton}
            onClick={(e) => dispatch(setPostToggle())}
          >
            Create Post
          </button>
          <button className={Hide_sideBarCss.createPostButton} onClick={()=>{
            dispatch(setMyPostToggle())
          }}>My Post</button>
          <button
            className={Hide_sideBarCss.signOutButton}
            onClick={onclickHandle}
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Hide_sideBar;
