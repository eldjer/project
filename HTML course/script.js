const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(200,0,0)'
ctx.fillRect (50, 50, 50, 50)

ctx.fillStyle = 'rgba(0, 100, 100, 0.5)'
ctx.fillRect (70, 70, 50, 50)

ctx.fillStyle = 'rgb(100,100,100)'
ctx.fillRect (90, 90, 50, 50)

ctx.beginPath()
ctx.moveTo(0, 50)
ctx.lineTo(300, 50)
ctx.strokeStyle = 'red'
ctx.stroke()
ctx.moveTo(0, 140)
ctx.lineTo(300, 140)
ctx.strokeStyle = 'grey'
ctx.stroke()
ctx.moveTo(120, 0)
ctx.lineTo(120, 200)
ctx.strokeStyle = 'rgba(0, 100, 100, 0.5)'
ctx.stroke()
ctx.endPath()