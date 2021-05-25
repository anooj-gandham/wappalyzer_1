const JSSoup = require("jssoup").default;
const fs = require("fs");
const { type } = require("os");

async function parseHTML() {
  let rawdata = fs.readFileSync("./routes/results.txt");
  const { html, url, headers, techstack } = JSON.parse(rawdata.toString());
  var soup = new JSSoup(html);
  var tag = soup.findAll("title");
  console.log(tag);
}

parseHTML();
