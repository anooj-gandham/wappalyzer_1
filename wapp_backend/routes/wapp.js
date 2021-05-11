const express = require("express");
const router = express.Router();
const Wappalyzer = require("wappalyzer");

const options = {
  debug: false,
  delay: 10,
  headers: {},
  maxDepth: 3,
  maxUrls: 10,
  maxWait: 30000,
  recursive: true,
  probe: false,
  userAgent: "Wappalyzer",
  htmlMaxCols: 2000,
  htmlMaxRows: 2000,
};
const wappalyzer = new Wappalyzer(options);

router.post("/", async (req, res) => {
  console.log(req.body.url);
  var url = req.body.url;
  try {
    await wappalyzer.init();
    const headers = {};
    const err = [{ name: "error", website: "", confidence: "" }];
    const site = await wappalyzer.open(url, headers);
    const results = await site.analyze();
    const output = results.technologies;
    if (Object.keys(output).length === 0) {
      res.send(err);
    } else {
      res.send(output);
    }
  } catch (error) {
    // console.log(error);
  }
  await wappalyzer.destroy();
});

module.exports = router;
