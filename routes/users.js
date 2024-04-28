const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://somnathc276:123456789@@pinterest.vjjudfk.mongodb.net/?retryWrites=true&w=majority&appName=Pinterest");

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);