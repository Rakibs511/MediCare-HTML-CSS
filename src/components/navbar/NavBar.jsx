import React from "react";
import navBarCss from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPostToggle, setProfileToggle } from "../profile/profileSlice";
import logo from "../../assets/logo_small.svg";
import profileIcon from "../../assets/icons/profile.svg";
import postIcon from "../../assets/icons/post.svg";
import sideBarIcon from "../../assets/icons/sideBarIcon.svg";
import medicineIcon from "../../assets/icons/medicines.svg";
import profileIcon_blue from "../../assets/icons/profile_blue_color.svg";
import {
  setSearchFilterToggle,
  setSearchValue,
  setSideBar,
} from "./navBarSlice";
const NavBar = () => {
  const dispatch = useDispatch();
  const searchFilterToggle = useSelector(
    (state) => state.navBarSlice.searchFilterToggle
  );
  return (
    <div className={navBarCss.navBar}>
      <img src={logo} alt="MediCare" className={navBarCss.logo} />
      <img
        src={sideBarIcon}
        alt="SideBar"
        className={navBarCss.sideBarIcon}
        onClick={() => dispatch(setSideBar())}
      />
      <div className={navBarCss.search}>
        <img
          src={searchFilterToggle ? medicineIcon : profileIcon_blue}
          alt="Medicines"
          className={navBarCss.filterIcon}
          onClick={() => dispatch(setSearchFilterToggle())}
        />
        <input
          type="text"
          placeholder={searchFilterToggle?"Search Medicines":"Search People"}
          className={navBarCss.searchBox}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        {/* <button className={navBarCss.searchButton}>Search</button> */}
      </div>
      <img
        src={profileIcon}
        alt="Profile"
        className={navBarCss.profileIcon}
        onClick={() => dispatch(setProfileToggle())}
      />
      <img
        src={postIcon}
        alt="Post"
        className={navBarCss.postIcon}
        onClick={() => {
          dispatch(setPostToggle());
        }}
      />
    </div>
  );
};

export default NavBar;
