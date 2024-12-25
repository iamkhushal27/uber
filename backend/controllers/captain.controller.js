const { json } = require("express");
const Captain = require("../models/captain.model");
const tokens = require("../services/tokensgenerate");
const jwt = require("jsonwebtoken");

module.exports = {
  captainRegister: async (req, res) => {
    try {
      const { fullName, email, password, vehicle } = req.body;

      if (!fullName || !email || !password || !vehicle) {
        throw { status: 401, message: "all fields are required" };
      }

      const captain = await Captain.findOne({ email });
      if (captain) {
        throw {
          status: 401,
          message: "this email is already in use try newone",
        };
      }

      const newCaptain = await Captain.create({
        fullName: {
          firstName: fullName.firstName,
          lastName: fullName.lastName,
        },
        email,
        password,
        vehicle: {
          color: vehicle.color,
          plate: vehicle.plate,
          capacity: vehicle.capacity,
          vehicleType: vehicle.vehicleType,
        },
      });

      if (!newCaptain) {
        throw {
          status: 401,
          message: "something went wrong during creating newCaptain",
        };
      }

      res.status(200).json(newCaptain);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  captainLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { status: 401, message: "all fields are required" };
      }

      const captain = await Captain.findOne({ email }).select("+password");

      if (!captain) {
        throw { status: 401, message: "email is wrong" };
      }
      const isPasswordCorrect = await captain.veryfyingPassword(password);

      if (!isPasswordCorrect) {
        throw { status: 401, message: "password is wrong" };
      }
      const { accessToken, refreshToken } = await tokens(captain._id);
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
        .json(captain);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  captainLogout: async (req, res) => {
    try {
      const { captain } = req;

      console.log(captain);
      if (!captain) {
        throw { status: 401, message: "unothorized accesss1" };
      }
      captain.refreshToken = undefined;
      captain.save({ validateBeforeSave: false });
    

      const options = {
        httpOnly: true,
        secure: true,
      };

      res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json("captain logout suucessfully");
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
  captainProfile: async (req, res) => {
    try {
      const { captain } = req;
      if (!captain) {
        throw { status: 401, message: "unothorized accesss1" };
      }
      res.status(200).json(captain);
    } catch (error) {
      console.log(error);
      res
        .status(error.status || 500)
        .json(error.message || "something went wrong");
    }
  },
};
