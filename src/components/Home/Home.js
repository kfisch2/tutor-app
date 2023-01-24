import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

export default function Home(props) {

  const handleClick = (input) => window.location.assign(`/${input}`)

  return (
    <div className="main-page">
      <h1>Welcome! Who are you?</h1>
      <div className="button-container">
        <button onClick={() => handleClick("tutor")}>Tutor</button>
        <button onClick={()=> handleClick("student")}>Student</button>
      </div>
      <div className="about-description">
        <h4>Blurb about the site</h4>
      </div>
    </div>
  );
}