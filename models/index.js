const mongoose = require("mongoose");
// const dotenv = require("dotenv");

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.refbm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

exports.connectToDatabase = () => {
  return mongoose.connect(connection);
};
