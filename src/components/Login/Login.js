import React from "react";
// import { TUTOR_MUTATIONS } from "../../utils/mutations";
// import { useMutation } from "@apollo/client";

const Login = () => {
  const handleSubmit = () => console.log()
  return (
    <div>
      <form className="login" onSubmit={() => handleSubmit()}>
        <label>Username</label>
        <input></input>

        <label>Password</label>
        <input></input>

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
