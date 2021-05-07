import React, { Component } from "react";

class Table extends Component {
  state = {
    data: [
      {
        slug: "envoy",
        name: "Envoy",
        confidence: 100,
        version: null,
        icon: "Envoy.png",
        website: "https://www.envoyproxy.io/",
        cpe: "cpe:/a:envoyproxy:envoy",
        categories: [
          {
            id: 64,
            slug: "reverse-proxies",
            name: "Reverse proxies",
          },
        ],
      },
      {
        slug: "apache-traffic-server",
        name: "Apache Traffic Server",
        confidence: 100,
        version: null,
        icon: "Apache Traffic Server.png",
        website: "http://trafficserver.apache.org/",
        cpe: "cpe:/a:apache:traffic_server",
        categories: [
          {
            id: 22,
            slug: "web-servers",
            name: "Web servers",
          },
        ],
      },
      {
        slug: "digicert",
        name: "DigiCert",
        confidence: 100,
        version: null,
        icon: "DigiCert.svg",
        website: "https://www.digicert.com/",
        cpe: null,
        categories: [
          {
            id: 70,
            slug: "ssl-tls-certificate-authorities",
            name: "SSL/TLS certificate authorities",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.state.data)}
          {this.state.data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.website}</td>
              <td>{item.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
