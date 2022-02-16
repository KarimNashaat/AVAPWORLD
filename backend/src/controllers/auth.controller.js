const jwt = require("jsonwebtoken")
const { jwtSecret } = require("../config")
const User = require("../models/user.model")

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const payload = {
                id: user.id
            }
            const token = jwt.sign(payload, jwtSecret)
            const userData = {
                user,
                token
            }
            res.send(userData)
        }
    } catch (error) {
        res.status(400).send(error)
        console.log("Login Error: " + error)
    }
}

const register = async (req, res) => {
    try {
        const user = await User.register(
            new User({ email: req.body.email, name: req.body.name }),
            req.body.password)

        const payload = {
            id: user._id
        }
        const token = jwt.sign(payload, jwtSecret)
        const userData = {
            user,
            token
        }
        res.send(userData)
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log("Register Error: " + error)
    }
}

const autoLogin = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.send(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log("Register Error: " + error)
    }
}

module.exports = {
    login,
    register,
    autoLogin
}