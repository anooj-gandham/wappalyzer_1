const express = require("express");
const app = express();
const wapp = require("./routes/wapp");
const simplewapp = require("./routes/simple-wapp");
const users = require("./routes/users");

app.use(express.json());
app.use("/api/wapp", wapp);
app.use("/api/simple-wapp", simplewapp);
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
