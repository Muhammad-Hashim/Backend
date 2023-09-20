const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requird: true },
    password: { type: String, requird: true },
  },
  {
    versionkey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
