import React from "react";
import "./Header.css";

export default function index() {
  const handleClick = () => window.location.assign("/");
  return (
    <>
      <div className="header">
        TEACH AND LEARN
        <a href='/'><img src={require('./home-icon.png')}className="home-button" onClick={() => handleClick()}></img></a>
      </div>
    </>
  );
}
