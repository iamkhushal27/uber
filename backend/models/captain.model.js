const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        minlength: [3, "first name must be atleast 3 characters"],
      },
      lastName: {
        type: String,
       
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
      select: false,
    },
    socketId: {
      type: String,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
        minlength: [3, "color must be atleast 3 characters"],
      },
      plate: {
        type: String,
        required: true,
        minlength: [3, "plate must be atleast 3 characters"],
      },
      capacity: {
        type: String,
        required: true,
        minlength: [1, "capacity must be atleast 5 characters"],
      },
      vehicleType: {
        type: String,
        required: true,
        enum: ["car", "motorcycle", "auto"],
      },
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);
captainSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 13);
      return next();
    }
    next();
  });
  captainSchema.methods.veryfyingPassword = async function (password) {
      console.log("here")
      console.log(password)
      console.log(this.password)
    return await bcrypt.compare(password, this.password);
  };
  captainSchema.methods.generateAcesssTokens = async function () {
    return jwt.sign({ _id: this._id }, process.env.CAPTAIN_ACCESS_SECRET, {
      expiresIn: process.env.ACCESS_EXPIRE,
    });
  };
  captainSchema.methods.generateRefreshTokens = async function () {
    return jwt.sign({ _id: this._id }, process.env.CAPTAIN_REFRESH_SECRET, {
      expiresIn: process.env.REFRESH_EXPIRE,
    });
  };
  
  const Captain = mongoose.model("Captain", captainSchema);
  module.exports = Captain;
  