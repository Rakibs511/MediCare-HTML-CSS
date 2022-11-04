import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../../assets/logo.svg";
import dev from "../../config/config";
import {
  setPassword,
  setPhoneNumber,
  setPhoneError,
  setPasswordError,
} from "./signUpSlice";

//Todo: ------------> Functional component <---------------------
const SignUp = () => {
  const [navigatePage, setnavigatePage] = useState(false);
  const navigate = useNavigate();
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
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    errorHandleSignUpForm();
    if (passwordError === null && phoneError === null) {
      axios({
        method: "post",
        url: `${dev.backendUrl}/api/v1/signup`,
        data: {
          phone: `+88${phoneNumber}`,
          password: password,
        },
      })
        .then(() => {
          toast.success("✔Sign Up Successful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setnavigatePage(true);
        })
        .catch((error) => {
          // console.log(error.response.status);
          toast.error(
            error.response.status === 409
              ? "Already Have an account!"
              : "❌Invalid Phone Number or Password!",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          //console.log("Check your number and password");
        });
      //   console.log({
      //       phoneNumber,
      //       password,
      //       phoneError,
      //       passwordError,
      //       test: "signUp",
      //     });
    }
  };
  return (
    <div className="form">
      {localStorage.getItem("authorization") && (
        <div className="haveAnAccount">
          <div>You already Sign-up please go to</div>
          <button onClick={()=>navigate("/")}>Home Page</button>
        </div>
      )}
      {navigatePage && <div className="navigateBackground"></div>}
      {navigatePage && (
        <div className="navigateToLoginPage">
          <button
            onClick={() => navigate("/signin")}
            className="signup-btn"
            style={{ width: "165px", margin: "23%", marginTop: "80px" }}
          >
            Go To Sign-in Page
          </button>
        </div>
      )}
      <ToastContainer />
      <img src={Logo} alt="MediCare" />

      <div className="sign-up-form">
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

          <input type="checkbox" required />
          <span>agree to the terms of services</span>

          <button className="signup-btn" onClick={onSubmitHandle}>
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
