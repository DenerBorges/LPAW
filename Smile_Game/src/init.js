import Smile from "./circles/smile";
import Orange from "./circles/orange";
import Red from "./circles/red";
import { keyPress, key } from "./keyboard";
import { numeroRandom } from "./number";

let CTX;
export let CANVAS;
let pontos = 0;
let gameState = false;
const FRAMES = 120;
const redQuant = 5;
const reds = [];

const smile = new Smile(300, 200, 25, 5, "#000", "#FF0");
const orange = new Orange(200, 300, 10, 5, "#FA0", "#FA0");
const red = new Red(0, 0, 15, 5, "#F00", "#F00");

function contaPontos() {
  CTX.fillStyle = "#00F";
  CTX.font = "30px Arial";
  CTX.fillText("Pontos: " + pontos, CANVAS.width - 350, 25);
}

function perdeu() {
  CTX.fillStyle = "#F00";
  CTX.font = "30px Arial";
  CTX.fillText("Você Perdeu" + "!", CANVAS.width - 380, 60);
}

const init = () => {
  console.log("Initialize Canvas");
  CANVAS = document.querySelector("canvas");
  CTX = CANVAS.getContext("2d");
  keyPress(CANVAS);
  for (let i = 0; i < redQuant; i++) {
    reds.push(
      new Red(
        numeroRandom(CANVAS.width - red.radius, red.radius),
        numeroRandom(CANVAS.height / 2, red.radius),
        red.radius,
      ),
    );
  }
  gameState = true;
  loop();
};

const loop = () => {
  if (gameState) {
    setTimeout(() => {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    smile.drawCirc(CTX);
    smile.drawSmile(CTX);
    orange.drawCirc(CTX);
    reds.forEach((red) => red.drawCirc(CTX));

    smile.anda({
      width:CANVAS.width,
      height:CANVAS.height
    }, key);

    contaPontos();
    atualiza();
    requestAnimationFrame(loop);
    }, 1000 / FRAMES);
  }
};

const atualiza = () => {
  if (orange.collide(smile.x, smile.y, smile.radius)) {
    orange.x = numeroRandom(CANVAS.width - orange.radius, orange.radius);
    orange.y = numeroRandom(CANVAS.height - orange.radius, orange.radius);
    pontos++;
  }
  reds.forEach((red) => {
    red.move();
    if (red.collide(smile.x, smile.y, smile.radius)) perdeu(), gameState = false;
  })
}

export { init };
