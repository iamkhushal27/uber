const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
async function auth(req, res, next) {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!accessToken) {
      throw {
        status: 401,
        message: "unothorized access",
      };
    }
    const id = await jwt.verify(accessToken, process.env.ACCESS_SECRET);
    console.log(id);
    const user =await User.findById(id).select("+password +refreshToken");
    if (!user) {
      throw {
        status: 401,
        message: "unothirez access",
      };
    }
    console.log(user,"here")

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json(error.message || "something went wrong");
  }
}
module.exports=auth
