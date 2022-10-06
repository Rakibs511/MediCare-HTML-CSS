import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import './signin.css';

const SignIn = () => {
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
        />
        <input type="password" className="input-box" placeholder=" Password" />
        {/* <p>
          <span>
            <input type="checkbox" />
          </span>
          agree to the terms of services
        </p> */}
        <button type="button" className="signup-btn">
          Submit
        </button>
        <p>
          you haven't an account? <Link to="/signup">sign up</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default SignIn