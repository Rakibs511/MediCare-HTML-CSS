import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Profile from "../../components/profile/Profile";
import SideBar from "../../components/sidebar/SideBar";
import SmallCard from "../../components/smallCard/SmallCard";
import { useSelector } from "react-redux";
import homeCSS from "./home.module.css";
import Post from "../../components/post/Post";
import { useGetMedicines } from "./homeQuery";

const Home = () => {
  const profileToggle = useSelector(
    (state) => state.profileSlice.profileToggle
  );
  const postToggle = useSelector((state) => state.profileSlice.postToggle);
  //   console.log(postToggle);
  useEffect(() => {
    profileToggle || postToggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [postToggle, profileToggle]);

  const { data, isLoading } = useGetMedicines();
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else console.log(data.data[0]);
  return (
    <div>
      <NavBar />
      <SideBar />
      {profileToggle && <Profile />}
      {postToggle && <Post />}
      <div className={homeCSS.mainSection}>
        <div className={homeCSS.layout}>
          {data.data.map((data, index) => {
            return (
              <SmallCard
                key={data._id}
                name={data.medicineName_ENG || "Name is Not Found"}
                img={
                  data.medicinePicture ||
                  "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
