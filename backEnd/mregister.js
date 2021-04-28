const mongoose = require("mongoose");
const registeruserSchema = new mongoose.Schema({
  email: { type: String },
 
});

registeruserSchema.set("timestamps", true);
module.exports = mongoose.model("register", registeruserSchema, "register");