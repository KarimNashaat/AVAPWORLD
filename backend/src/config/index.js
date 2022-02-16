require('dotenv').config()

const port = process.env.PORT || 4000
const MONGODB_URL = "mongodb+srv://avapworld:thisisthepass@cluster0.byomm.mongodb.net/contacts?retryWrites=true&w=majority"
const jwtSecret = process.env.JWT_SECRET || "jwtSecret"
const SENDGRID_API_KEY = "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"
module.exports = {
    port,
    MONGODB_URL,
    jwtSecret,
    SENDGRID_API_KEY
}