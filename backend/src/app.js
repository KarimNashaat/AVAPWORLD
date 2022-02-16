const express = require('express')
const cors = require('cors')
const app = express()
const passport = require('passport')
const { authRouter } = require('./routers')
require('./config/passport')(passport)

app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use(authRouter)
app.use(passport.initialize())

module.exports = app