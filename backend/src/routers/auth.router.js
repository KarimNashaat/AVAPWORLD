const express = require('express')
const router = express.Router()
const passport = require('passport')
const { login, register, autoLogin } = require('../controllers/auth.controller')
const { contact } = require('../controllers/user.controller')

router.post("/login", passport.authenticate("local", { session: false }), login)
router.post("/register", register)
router.get("/autoLogin", passport.authenticate("jwt", { session: false }), autoLogin)
router.post("/contact", contact)

module.exports = router