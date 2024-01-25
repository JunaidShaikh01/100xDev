const mongoose = require("mongoose");
const { string, number } = require("zod");

require("dotenv").config();
const mongoUrl = process.env.mongo_url;
mongoose.connect(mongoUrl);

const UserSchema = mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
});

const accountSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  balance: Number,
});

const User = mongoose.model("Users", UserSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
