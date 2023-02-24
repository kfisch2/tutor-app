import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import StudentDashboard from "../Student/StudentHeader";
import './Home.css';

export default function Home(props) {
  const handleClick = (input) => window.location.assign(`/${input}`);

  return (
    <div className="main-page">
      <h1>Welcome! Who are you?</h1>
      <div className="button-container">
        <button onClick={() => handleClick("tutor")}>Tutor</button>
        <button onClick={()=> handleClick("student")}>Student</button>
      </div>
      <div className="about-description">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
      </div>
    </div>
  );
}
