const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String },
 
});

userSchema.set("timestamps", true);
module.exports = mongoose.model("logintable", userSchema, "login");