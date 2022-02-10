let express = require('express')
let app = express()
let httpServer = require('http').createServer(app)

let io = require('socket.io')(httpServer)

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, () => {
  console.log(`Server started successfully on PORT ${PORT}`)
})
