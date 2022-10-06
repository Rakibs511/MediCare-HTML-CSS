import React from "react";
import { Link } from "react-router-dom";
import "../signUpPage/signup.css";
import Logo from "../../assets/logo.svg";

const SignUp = () => {
  return (
    <div className="form">
      <img src={Logo} alt="MediCare" />

      <div className="sign-up-form">
        <h1> Sign Up </h1>
        <form>
          <input
            type="email"
            className="input-box"
            placeholder="Enter Your Phone Number"
          />
          <input
            type="password"
            className="input-box"
            placeholder=" Password"
          />
          <p>
            <span>
              <input type="checkbox" />
            </span>
            agree to the terms of services
          </p>
          <button type="button" className="signup-btn">
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
