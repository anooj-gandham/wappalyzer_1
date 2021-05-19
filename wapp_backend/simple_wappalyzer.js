const wappalyzer = require("simple-wappalyzer");
const getHTML = require("html-get");
const fs = require("fs");

const url_ = "https://github.com/AliasIO/Wappalyzer";
const dir = __dirname + "/";

async function htmlds(url_, dir) {
  const { url, html, statusCode, headers } = await getHTML(url_);
  const results = await wappalyzer({ url, html, statusCode, headers });
  //   console.log(results);
  fs.writeFile(dir + "html.txt", html, function (err) {
    if (err) {
      console.log("Error in writing html.txt: " + err);
      return console.log(err);
    }

    console.log("html done");

    fs.writeFile(dir + "results.txt", JSON.stringify(results), function (err) {
      if (err) {
        console.log("Error in writing results.txt: " + err);
        return console.log(err);
      }
      console.log("results done");
    });
  });
}

htmlds(url_, dir);

// console.log(html);
