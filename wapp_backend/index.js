const express = require("express");
const wapp = require("./routes/wapp");
const app = express();

app.use(express.json());
app.use("/api/wapp", wapp);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
