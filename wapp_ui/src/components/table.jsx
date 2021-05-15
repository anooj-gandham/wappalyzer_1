import React, { Component } from "react";
import "./cssUI.css";
class Table extends Component {
  state = {};
  render() {
    return (
      <div>
        <label className="techused">Technologies used: </label>
        <br />
        <div className="table_css">
          <table className="tableBody">
            <thead>
              <tr className="tableHeadRow">
                <th className="thname">Name</th>
                <th className="thtype">Type</th>
                <th className="thwebsite">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((dat) => (
                <tr key={dat.name} className="tableRow">
                  <td className="tableCell">{dat.name}</td>
                  <td className="tableCell">{dat.categories[0].name}</td>
                  <td className="tableCell">
                    <i>
                      <a href={dat.website}>{dat.website}</a>
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
