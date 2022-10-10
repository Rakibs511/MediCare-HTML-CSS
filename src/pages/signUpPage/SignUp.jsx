import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {
//   setIsloading,
  setPassword,
  setPhoneNumber,
  setPhoneError,
  setPasswordError,
} from "./signUpSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.signUpSlice.phoneNumber);
  const password = useSelector((state) => state.signUpSlice.password);
  const phoneError = useSelector((state) => state.signUpSlice.phoneError);
  const passwordError = useSelector((state) => state.signUpSlice.passwordError);

  const errorHandleSignUpForm = () => {
    if (!phoneNumber) {
      dispatch(setPhoneError("Phone Number can't be empty!"));
      dispatch(setPasswordError(null));
    } else if (phoneNumber.length < 9) {
      dispatch(setPhoneError("Phone Number Must be More Than 8 Characters!"));
      dispatch(setPasswordError(null));

    } else if (!password) {
      dispatch(setPasswordError("Password can't be empty!"));
      dispatch(setPhoneError(null));
      
    } else if (password.length < 6) {
        dispatch(setPasswordError("Password Must be More Than 5 Characters!"));
        dispatch(setPhoneError(null));
    } else {
      dispatch(setPhoneError(null));
      dispatch(setPasswordError(null));
      if (passwordError === null && phoneError === null) {
        const info= axios({
          method: "post",
          url: "http://localhost:4000/api/v1/signup",
          data: {
            phone: `+88${phoneNumber}`,
            password:password,
          },
        }).then(()=>{
            console.log("Sign Up Success!");
        });
        console.log(info.data.message);
          console.log({
              phoneNumber,
              password,
              phoneError,
              passwordError,
              test: "signUp",
            });
        }
    }
};


const onSubmitHandle = (e) => {
    e.preventDefault();
    errorHandleSignUpForm();
  };
  return (
    <div className="form">
      <img src={Logo} alt="MediCare" />

      <div className="sign-up-form">
        <div>{}</div>
        <h1> Sign Up </h1>
        <form>
          <input
            type="text"
            className="input-box"
            placeholder="Enter Your Phone Number"
            onChange={(e) => {
              dispatch(setPhoneNumber(e.target.value));
            }}
          />
          <div className="error">{phoneError}</div>
          <input
            type="password"
            className="input-box"
            placeholder="Password"
            onChange={(e) => {
              dispatch(setPassword(e.target.value));
            }}
          />
          <div className="error">{passwordError}</div>
          
            <input type="checkbox" required/>
            <span>
            agree to the terms of services
            </span>
        
          <button type="button" className="signup-btn" onClick={onSubmitHandle}>
            Submit
          </button>
          <p>
            Do you have an account? <Link to="/signin">sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
