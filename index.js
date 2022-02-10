let express = require('express')
let app = express()
let httpServer = require('http').createServer(app)
let io = require('socket.io')(httpServer)

let connections = []

io.on('connect', (socket) => {
  connections.push(socket)
  console.log(`${socket.id} has been connected`)

  socket.on('disconnect', (reason) => {
    console.log('realtime collaboration shut down...')
    connections = connections.filter((cUser) => cUser.id !== socket.id)
  })
})

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, () => {
  console.log(`Server started successfully on PORT ${PORT}`)
})
