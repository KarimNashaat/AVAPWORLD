const app = require('./app')
const server = require('http').createServer(app)
const { Server } = require("socket.io");
const { port, MONGODB_URL } = require('./config')
const sockets = require('./sockets')
const mongoose = require('mongoose');

global.io = new Server(server)

mongoose.connect(MONGODB_URL, async () => {
    console.log("Successfully connected to MongoDB.")

    sockets.init()

    server.listen(port, () => {
        console.log("Server is runnung on port: " + port)
    })

})