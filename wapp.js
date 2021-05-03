
const express = require('express');
const Wappalyzer = require('wappalyzer');
const app = express();

app.use(express.json());

const options = {
    debug: false,
    delay: 10,
    headers: {},
    maxDepth: 3,
    maxUrls: 10,
    maxWait: 5000,
    recursive: true,
    probe: false,
    userAgent: 'Wappalyzer',
    htmlMaxCols: 2000,
    htmlMaxRows: 2000,
  };
const wappalyzer = new Wappalyzer(options)


// app.post('/api/url/', (req,res) => {
//     console.log(1);
//     var url = req.body.url;
//     var result = get_wapp(url);
//     res.send(result);
// });



app.post('/api/wapp', async(req, res) => {
    console.log(req.body.url)
    try {
      await wappalyzer.init();
      const headers = {};
      const site = await wappalyzer.open(req.body.url,headers);
      const results = await site.analyze();
      console.log(results.technologies);
      res.send(results.technologies);
    } catch (error) {
      console.log(error);
    }
    await wappalyzer.destroy();
  });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
