import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendPhoneNumber } from "../../redux/Profile/actions";
import "./Login.scss";

function Login() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="Login">
      <input
        type="number"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Enter Phone No."
      />
      <button
        onClick={() => dispatch(sendPhoneNumber(phone))}
        className="continueButton"
      >
        <Link to="/dashboard">Get Started</Link>
      </button>
    </div>
  );
}

export default Login;
