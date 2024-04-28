const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose
  .connect(
    "mongodb+srv://somnathc276:vNxvpWU5zmUsBN7x@pinterest.vjjudfk.mongodb.net/?retryWrites=true&w=majority&appName=Pinterest"
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Mongo error:", err));

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
