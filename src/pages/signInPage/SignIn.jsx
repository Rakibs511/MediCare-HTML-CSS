import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "../signInPage/signin.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const errorHandleSignInForm = () => {
    if (!phoneNumber) {
      setPhoneError("Phone Number can't be empty!");
      setPasswordError(null);
    } else if (phoneNumber.length < 9) {
      setPhoneError("Phone Number Must be More Than 8 Characters!");
      setPasswordError(null);
    } else if (!password) {
      setPasswordError("Password can't be empty!");
      setPhoneError(null);
    } else if (password.length < 6) {
      setPasswordError("Password Must be More Than 5 Characters!");
      setPhoneError(null);
    } else {
      setPhoneError(null);
      setPasswordError(null);
    }
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    errorHandleSignInForm();
    if (passwordError === null && phoneError === null) {
      axios({
        method: "post",
        url: "http://localhost:4000/api/v1/signin",
        data: {
          phone: `+88${phoneNumber}`,
          password: password,
        },
      }).then((res) => {
        localStorage.setItem("authorization", `Berar ${res.data.token}`);
        console.log(res.data.message);
        // console.log(res.data);
        if (res.data.success === true) {
          navigate("/home");
        }
      });
    }
  };
  //==============================

  return (
    <div className="form">
      <img src={Logo} alt="MediCare" />
      <div className="sign-up-form">
        <h1> Sign in </h1>
        <form>
          <input
            type="Phone"
            className="input-box"
            placeholder="Enter Your Phone Number"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <div className="error">{phoneError}</div>
          <input
            type="password"
            className="input-box"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="error">{passwordError}</div>
          <button type="button" className="signup-btn" onClick={onSubmitHandle}>
            Submit
          </button>
          <p>
            Do you haven't an account? <Link to="/signup">sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
