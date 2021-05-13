import React, { Component } from "react";

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
      <div>
        <h2 className="App">Registration</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <label>User ID</label>
          <input
            type="text"
            id="userid"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <label>Mobile</label>
          <input
            type="text"
            minimum="10"
            id="mobile"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              this.valueHandler(e.target);
            }}
          />
          <br />
          <button onClick={this.onSubmit} className="btn-primary m-2">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
