import React from "react";
import Login from "../Login/Login.js";
import Signup from "../Login/Signup.js";
import StudentDashboard from "./StudentDashboard.js";

const Student = () => {
  return (
    <>
    {/* <h1>A tutor will be paired with you soon!</h1>
      {" "}
      <div className="form-container">
        <Login />
        <Signup />
      </div> */}
      <StudentDashboard/>
    </>
  );
};

export default Student;
