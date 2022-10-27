import React, { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import emptyProfile from "../../../assets/icons/emptyProfie.svg";
import "./profileForm.css";
import { useProfileData } from "../profileData/profileDataQuery";
import axios from "axios";
import jwt_decode from "jwt-decode";
import dev from "../../../config/configer";

const ProfileForm = () => {
  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  //todo: ------> Form State <-------------------
  const [proFilePicture, setproFilePicture] = useState(null);
  const [userName, setuserName] = useState(null);
  const [fullName, setfullName] = useState(null);
  const [email, setemail] = useState(null);
  const [dob, setdob] = useState(null);

  //Todo: ----------Get profile Data Query <--------------
  const { data, isLoading } = useProfileData();

  if (isLoading) {
    return <div>Loading</div>;
  }
  const jwtToken =
    localStorage.getItem("authorization") != null &&
    localStorage.getItem("authorization").split(" ");
  const token =
    localStorage.getItem("authorization") != null && jwt_decode(jwtToken[1]);

  const updateHandle = () => {
    axios({
      method: "patch",
      url: `${dev.backendUrl}/api/v1/user/${token.id}`,
      headers: { authorization: localStorage.getItem("authorization") },
      data: {
        profilePicture: proFilePicture!=null ? proFilePicture : data.data.profilePicture,
        userName: userName != null ? userName : data.data.userName,
        name: fullName != null ? fullName : data.data.name,
        email: email != null ? email : data.data.email,
        dob: dob != null ? dob : data.data.dateOfBirth,
        phone: data.data.phone,
      },
    });
    console.log({
      proFilePicture,
      userName,
      fullName,
      email,
      dob,
    });
  };

  return (
    <div>
      <div className="picture">
        <div className="uploadButton">
          <UploadButton
            className="test"
            uploader={uploader}
            options={{
              showFinishButton: false,
              mimeTypes: ["image/jpeg", "image/png", "image/webp"],
              multi: false,
              editor: {
                images: {
                  cropShape: "circ", // "rect" (default) or "circ".
                },
              },
            }}
            onComplete={async (files) => {
              //   console.log(files);
              await setproFilePicture(files[0].fileUrl);
            }}
          >
            {({ onClick }) => (
              <button onClick={onClick}>
                Upload some personal file and images
              </button>
            )}
          </UploadButton>
        </div>
        <div className="text">
          <span className="textMain">Upload</span>
        </div>
        <img
          src={proFilePicture || data.data.profilePicture || emptyProfile}
          alt="preview"
          className="profileImg"
        />
      </div>
      <div className="dataForm" style={{ height: "300px", marginTop: "50px" }}>
        <div style={{ width: "100%" }}>
          <label>User Name</label>
        </div>
        <input
          type="text"
          placeholder="User Name"
          defaultValue={data.data.userName != null ? data.data.userName : ""}
          className="form-input-box"
          onChange={(e) => setuserName(e.target.value)}
        />
        <div style={{ width: "100%" }}>
          <label>Full Name</label>
        </div>
        <input
          type="text"
          placeholder="Enter your Full Name"
          defaultValue={data.data.name != null ? data.data.name : ""}
          className="form-input-box"
          onChange={(e) => setfullName(e.target.value)}
        />
        <div style={{ width: "100%" }}>
          <label>E-mail Address</label>
        </div>
        <input
          type="email"
          placeholder="Enter your E-mail"
          defaultValue={data.data.email != null ? data.data.email : ""}
          className="form-input-box"
          onChange={(e) => setemail(e.target.value)}
        />
        <div style={{ width: "100%" }}>
          <label>Date of Birth</label>
          <br />
          <input
            type="date"
            defaultValue={data.data.age != null ? data.data.dateOfBirth : ""}
            className="form-input-box"
            style={{ marginBottom: "30px" }}
            onChange={(e) => setdob(e.target.value)}
          />
        </div>
        <button
          className="signup-btn"
          style={{ marginTop: "0px", width: "150px" }}
          onClick={updateHandle}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
