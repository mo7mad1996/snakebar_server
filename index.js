// packages 
const express = require('express');
const socketio = require('socket.io');

// main constractor
const app = express()
const port = process.env.PORT || 3000
const server = app.listen(port, _ => console.log('listen on port', port))

const IO = socketio(server, {
  cors: {
    origin: '*'
  }
})

const handeler = require('./IO')(IO)