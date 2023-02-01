import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

const Tutor = () => {
  const [form, setForm] = useState("");

  return (
    <div className="form-container">
      <Login />
      <Signup />
    </div>
  );
};

export default Tutor;
