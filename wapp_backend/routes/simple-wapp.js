const express = require("express");
const router = express.Router();
const wappalyzer = require("simple-wappalyzer");
const getHTML = require("html-get");
const fs = require("fs");

const dir = __dirname + "/";

router.post("/", async (req, res) => {
  console.log(req.body.url);
  var url_ = req.body.url;
  const { url, html, statusCode, headers } = await getHTML(url_);
  const results = await wappalyzer({ url, html, statusCode, headers });
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const urls = html.match(urlRegex);
  domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;
  const domains = urls.map((u) => u.match(domainRegex)[0].split("//")[1]);

  const writeText = {
    html: html,
    url: url,
    urls: urls,
    headers: headers,
    domains: domains,
    techstack: results,
  };
  fs.writeFile(dir + "results.txt", JSON.stringify(writeText), function (err) {
    if (err) {
      return console.log(err);
    }
    res.send(results);
  });
});

module.exports = router;
