import React, { Component } from "react";
import Table from "./table";
const isUrl = require("is-valid-http-url");
const axios = require("axios");

class Form extends Component {
  state = {
    url: "",
    data: [{ name: "error", website: "", confidence: "" }],
    pointer: "pointer",
    disableButton: true,
    checkUrl: "",
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
            checkUrl: "Please check URL",
          });
        else
          this.setState({
            data: response.data,
            pointer: "pointer",
            disableButton: false,
            checkUrl: "",
          });
      });
  }
  render() {
    return (
      <div className={"App"}>
        <h3>Enter URL:</h3>
        <input
          type="text"
          accept={true}
          onChange={(e) => {
            const url = e.target.value;
            this.setState({ url });
            if (!isUrl(url))
              this.setState({
                checkUrl: "Please check URL",
                disableButton: true,
              });
            if (isUrl(url))
              this.setState({ checkUrl: "", disableButton: false });
          }}
        />
        <button
          style={{ cursor: this.state.pointer }}
          className={"m-2"}
          disabled={this.state.disableButton ? 1 : 0}
          onClick={() => {
            this.submitClick(this.state.url);
          }}
        >
          Submit
        </button>
        <br />
        {this.state.checkUrl ? (
          <span className={"m-2 btn-danger"}>Please check the URL</span>
        ) : (
          <span></span>
        )}
        <br />
        Example: http://yahoo.com <br />
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
