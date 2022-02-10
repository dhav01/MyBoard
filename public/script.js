let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x
let y
let mouseDown = false

window.onmousedown = (e) => {
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
