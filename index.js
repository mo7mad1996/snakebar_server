// packages 
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors')


// main constractor
const app = express()
const port = process.env.PORT || 3000
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

const server = app.listen(port, _ => console.log('listen on port', port))
const IO = socketio(server, {
  cors: {
    origin: '*'
  }
})

const handeler = require('./IO')(IO)