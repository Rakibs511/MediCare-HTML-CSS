import React from "react";
import SmallCard from "../smallCard/SmallCard";
import { useGetMyPost } from "./getMyPostData";
import myPostCss from "./myPost.module.css";
import crossIcon from "../../assets/icons/cross.svg";
import { useDispatch } from "react-redux";
import { setMyPostToggle } from "./myPostSlice";
import ReactLoading from "react-loading";


const MyPost = () => {
   const dispatch= useDispatch()
  const { data, isLoading } = useGetMyPost();
  if (isLoading) {
    return (
      <div className={myPostCss.loading}>
        <ReactLoading type={"bubbles"} color={"orange"} width={150} />
      </div>
    );

  }
  return (
    <>
      <div
        className={myPostCss.hideDiv}
        onClick={() => {
          dispatch(setMyPostToggle());
        }}
      ></div>
      <div className={myPostCss.rootDiv}>
        <img
          src={crossIcon}
          alt="Esc"
          className={myPostCss.crossIcon}
          onClick={() => {
            dispatch(setMyPostToggle());
          }}
        />
        <div className={myPostCss.text}>My Post</div>
        <div className={myPostCss.mainSection}>
          <div className={myPostCss.card}>
            {data.data.map((data) => {
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
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPost;
