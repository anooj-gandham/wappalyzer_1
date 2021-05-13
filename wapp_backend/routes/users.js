const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

mongoose
  .connect("mongodb://localhost/users")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const usersSchema = new mongoose.Schema({
  name: String,
  userid: String,
  mobile: Number,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", usersSchema);

// async function createUser() {
//   const user = new User({
//     name: "Anooj Gandham",
//     userid: "anooj2",
//     mobile: 9999998888,
//     email: "anooj2@gmail.com",
//     password: "12346823",
//   });

//   const result = await user.save();
//   console.log(result);
// }

// async function getUsers() {
//   const users = await User.find({ name: "Anooj" }).select({ name: 1 });
//   console.log(users);
// }

// getUsers();

router.post("/createUser", async (req, res) => {
  const user = new User(req.body);

  const result = await user.save();
  console.log(result);
  res.send("New User created");
});

module.exports = router;
