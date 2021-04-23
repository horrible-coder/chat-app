import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPhoneNumber } from "../../redux/Profile/actions";
import Logo from "../../assets/logo.svg";
import "./Login.scss";

function Login() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleClick = () => {
    try {
      if (!phone) {
        throw new Error("Please provide a phone no.");
      }
      if (phone.length !== 10) {
        throw new Error("Phone no. should be of 10 digits.");
      }
    } catch (err) {
      window.alert(err);
      return;
    }
    dispatch(sendPhoneNumber(phone));
    history.push("/dashboard");
  };

  return (
    <div className="Login">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="loginContainer">
        <h1 className="loginHeading">Login</h1>
        <input type="text" placeholder="Name" />
        <input
          type="number"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
        />
        <button onClick={handleClick} className="continueButton">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Login;
