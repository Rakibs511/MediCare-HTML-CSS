import React from "react";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onclickHandle = () => {
    localStorage.removeItem("authorization");
    navigate("/signin");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={onclickHandle}>Sign out</button>
    </div>
  );
};

export default Home;
