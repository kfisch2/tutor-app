import React from "react";

export default function index() {
  const handleClick = () => window.location.assign('/');
  return (
    <>
      <div className="header">TEACH AND LEARN </div>
      <button onClick={() => handleClick()}>HOME</button>
    </>
  );
}
