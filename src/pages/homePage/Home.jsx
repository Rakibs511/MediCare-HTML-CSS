import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Profile from "../../components/profile/Profile";
import SideBar from "../../components/sidebar/SideBar";
import SmallCard from "../../components/smallCard/SmallCard";
import {useSelector} from 'react-redux'
import homeCSS from "./home.module.css";

const Home = () => {
      const profileToggle = useSelector(
        (state) => state.profileSlice.profileToggle
      );
      useEffect(()=>{
        profileToggle? document.body.style.overflow="hidden": document.body.style.overflow="auto";
      })
    const user = [
      "Tamim",
      "hridoy",
      "tanvir",
      "rayhan",
      "sagor",
      "Tamim",
      "hridoy",
      "tanvir",
      "rayhan",
      "Rakib",
      "sagor",
      "Tamim",
      "hridoy",
      "tanvir",
      "rayhan",
    ];
  return (
    <div>
      <NavBar />
      <SideBar />
      {profileToggle && <Profile />}
      <div className={homeCSS.mainSection}>
        <div className={homeCSS.layout}>
          {user.map((username, index) => {
            return <SmallCard key={index} name={username} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
