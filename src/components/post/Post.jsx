import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPostToggle } from "../profile/profileSlice";
import TextareaAutosize from "react-textarea-autosize";
import "./post.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import axios from "axios";
import dev from "../../config/config";
import crossIcon from "../../assets/icons/cross.svg";
import { toast, ToastContainer } from "react-toastify";

const Post = () => {
  const dispatch = useDispatch();
  const [medPicture, setmedicinePicture] = useState(null);
  const [medName_ENG, setmedicineName_ENG] = useState(null);
  const [medName_BD, setmedicineName_BD] = useState(null);
  const [desc_ENG, setdescrition_ENG] = useState(null);
  const [desc_BD, setdescription_BD] = useState(null);
  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });
  const postHandle = () => {
    if (medPicture && medName_ENG && medName_BD && desc_ENG && desc_BD) {
      axios({
        method: "post",
        url: `${dev.backendUrl}/api/v1/post/create`,
        headers: { authorization: localStorage.getItem("authorization") },
        data: {
          picture: medPicture,
          name_eng: medName_ENG,
          name_bd: medName_BD,
          description_eng: desc_ENG,
          description_bd: desc_BD,
        },
      });
      dispatch(setPostToggle());
    } else {
      toast.error("❌Input Box Can't be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // console.log({
    //   medPicture,
    //   medName_ENG,
    //   medName_BD,
    //   desc_ENG,
    //   desc_BD,
    // });
  };
  return (
    <>
      <ToastContainer />
      <div
        className="post_hide_div"
        onClick={() => dispatch(setPostToggle())}
      ></div>
      <div className="post_root_div">
        <img
          src={crossIcon}
          alt="Esc"
          className="post_cross_icon"
          onClick={() => dispatch(setPostToggle())}
        />
        <div className="post_title">Create Post</div>
        <img
          src={
            medPicture
              ? medPicture
              : "https://nameproscdn.com/data-auth/b/attachments/106/106343-82907bfea9fe97e84861e2ee7c5b4f5b.data?j=eyJkIjoiaW5saW5lOyBmaWxlbmFtZT1cImVtcHR5LnBuZ1wiIiwiZSI6MTY3MDA1NDA5NiwibSI6ImltYWdlXC9wbmciLCJ0IjoxNjY0ODcwMDk2LCJ2IjoxfQ&k=1bx5jKlcd7f1PiETxHtrnFrHSt0"
          }
          alt="Loading.."
          className="medicinePicture"
        />
        <br />
        <UploadButton
          className="test"
          uploader={uploader}
          options={{
            showFinishButton: false,
            mimeTypes: ["image/jpeg", "image/png", "image/webp"],
            multi: false,
            editor: {
              images: {
                cropShape: "rect", // "rect" (default) or "circ".
              },
            },
          }}
          onComplete={async (files) => {
            //   console.log(files);
            await setmedicinePicture(files[0].fileUrl);
          }}
        >
          {({ onClick }) =>
            medPicture === null && (
              <button className="Post_Upload_button" onClick={onClick}>
                Click Here to upload Picture
              </button>
            )
          }
        </UploadButton>
        <div className="post_input_label_text">Medicine Name</div>
        <input
          type="text"
          placeholder="Enter Medicine Name"
          className="input-box"
          style={{ width: "80%", marginLeft: "7%", fontWeight: "bold" }}
          onChange={(e) => setmedicineName_ENG(e.target.value)}
        />
        <div className="post_input_label_text">ঔষুধ এর নাম</div>
        <input
          type="text"
          placeholder="ঔষুধ এর নামটি লিখুন"
          style={{ width: "80%", marginLeft: "7%", fontWeight: "bold" }}
          className="input-box"
          onChange={(e) => setmedicineName_BD(e.target.value)}
        />
        <div className="post_input_label_text">Description of Medicine</div>
        <TextareaAutosize
          placeholder="Enter Description of the Medicine"
          className="input-box"
          style={{ width: "80%", marginLeft: "7%", fontWeight: "bold" }}
          onChange={(e) => setdescrition_ENG(e.target.value)}
        />
        <div className="post_input_label_text">ঔষুধ এর বর্ণনা</div>
        <TextareaAutosize
          placeholder="এখানে ঔষুধ এর বর্ণনা দিন"
          className="input-box"
          style={{ width: "80%", marginLeft: "7%", fontWeight: "bold" }}
          onChange={(e) => setdescription_BD(e.target.value)}
        />
        <br />
        <button
          className="signup-btn"
          style={{ width: "140px", marginLeft: "30%" }}
          onClick={postHandle}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default Post;
