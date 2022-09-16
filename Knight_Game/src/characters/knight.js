import { hasKey, keyDown, keyPress, pressedKeys } from "../keyboard";
import { loadImage } from "../loaderAssets";
import Circ from "./circle"

export default class Knight extends Circ {
    constructor(x, y, radius, line,frames, scolor = null, speed = 3) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.line = line;
        this.scolor = scolor;
        this.speed = speed;
        this.stop = true;
        this.knightWidth = 44;
        this.knightHeight = 66;
        this.spriteAtual = 1;
        this.totalSprites = 3;
        this.spriteSpeed = .5;
        this.knightImage = new Image();
        this.knightImage.src = "../../img/knight_down.png";
        this.loadsprites().then(()=>this.knightImage = this.knightSprite['down'] );
        this.animeSprite(frames);
    }

    animeSprite(frames) {
          setInterval(() => {
            if (this.stop == false)
            this.spriteAtual = this.spriteAtual < this.totalSprites -1 ? this.spriteAtual + 1 : 0
          }, 1000 / (frames*this.spriteSpeed/10));
      };

    async loadsprites() {

        this.knightSprite = {
            'up' : await loadImage("../../img/knight_up.png"),
            'right' : await loadImage("../../img/knight_right.png"),
            'left' : await loadImage("../../img/knight_left.png"),
            'down' : await loadImage("../../img/knight_down.png")
        }
    }

    drawKnight(ctx, canvas, pressedKeys) {
        ctx.save();
        this.drawCirc(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.line, (Math.PI / 180) * 360);
        ctx.restore();

        ctx.drawImage(
            this.knightImage,
            this.spriteAtual * this.knightWidth,
            0,
            this.knightWidth,
            this.knightHeight,
            this.x - this.radius / 1.1, this.y - this.radius / 0.8,
            this.knightWidth * 1.2,
            this.knightHeight * 1.2);       
    }

    move(limits) {
      
        if (pressedKeys.right === true && this.x <= limits.width - this.radius) {
            this.x += this.speed
            this.knightImage = this.knightSprite['right']
            this.stop = false;
        }

        else if (pressedKeys.left === true && this.x >= this.radius) {
            this.x -= this.speed
            this.knightImage = this.knightSprite['left']
            this.stop = false;
        }

        else if (pressedKeys.up === true && this.y >= this.radius) {
            this.y -= this.speed
            this.knightImage = this.knightSprite['up']
            this.stop = false;
        }

        else if (pressedKeys.down === true && this.y <= limits.height - this.radius) {
            this.y += this.speed
            this.knightImage = this.knightSprite['down']
            this.stop = false;
        }
        else {
            this.spriteAtual = 1
            this.stop = true;
        }
    }
}