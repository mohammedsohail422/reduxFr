import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(authActions.login());
  };
  ////////////////////////////////////////////////////////////////
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye(!eye);
    console.log(eye);
  };
  ////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type={eye ? "text" : "password"} name="password" id="password" />
        {eye ? (
          <span onClick={toggleEye}>hide</span>
        ) : (
          <span onClick={toggleEye}>show</span>
        )}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
