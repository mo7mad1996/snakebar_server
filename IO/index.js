let users = {}
let apple = rand_point()

function rand_point() {
  return {
    x: Math.random(),
    y: Math.random()
  }
}

module.exports = io => {
  io.on('connect', socket => {
    // define a new user
    users[socket.id] = {}

    // update the snake
    socket.on('user', snake => users[socket.id].snake = snake)
    socket.on('update apple', _ => apple = rand_point())

    // send data to client to update UI
    setInterval(_ => io.emit('pong', {
      users,
      apple
    }), 1000 / 20)



    // remove the user from users list
    socket.on('disconnect', _ => delete users[socket.id])
  })
}