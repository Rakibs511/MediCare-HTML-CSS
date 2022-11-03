import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import NavBar from "../../components/navbar/NavBar";
import Profile from "../../components/profile/Profile";
import SideBar from "../../components/sidebar/SideBar";
import SmallCard from "../../components/smallCard/SmallCard";
import NotFound from "../notFoundPage/NotFound";
import { useSelector } from "react-redux";
import homeCSS from "./home.module.css";
import Post from "../../components/post/Post";
import { url_All_Users, useGetMedicines } from "./homeQuery";
import HideSideBar from "../../components/sidebar/hide_sideBar/Hide_sideBar";
import MyPost from "../../components/myPost/MyPost";
import MedicineDetails from "../../components/ShowMedcineDetails/MedicineDetails";
import { useQuery } from "react-query";

const Home = () => {
  const profileToggle = useSelector(
    (state) => state.profileSlice.profileToggle
  );
  const postToggle = useSelector((state) => state.profileSlice.postToggle);

  const searchValue = useSelector((state) => state.navBarSlice.searchValue);
  const isSideBar = useSelector((state) => state.navBarSlice.sideBar);
  const myPostToggle = useSelector((state) => state.myPostSlice.myPostToggle);
  const ShowMedicineDetails = useSelector(
    (state) => state.medicineDetailsSlice.showMedicineDetails
  );

  const searchFilterToggle = useSelector(
    (state) => state.navBarSlice.searchFilterToggle
  );
  useEffect(() => {
    profileToggle || postToggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [postToggle, profileToggle]);

  const { data: allUsers, isLoading: alluserLoading } = useQuery(
    "users",
    url_All_Users
  );
  const { data, isLoading, refetch } = useGetMedicines();
  if (alluserLoading) {
    return (
      <div className={homeCSS.bubblesLoader}>
        <ReactLoading type={"bubbles"} color={"orange"} width={150} />
      </div>
    );
  }
  //   console.log(allUsers.data);
  if (isLoading) {
    return (
      <div className={homeCSS.bubblesLoader}>
        <ReactLoading type={"bubbles"} color={"orange"} width={150} />
      </div>
    );
  }
  //  console.log(data.data);
  return (
    <div>
      <NavBar />
      <SideBar />
      {isSideBar && <HideSideBar />}
      {profileToggle && <Profile />}
      {postToggle && (
        <div onClick={refetch}>
          <Post />
        </div>
      )}
      {myPostToggle && <MyPost />}
      {ShowMedicineDetails && (
        <div onClick={refetch}>
          <MedicineDetails />
        </div>
      )}
      <div className={homeCSS.mainSection}>
        <div className={homeCSS.layout}>
          {searchValue && searchFilterToggle ? (
            data.data
              .filter((data) =>
                data.medicineName_ENG
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((data) => {
                return (
                  <SmallCard
                    key={data._id}
                    id={data._id}
                    name={data.medicineName_ENG || "Name is Not Found"}
                    img={
                      data.medicinePicture ||
                      "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"
                    }
                  />
                );
              })
          ) : searchValue && !searchFilterToggle && allUsers.data !== [] ? (
            allUsers.data
              .filter(
                (data) =>
                  data.userName &&
                  data.userName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map((data) => {
                return (
                  <SmallCard
                    key={data._id}
                    id={data._id}
                    name={data.name || "Name is Not Found"}
                    img={
                      data.profilePicture ||
                      "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"
                    }
                  />
                );
              })
          ) : data.data !== [] ? (
            data.data.map((data) => {
              return (
                <SmallCard
                  key={data._id}
                  id={data._id}
                  name={data.medicineName_ENG || "Name is Not Found"}
                  img={
                    data.medicinePicture ||
                    "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"
                  }
                />
              );
            })
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
