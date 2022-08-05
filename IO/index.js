let users = {}
let apple = {
  x: 30,
  y: 30
}

module.exports = io => {
  io.on('connect', socket => {
    // define a new user
    users[socket.id] = {}

    // update the snake
    socket.on('user', snake => users[socket.id].snake = snake)
    socket.on('update apple', point => apple = point)

    // send data to client to update UI
    setInterval(_ => io.emit('pong', {
      users,
      apple
    }), 1000 / 20)



    // remove the user from users list
    socket.on('disconnect', _ => delete users[socket.id])
  })
}