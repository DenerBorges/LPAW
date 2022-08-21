import Circ from "./circles/circ";
import Smile from "./circles/smile";
import Orange from "./circles/orange";
import Red from "./circles/red";
import { keyPress, key } from "./keyboard";

let CTX;
let CANVAS;
const FRAMES = 15;

const smile = new Smile(300, 200, 25, 5, "#000", "#FF0");
const orange = new Orange(45, 30, 10, 5, "#FA0", "#FA0");
const red = new Red(130, 75, 15, 5, "#F00", "#F00");

const init = () => {
  console.log("Initialize Canvas");
  CANVAS = document.querySelector("canvas");
  CTX = CANVAS.getContext("2d");
  keyPress(CANVAS);
  loop();
};

const loop = () => {
  setTimeout(() => {
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    smile.drawCirc(CTX);
	orange.drawCirc(CTX);
	red.drawCirc(CTX);

	smile.anda({
		width:CANVAS.width,
		height:CANVAS.height
	}, key);

    requestAnimationFrame(loop);
  }, 1000 / FRAMES);
};

export { init };
