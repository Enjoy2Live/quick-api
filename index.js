const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { connectToDatabase } = require("./models");
const User = require("./models/Users");

connectToDatabase();

app.use(cors());
app.use(express.json());
app.get("/users", async (req, res) => {
  console.log("request: ", req.path);
  const allUsers = await User.find();
  res.json(allUsers);
});

app.post("/users", async (req, res) => {
  console.log(req.body);
  const createdUser = await User.create(req.body);
  res.json(createdUser);
});

app.listen(process.env.PORT || 4000, '0.0.0.0');
