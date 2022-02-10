let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

var io = io.connect('http://localhost:3000/')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x
let y
let mouseDown = false

window.onmousedown = (e) => {
  context.moveTo(x, y)
  mouseDown = true
}

window.onmouseup = (e) => {
  mouseDown = false
}

window.onmousemove = (e) => {
  x = e.clientX
  y = e.clientY

  if (mouseDown) {
    context.lineTo(x, y)
    context.stroke()
  }
}
