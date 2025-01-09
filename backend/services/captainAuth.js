const jwt = require("jsonwebtoken");
const Captain = require("../models/captain.model");

async function captainAuth(req, res, next) {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      throw {
        status: 401,
        message: "unothorized access",
      };
    }
    const id = await jwt.verify(accessToken, process.env.ACCESS_SECRET);
    console.log(id);
    const captain =await Captain.findById(id).select("+password +refreshToken");
    if (!captain) {
      throw {
        status: 401,
        message: "unothirez access",
      };
    }
    console.log(captain,"here")

    req.captain = captain;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json(error.message || "something went wrong");
  }
}
module.exports=captainAuth
