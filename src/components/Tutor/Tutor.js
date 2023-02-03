import React from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import './Tutor.css'

const Tutor = () => {
  return (
    <>
    <div className="tutor-page">
    <h1>Thank you for helping students learn!</h1>
      {" "}
      <div className="form-container">
        <Login />
        <Signup />
      </div>
      </div>
    </>
  );
};

export default Tutor;
