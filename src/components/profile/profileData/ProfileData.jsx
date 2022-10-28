import React from "react";
import emptyProfile from "../../../assets/icons/emptyProfie.svg";
import "../profileForm/profileForm.css";
import { useProfileData } from "./profileDataQuery";
// import { useDispatch,} from "react-redux";
// import { setUserID } from "../profileSlice";

const ProfileData = () => {
  //    useDispatch(setUserID(token[1].id));

  const { data, isLoading } = useProfileData();

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div className="picture">
        <img
          src={
            data.data.profilePicture?
            data.data.profilePicture : emptyProfile
          }
          alt="preview"
          className="profileImg"
        />
      </div>
      <div className="dataForm">
        <div>
          <label>User Name</label>
        </div>
        <p className="form-input-box">
          {data.data.userName != null ? data.data.userName : "Empty"}
        </p>
        <div>
          <label>Full Name</label>
        </div>
        <p
          className="form-input-box"
          style={
            {
              // fontWeight: "bold",
              // backgroundColor: "#D1D0E0",
              // fontSize: "20px",
              // boxShadow: "1px 1px 10px #0000001d",
            }
          }
        >
          {data.data.name != null ? data.data.name : "Empty"}
        </p>
        <div>
          <label>Number</label>
        </div>
        <p className="form-input-box">
          {data.data.phone != null ? data.data.phone : "Empty"}
        </p>
        <div>
          <label>E-mail Address</label>
        </div>
        <p className="form-input-box">
          {data.data.email != null ? data.data.email : "Empty"}
        </p>
        <div>
          <label>Date of Birth</label>
          <p className="form-input-box">
            {data.data.dateOfBirth != null ? data.data.dateOfBirth : "Empty"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
