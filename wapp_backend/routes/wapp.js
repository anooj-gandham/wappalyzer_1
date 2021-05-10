const express = require("express");
const router = express.Router();
const Wappalyzer = require("wappalyzer");

const options = {
  debug: false,
  delay: 10,
  headers: {},
  maxDepth: 3,
  maxUrls: 10,
  maxWait: 10000,
  recursive: true,
  probe: false,
  userAgent: "Wappalyzer",
  htmlMaxCols: 2000,
  htmlMaxRows: 2000,
};
const wappalyzer = new Wappalyzer(options);

router.post("/", async (req, res) => {
  console.log(req.body.url);
  try {
    await wappalyzer.init();
    const headers = {};
    const site = await wappalyzer.open(req.body.url, headers);
    const results = await site.analyze();
    console.log(results.technologies);
    res.send(results.technologies);
  } catch (error) {
    console.log(error);
  }
  await wappalyzer.destroy();
});

module.exports = router;
