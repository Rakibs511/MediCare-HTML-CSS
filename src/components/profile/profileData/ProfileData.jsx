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
          src={data.data.profilePicture!=null?data.data.profilePicture:emptyProfile}
          alt="preview"
          className="profileImg"
        />
      </div>
      <div className="form" style={{ height: "300px", marginTop: "50px" }}>
        <div style={{ width: "100%" }}>
          <label>User Name</label>
        </div>
        <p className="input-box">
          {data.data.userName != null ? data.data.userName : "Empty"}
        </p>
        <div style={{ width: "100%" }}>
          <label>Full Name</label>
        </div>
        <p className="input-box">
          {" "}
          {data.data.name != null ? data.data.name : "Empty"}
        </p>
        <div style={{ width: "100%" }}>
          <label>Number</label>
        </div>
        <p className="input-box">
          {data.data.phone != null ? data.data.phone : "Empty"}
        </p>
        <div style={{ width: "100%" }}>
          <label>E-mail Address</label>
        </div>
        <p className="input-box">
          {data.data.email != null ? data.data.email : "Empty"}
        </p>
        <div style={{ width: "100%" }}>
          <label>Date of Birth</label>
          <p className="input-box">
            {data.data.dateOfBirth != null ? data.data.dateOfBirth : "Empty"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
