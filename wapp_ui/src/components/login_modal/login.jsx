import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

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
            <div className="modal-content-fields">
              <span>Email*</span>
              <input />
              <br />
              <span>Name*</span>
              <input />
              <br />
              <span>Password*</span>
              <input />
              <br />
            </div>
          </p>
        </div>
        <Link to="/signup">New user, Register here.</Link>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
