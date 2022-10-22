import React from "react";
import navBarCss from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { setProfileToggle } from "../profile/profileSlice";
import logo from "../../assets/logo_small.svg";
import profileIcon from "../../assets/icons/profile.svg";
import postIcon from "../../assets/icons/post.svg";
const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={navBarCss.navBar}>
      <img src={logo} alt="MediCare" className={navBarCss.logo} />
      <div className={navBarCss.search}>
        <input
          type="text"
          placeholder="Search..."
          className={navBarCss.searchBox}
        />
        <button className={navBarCss.searchButton}>Search</button>
      </div>
      <img
        src={profileIcon}
        alt="Profile"
        className={navBarCss.profileIcon}
        onClick={()=>dispatch(setProfileToggle())}
      />
      <img src={postIcon} alt="Post" className={navBarCss.postIcon} />
    </div>
  );
};

export default NavBar;
