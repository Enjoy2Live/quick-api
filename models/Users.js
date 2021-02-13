const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
        type: Number,
        required: false,
    }
  },
  { timestamps: true }
);
const User = mongoose.model("user", UserSchema);
module.exports = User;
