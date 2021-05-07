import React, { Component } from "react";
const axios = require("axios");

class Form extends Component {
  state = {
    url: "",
    data: [{ name: "", website: "", confidence: "" }],
  };

  updateValue(item) {
    // console.log(item.target.value);
  }

  async submitClick(url) {
    console.log(url);
    await axios
      .post("/api/wapp/", {
        url: url,
      })
      .then((response) => {
        // console.log(response.data);
        // console.log("Done");
        this.setState({ data: response.data });
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <div>
        <h3>Enter URL:</h3>
        <input
          type="text"
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <button
          onClick={() => {
            this.submitClick(this.state.url);
          }}
        >
          Submit
        </button>
        <br />
        Example: http://yahoo.com <br />
        <h3>Technologies used:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Website</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dat) => (
              <tr key={dat.name}>
                <td>{dat.name}</td>
                <td>{dat.website}</td>
                <td>{dat.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
