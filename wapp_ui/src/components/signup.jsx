import React, { Component } from "react";
import "./cssUI.css";
const axios = require("axios");

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    account: {
      name: "",
      userid: "",
      email: "",
      password: "",
      mobile: "",
    },
  };

  valueHandler(e) {
    const { value, id } = e;
    const account = { ...this.state.account };
    account[id] = value;
    this.setState({ account });
    // console.log(this.state.account);
    // console.log(this.props);
  }

  onSubmit = () => {
    const accountDetails = { ...this.state.account };
    axios
      .post("/api/users/createUser", accountDetails)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.history.replace("/home");
  };

  render() {
    return (
      <div className="signupBody">
        <h2 className="signupHeader">Registration</h2>
        <div className="box">
          <input
            type="text"
            id="name"
            className="signupInput"
            placeholder="Name"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <input
            type="text"
            id="userid"
            className="signupInput"
            placeholder="UserID"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <input
            type="text"
            id="mobile"
            className="signupInput"
            placeholder="Mobile"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <input
            type="email"
            id="email"
            className="signupInput"
            placeholder="Email"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <input
            type="password"
            id="password"
            className="signupInput"
            placeholder="Password"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <button onClick={this.onSubmit} className="signupButton">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
