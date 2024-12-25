const { json } = require("express");
const User = require("../models/user.model");
const tokens = require("../services/tokensgenerate");
const jwt = require("jsonwebtoken");

module.exports = {
  userRegister: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;

      if (!fullName || !email || !password) {
        throw { status: 401, message: "all fields are required" };
      }

      const user = await User.findOne({ email });
      if (user) {
        throw {
          status: 401,
          message: "this email is already in use try newone",
        };
      }

      const newUser = await User.create({
        fullName: {
          firstName: fullName.firstName,
          lastName: fullName.lastName,
        },
        email,
        password,
      });

      if (!newUser) {
        throw {
          status: 401,
          message: "something went wrong during creating newUser",
        };
      }

      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { status: 401, message: "all fields are required" };
      }

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        throw { status: 401, message: "email is wrong" };
      }
      const isPasswordCorrect = await user.veryfyingPassword(password);

      if (!isPasswordCorrect) {
        throw { status: 401, message: "password is wrong" };
      }
      const { accessToken, refreshToken } = await tokens(user._id);
      //   console.log(accessToken, refreshToken);
      if (!accessToken && !refreshToken) {
        throw { status: 401, message: "tokens are not produce" };
      }

      const options = {
        httpOnly: true,
        secure: true,
      };
      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(user);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  userLogout: async (req, res) => {
    try {
      const { user } = req;

    
      if (!user) {
        throw { status: 401, message: "unothorized accesss1" };
      }
      user.refreshToken = undefined;
      user.save({ validateBeforeSave: false });
     

      const options = {
        httpOnly: true,
        secure: true,
      };

      res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json("logout suucessfully");
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  getUserProfile: async (req, res) => {
    try {
      const { user } = req;
      if (!user) {
        throw { status: 401, message: "unothorized accesss1" };
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
};
