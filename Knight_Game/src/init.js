import { keyPress, key, pressedKeys } from "./keyboard";
import { numeroRandom } from "./number";
import Knight from "./characters/knight";
import Coin from "./characters/coin";
import Arrow from "./characters/arrow";

let ctx;
export let canvas;
let moedas = 0;
let gameState;
const frames = 120;
const arrowQuant = 5;
const arrows = [];
let spriteSpeed = 7;

let coinSound;
let theme;
let deathSound;

let knight = new Knight(300, 200, 30, 5);
let coin = new Coin(200, 300, 17, 5);
let arrow = new Arrow(0, 0, 5, 5);

function contaMoedas() {
  ctx.fillStyle = "#FA0";
  ctx.font = "17px Pixel";
  ctx.fillText("Moedas:" + moedas, canvas.width - 160, 30);
}

function perdeu() {
  ctx.fillStyle = "#F00";
  ctx.font = "27px Pixel";
  ctx.fillText("Você Perdeu" + "!", canvas.width - 460, 70);
}

const init = async () => {
    console.log("Initialize Canvas");
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    keyPress(canvas);
    for (let i = 0; i < arrowQuant; i++) {
      arrows.push(
        new Arrow(
          numeroRandom(canvas.width - arrow.radius, arrow.radius),
          numeroRandom(canvas.height / 2, arrow.radius),
          arrow.radius,
        ),
      );
    }
    theme = new Audio();
    theme.src = "../sound/magical_theme.flac";
    theme.volume = .06;
    theme.loop = true;
    coinSound = new Audio();
    coinSound.src = "../sound/coin.flac";
    coinSound.volume = .06;
    deathSound = new Audio();
    deathSound.src = "../sound/death.mp3";
    deathSound.volume = .06;
    gameState = true;
    loop();
    animeSprite();
};

const animeSprite = () => {
  setInterval(() => {
knight.drawKnight(ctx);
  }, 1000 / (frames*spriteSpeed/10));
}

const loop = () => {
    if (gameState) {
      setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      coin.drawCoin(ctx);
      arrows.forEach((arrow) => arrow.drawArrow(ctx));
      knight.move({
        width:canvas.width,
        height:canvas.height
      }, key, pressedKeys);

      theme.currentTime == 0 && theme.play();

      contaMoedas();
      atualiza();
      requestAnimationFrame(loop);
      }, 1000 / frames);
    }
};

const atualiza = () => {
  if (coin.collide(knight.x, knight.y, knight.radius)) {
    coin.x = numeroRandom(canvas.width - coin.radius, coin.radius);
    coin.y = numeroRandom(canvas.height - coin.radius, coin.radius);
    moedas++;
    coinSound.play();
  }
  arrows.forEach((arrow) => {
    arrow.move();
    if (arrow.collide(knight.x, knight.y, knight.radius)) deathSound.play(), perdeu(), gameState = false;
  })
}

export { init };