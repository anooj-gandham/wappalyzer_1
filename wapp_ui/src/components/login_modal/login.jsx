import React from "react";
import { Link } from "react-router-dom";
import "../cssUI.css";

export const Modal = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Login Form</h4>
          <p>
            <div>
              <input placeholder="Email" className="loginInput" />
              <br />
              <input
                placeholder="Password"
                type="password"
                className="loginInput"
              />
              <br />
              <button onClick={close} className="loginButton">
                Login
              </button>
              <br />
            </div>
          </p>
        </div>
        <Link to="/signup" className="newUserLink">
          New user, Register here.
        </Link>
      </div>
    </div>
  );
};
