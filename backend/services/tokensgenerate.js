const User = require("../models/user.model");

async function tokens(id) {
    try {
        const user=await User.findById(id)
        if (!user) {
            throw {
                status:401,message:"id is not given"
            }
        }
        const accessToken=await user.generateAcesssTokens()
        const refreshToken=await user.generateRefreshTokens()
        if (!accessToken&&!refreshToken) {
            throw {
                status:401,message:"tokens is not generated"
            }
        }
        user.refreshToken=refreshToken
        user.save({ validateBeforeSave: false })
        console.log("1")
        return {accessToken,refreshToken}

    } catch (error) {
        console.log(error)
        res.status(error.status||500).json(error.message||"something went wrong")
    }
   
}
module.exports=tokens