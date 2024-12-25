const Captain = require("../models/captain.model");
const User = require("../models/user.model");

async function tokens(id) {
  try {
    const user = await User.findById(id);
    let accessToken;
    let refreshToken;

    if (!user) {
      const captain = await Captain.findById(id);
      if (!captain) {
        throw {
          status: 400,
          message: "unothirez access",
        };
      }

      accessToken = await captain.generateAcesssTokens();
      refreshToken = await captain.generateRefreshTokens();

      if (!refreshToken && !accessToken) {
        throw {
          status: 401,
          message: "tokens is not generated",
        };
      }

      captain.refreshToken = refreshToken;
      captain.save({ validateBeforeSave: false });

     
      return { accessToken, refreshToken };

    }

    accessToken = await user.generateAcesssTokens();
    refreshToken = await user.generateRefreshTokens();

    if (!accessToken && !refreshToken) {
      throw {
        status: 401,
        message: "tokens is not generated",
      };
    }

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });

   
    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
    // res.status(error.status||500).json(error.message||"something went wrong")
  }
}
module.exports = tokens;
