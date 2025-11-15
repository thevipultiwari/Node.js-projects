const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/mongopractice`)

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  username:String
});

module.exports=mongoose.model("user",userSchema)
