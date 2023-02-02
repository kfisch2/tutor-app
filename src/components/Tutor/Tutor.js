import React from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

const Tutor = () => {
  return (
    <>
    <h1>Thank you for helping students learn!</h1>
      {" "}
      <div className="form-container">
        <Login />
        <Signup />
      </div>
    </>
  );
};

export default Tutor;
