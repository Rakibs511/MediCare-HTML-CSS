import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Pages } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (!authorization) {
      navigate("/signup");
    }
  });
  return <Pages />;
};

export default Protected;
