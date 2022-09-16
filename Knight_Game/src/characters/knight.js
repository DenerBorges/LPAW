import { hasKey, keyDown, keyPress, pressedKeys } from "../keyboard";
import { loadImage } from "../loaderAssets";
import Circ from "./circle"

export default class Knight extends Circ {
    constructor(x, y, radius, line, scolor, speed = 3) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.line = line;
        this.scolor = scolor;
        this.speed = speed;
        this.status = "";
        this.knightWidth = 44;
        this.knightHeight = 66;
        this.spriteAtual = 1;
        this.totalSprites = 3;
        this.knightImage = new Image();
        this.knightImage.src = "../../img/knight_down.png";
        //this.count = 7;
    }

    async loadsprites() {
        let knight_up = await loadImage("../../img/knight_up.png");
        let knight_right = await loadImage("../../img/knight_right.png");
        let knight_left = await loadImage("../../img/knight_left.png");
        let knight_down = await loadImage("../../img/knight_down.png");

        this.knightSprite = {
            'up' : knight_up,
            'right' : knight_right,
            'left' : knight_left,
            'down' : knight_down
        }
    }

    drawKnight(ctx, canvas, pressedKeys) {
        ctx.save();
        this.drawCirc(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.line, (Math.PI / 180) * 360);
        ctx.restore();

        //if (this.count <= 0) {
            //if (this.spriteAtual < this.totalSprites) {
                ctx.drawImage(this.knightImage, this.spriteAtual * this.knightWidth, 0, this.knightWidth, this.knightHeight,
                this.x - this.radius / 1.1, this.y - this.radius / 0.8, this.knightWidth * 1.2, this.knightHeight * 1.2);
                this.spriteAtual++;
            //}
            /*else {
            this.spriteAtual = 1;
            //this.count = 7;
        } //else {
          //  this.count--;
        //}*/
        
            this.spriteAtual = this.spriteAtual < this.totalSprites - 1 ? this.spriteAtual + 1 : 0  
        if (pressedKeys.right === true && this.x <= canvas.width - this.radius) {
            this.x += this.speed,
            this.totalSprites = 3,
            this.knightImage.src = "../../img/knight_right.png"
        }

        else if (pressedKeys.left === true && this.x >= this.radius) {
            this.x -= this.speed,
            this.totalSprites = 3,
            this.knightImage.src = "../../img/knight_left.png"
        }

        else if (pressedKeys.up === true && this.y >= this.radius) {
            this.y -= this.speed,
            this.totalSprites = 3,
            this.knightImage.src = "../../img/knight_up.png"
        }

        else if (pressedKeys.down === true && this.y <= canvas.height - this.radius) {
            this.y += this.speed,
            this.totalSprites = 3,
            this.knightImage.src = "../../img/knight_down.png"
        }
        else {
            this.totalSprites = 3,
            this.spriteAtual = 1
        }
    }

    move(key) {
        switch (key) {
            case "w": this.status = "up"; this.knightImage = this.knightSprite[this.status];
            break;
            case "a": this.status = "left"; this.knightImage = this.knightSprite[this.status];
            break;
            case "d": this.status = "right"; this.knightImage = this.knightSprite[this.status];
            break;
            case "s": this.status = "down"; this.knightImage = this.knightSprite[this.status];
            break;
        }
    }
}