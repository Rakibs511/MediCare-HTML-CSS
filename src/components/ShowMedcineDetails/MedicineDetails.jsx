import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import medicineDetailsCss from "./medicineDetails.module.css";
import { setShowMedicineDetails } from "./medicineDetailsSlice";
import emptyProfie from "../../assets/icons/emptyProfie.svg";
import { useQuery } from "react-query";
import dev from "../../config/configer";
import axios from "axios";
import crossIcon from "../../assets/icons/cross.svg";

const MedicineDetails = () => {
  const dispatch = useDispatch();
  const cardId = useSelector((state) => state.smallCardSlice.cardKey);
  const [languageToggle, setlanguageToggle] = useState(false);

  const url_get_user = () => {
    return axios({
      method: "get",
      url: `${dev.backendUrl}/api/v1/post/getone/${cardId}`,
      headers: { authorization: localStorage.getItem("authorization") },
    });
  };

  const { data: cardOneMedicine, isLoading } = useQuery(
    "oneUser",
    url_get_user
  );
  if (isLoading) {
    return <div>loading From medicineDetails.jsx page</div>;
  }
  //    console.log(oneUser.name);
  return (
    <>
      <div
        className={medicineDetailsCss.hideDiv}
        onClick={() => dispatch(setShowMedicineDetails())}
      ></div>
      <div className={medicineDetailsCss.rootDiv}>
        <div
          className={medicineDetailsCss.languageToggle}
          onClick={() => setlanguageToggle(!languageToggle)}
        >
          {languageToggle ? "BD" : "EN"}
        </div>
        <img
          src={cardOneMedicine.data.medicinePicture || emptyProfie}
          alt="Loading.."
          className={medicineDetailsCss.profileImg}
        />
        <img
          src={crossIcon}
          alt="Esc"
          className={medicineDetailsCss.crossIcon}
          onClick={() => dispatch(setShowMedicineDetails())}
        />
        <div>
          {languageToggle
            ? cardOneMedicine.data.medicineName_BD
            : cardOneMedicine.data.medicineName_ENG}
        </div>
        <div>
          {languageToggle
            ? cardOneMedicine.data.description_BD
            : cardOneMedicine.data.description_ENG}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MedicineDetails;
