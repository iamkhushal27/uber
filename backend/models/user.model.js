const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        minlength: [3, "first name must be atleast 3 characters"],
      },
      lastName: {
        type: String,
        minlength: [3, "last name must be atleast 3 characters"],
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "email must be atleast 5 characters"],
    },
    password: {
      type: String,
      required: true,
      select:false
    },
    socketId: {
      type: String,
    },
    refreshToken: {
      type: String,
      select:false
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 13);
    return next();
  }
  next();
});
userSchema.methods.veryfyingPassword = async function (password) {
    console.log("here")
    console.log(password)
    console.log(this.password)
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAcesssTokens = async function () {
  return jwt.sign({ _id: this._id }, process.env.ACCESS_SECRET, {
    expiresIn: process.env.ACCESS_EXPIRE,
  });
};
userSchema.methods.generateRefreshTokens = async function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
