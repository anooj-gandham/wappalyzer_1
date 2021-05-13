import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Technologies used:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((dat) => (
              <tr key={dat.name}>
                <td>{dat.name}</td>
                <td>{dat.categories[0].name}</td>
                <td>{dat.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
