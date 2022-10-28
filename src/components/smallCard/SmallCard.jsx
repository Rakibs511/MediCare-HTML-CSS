import React from "react";
import { useDispatch } from "react-redux";
import { setShowMedicineDetails } from "../ShowMedcineDetails/medicineDetailsSlice";
import smallcardCss from "./smallCard.module.css";
import { setCartKey } from "./smallCardSlice";

const SmallCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={smallcardCss.rootDiv}
      onClick={() => {
        dispatch(setShowMedicineDetails());
        dispatch(setCartKey(props.id));
      }}
    >
      <img className={smallcardCss.img} src={props.img} alt="Medicine" />
      <div className={smallcardCss.medName}>{props.name}</div>
    </div>
  );
};

export default SmallCard;
