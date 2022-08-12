import Smile from "./circles/smile"
import Orange from "./circles/orange"
import Red from "./circles/red"
import { keyPress, key } from "./keyboard"

let CTX
let CANVAS
const FRAMES = 15

const smile = new Smile(80, 20, 20, 0, Math.PI / 180*360)
const orange = new Orange(45, 30, 10, 0, Math.PI / 180*360)
const red = new Red(130, 75, 20, 0, Math.PI / 180*360,'red')

const init = () => {
	console.log("Initialize Canvas")
	CANVAS = document.querySelector('canvas')
	CTX = CANVAS.getContext('2d')
	keyPress(CANVAS)
	loop()
}

const loop = () => {
    setTimeout(() => {
		CTX.clearRect(0,0,CANVAS.width,CANVAS.height)
		
		smile.move({
			width:CANVAS.width,
			height:CANVAS.height	
		},key)

		smile.draw(CTX)
		orange.draw(CTX)
		red.draw(CTX)

		smile.colide(red) && console.error('SMILE COLIDE')

		requestAnimationFrame(loop)
	}, 1000/FRAMES)
}

export {init}