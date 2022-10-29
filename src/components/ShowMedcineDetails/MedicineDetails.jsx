import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import medicineDetailsCss from "./medicineDetails.module.css";
import { setShowMedicineDetails } from "./medicineDetailsSlice";
import emptyProfie from "../../assets/icons/emptyProfie.svg";
import { useQuery } from "react-query";
import dev from "../../config/configer";
import axios from "axios";
import crossIcon from "../../assets/icons/cross.svg";
import jwt_decode from "jwt-decode";

const MedicineDetails = () => {
  const dispatch = useDispatch();
  const cardId = useSelector((state) => state.smallCardSlice.cardKey);
  const searchFilterToggle = useSelector(
    (state) => state.navBarSlice.searchFilterToggle
  );
  const searchValue = useSelector((state) => state.navBarSlice.searchValue);
  const searchValueLength = searchValue !== null && searchValue.length;
  //   console.log(searchValueLength);
  const myPostToggle = useSelector((state) => state.myPostSlice.myPostToggle);
  const [languageToggle, setlanguageToggle] = useState(false);

  //Todo:------->  if user want to see user data then isUserData is return true <-----------------------
  const isUserData =
    searchFilterToggle === false &&
    searchValueLength > 0 &&
    myPostToggle === false;
  //   console.log(isUserData);
  const url_get_user = () => {
    if (isUserData) {
      return axios({
        method: "get",
        url: `${dev.backendUrl}/api/v1/user/${cardId}`,
        headers: { authorization: localStorage.getItem("authorization") },
      });
    } else {
      return axios({
        method: "get",
        url: `${dev.backendUrl}/api/v1/post/getone/${cardId}`,
        headers: { authorization: localStorage.getItem("authorization") },
      });
    }
  };
  const token = localStorage.getItem("authorization").split(" ")[1];
  const userId = jwt_decode(token).id;

  const { data: cardOneMedicine, isLoading } = useQuery(
    "oneUser",
    url_get_user
  );
  if (isLoading) {
    return <div>loading From medicineDetails.jsx page</div>;
  }

  const medicineDeleteHandle = () => {
    axios({
      method: "Delete",
      url: `${dev.backendUrl}/api/v1/post/delete/${cardOneMedicine.data._id}`,
      headers: { authorization: localStorage.getItem("authorization") },
    }).then(()=>{
        console.log("Deleted!");
        dispatch(setShowMedicineDetails());
    });
  };
  return (
    <>
      <div
        className={medicineDetailsCss.hideDiv}
        onClick={() => dispatch(setShowMedicineDetails())}
      ></div>
      <div className={medicineDetailsCss.rootDiv}>
        {isUserData === false && (
          <div
            className={medicineDetailsCss.languageToggle}
            onClick={() => setlanguageToggle(!languageToggle)}
          >
            {languageToggle ? "BD" : "EN"}
          </div>
        )}
        <img
          src={
            isUserData === true
              ? cardOneMedicine.data.profilePicture
              : isUserData === false
              ? cardOneMedicine.data.medicinePicture
              : emptyProfie
          }
          alt="Loading.."
          className={medicineDetailsCss.profileImg}
        />
        <img
          src={crossIcon}
          alt="Esc"
          className={medicineDetailsCss.crossIcon}
          onClick={() => dispatch(setShowMedicineDetails())}
        />
        <div className={medicineDetailsCss.detailsName}>
          {isUserData
            ? "Name: " + cardOneMedicine.data.name
            : languageToggle
            ? "ঔষুধ এর নাম: " + cardOneMedicine.data.medicineName_BD
            : "Medicine Name: " + cardOneMedicine.data.medicineName_ENG}
        </div>
        <div className={medicineDetailsCss.detailsText}>
          {isUserData
            ? "User Name: " + cardOneMedicine.data.userName
            : languageToggle
            ? "ঔষুধ এর বর্ণনা: " + cardOneMedicine.data.description_BD
            : "Description: " + cardOneMedicine.data.description_ENG}
        </div>
        <div className={medicineDetailsCss.detailsText}>
          {isUserData && "Phone Number: " + cardOneMedicine.data.phone}
        </div>
        <div className={medicineDetailsCss.detailsText}>
          {isUserData && "Email: " + cardOneMedicine.data.email}
        </div>
        <div className={medicineDetailsCss.detailsText}>
          {isUserData && "Date of Birth: " + cardOneMedicine.data.dateOfBirth}
        </div>
        {cardOneMedicine.data.author === userId && (
          <button
            onClick={medicineDeleteHandle}
            className="signup-btn"
            style={{ width: "120px",margin:'40%',marginTop:'20px',marginBottom:'20px' }}
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default MedicineDetails;
