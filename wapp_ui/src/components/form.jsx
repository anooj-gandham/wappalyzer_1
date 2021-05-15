import React, { Component } from "react";
import Table from "./table";
import "./cssUI.css";
const isUrl = require("is-valid-http-url");
const axios = require("axios");

class Form extends Component {
  state = {
    url: "",
    data: [{ name: "error", website: "", confidence: "" }],
    pointer: "pointer",
    disableButton: true,
    checkUrl: "inputUrl",
  };

  async submitClick(url) {
    this.setState({ pointer: "wait", disableButton: "true" });
    await axios
      .post("/api/wapp/", {
        url: url,
      })
      .then((response) => {
        if (response.data[0].name === "error")
          this.setState({
            data: response.data,
            pointer: "default",
            disableButton: true,
            checkUrl: "inputUrl1",
          });
        else
          this.setState({
            data: response.data,
            pointer: "pointer",
            disableButton: false,
            checkUrl: "inputUrl",
          });
      });
  }
  render() {
    return (
      <div className="formBody">
        <img
          src="https://image.flaticon.com/icons/png/512/2435/2435014.png"
          className="icon"
          align="left"
          alt="Logo"
        />
        <input
          placeholder="Enter URL, http://xyz.abc/pqr"
          className={this.state.checkUrl}
          type="text"
          onChange={(e) => {
            const url = e.target.value;
            this.setState({ url });
            if (!isUrl(url))
              this.setState({
                checkUrl: "inputUrl1",
                disableButton: true,
              });
            if (isUrl(url))
              this.setState({ checkUrl: "inputUrl", disableButton: false });
          }}
        />
        <button
          style={{ cursor: this.state.pointer }}
          className="submitUrlButton"
          disabled={this.state.disableButton ? 1 : 0}
          onClick={() => {
            this.submitClick(this.state.url);
          }}
        >
          Submit
        </button>
        <br />
        {/* {this.state.checkUrl ? (
          <span className={"m-2 btn-danger"}>Please check the URL</span>
        ) : (
          <span></span>
        )}
        <br /> */}
        {this.state.data[0].name !== "error" ? (
          <Table data={this.state.data} />
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

export default Form;
