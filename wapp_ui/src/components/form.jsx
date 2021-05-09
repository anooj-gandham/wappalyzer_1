import React, { Component } from "react";
import Table from "./table";
const isUrl = require("is-valid-http-url");
const axios = require("axios");

class Form extends Component {
  state = {
    url: "",
    data: [{ name: "", website: "", confidence: "" }],
    pointer: "pointer",
    disableButton: true,
  };

  async submitClick(url) {
    console.log(url);
    this.setState({ pointer: "wait", disableButton: "true" });
    await axios
      .post("/api/wapp/", {
        url: url,
      })
      .then((response) => {
        this.setState({
          data: response.data,
          pointer: "pointer",
          disableButton: "",
          checkUrl: "",
        });
      });
  }
  render() {
    return (
      <div>
        <h3>Enter URL:</h3>
        <input
          type="text"
          onChange={(e) => {
            const url = e.target.value;
            this.setState({ url });
            console.log(isUrl(url));
            if (!isUrl(url))
              this.setState({
                checkUrl: "Please check URL",
                disableButton: "disabled",
              });
            if (isUrl(url)) this.setState({ checkUrl: "", disableButton: "" });
          }}
        />
        <button
          style={{ cursor: this.state.pointer }}
          className={"m-2"}
          disabled={this.state.disableButton}
          onClick={() => {
            this.submitClick(this.state.url);
          }}
        >
          Submit
        </button>
        <span className={"m-2 btn-danger"}>{this.state.checkUrl}</span>
        <br />
        Example: http://yahoo.com <br />
        {this.state.data[0].name ? (
          <Table data={this.state.data} />
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

export default Form;
