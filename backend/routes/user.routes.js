const express=require("express")
const { userRegister, userLogin, userLogout, getUserProfile } = require("../controllers/user.controller")
const auth = require("../services/auth")

const router=express.Router()

router.route("/").post(userRegister)
router.route("/login").post(userLogin)
router.route("/logout").get(auth,userLogout)
router.route("/myprofile").get(auth,getUserProfile)

module.exports=router