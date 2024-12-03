const express=require("express")
const { captainRegister, captainLogin, captainLogout, captainProfile } = require("../controllers/captain.controller")
const captainAuth = require("../services/captainAuth")

const router=express.Router()

router.route("/").post(captainRegister)
router.route("/login").post(captainLogin)
router.route("/logout").get(captainAuth,captainLogout)
router.route("/myprofile").get(captainAuth,captainProfile)



module.exports=router