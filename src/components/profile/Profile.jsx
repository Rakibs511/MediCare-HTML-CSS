import React, { useState } from "react";
import profileCss from "./profile.module.css";
import { useDispatch } from "react-redux";
import { setProfileToggle} from "../profile/profileSlice";
import ProfileForm from "./profileForm/ProfileForm";
import ProfileData from "./profileData/ProfileData";
import editIcon from "../../assets/icons/edit.svg";
import crossIcon from "../../assets/icons/cross.svg";

const Profile = () => {
  const [formTaggle, setformTaggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={profileCss.rootDiv}
        onClick={() => dispatch(setProfileToggle())}
      ></div>
      <div className={profileCss.profile}>
        <img
          src={editIcon}
          alt="Edit"
          className={profileCss.editIcon}
          onClick={() => setformTaggle(!formTaggle)}
        />
        <img
          src={crossIcon}
          alt="Back"
          style={{ right: 0 }}
          className={profileCss.editIcon}
          onClick={() => dispatch(setProfileToggle())}
        />
        {formTaggle ? <ProfileForm /> : <ProfileData />}
      </div>
    </>
  );
};

export default Profile;
