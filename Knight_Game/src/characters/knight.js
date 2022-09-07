import { hasKey, keyDown, keyPress } from "../keyboard";
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
    }

    drawKnight(ctx) {
        ctx.save();
        this.drawCirc(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.line, (Math.PI / 180) * 360);
        ctx.restore();

        if (this.spriteAtual < this.totalSprites) {ctx.drawImage(this.knightImage, this.spriteAtual * this.knightWidth, 0, this.knightWidth, this.knightHeight,
            this.x - this.radius / 1.1, this.y - this.radius / 0.8, this.knightWidth * 1.2, this.knightHeight * 1.2);
            //this.spriteAtual++;
        }
        else this.spriteAtual = 1;
    }

    move(canvas, key) {
        switch (key) {
            case "w": this.status = "up"; this.knightImage.src = "../../img/knight_up.png";
            break;
            case "a": this.status = "left"; this.knightImage.src = "../../img/knight_left.png";
            break;
            case "d": this.status = "right"; this.knightImage.src = "../../img/knight_right.png";
            break;
            case "s": this.status = "down"; this.knightImage.src = "../../img/knight_down.png";
            break;
        }

        switch (this.status) {
            case "up": {if(this.y >= this.radius) this.y -= this.speed}
            break;
            case "left": {if(this.x >= this.radius) this.x -= this.speed}
            break;
            case "right": {if(this.x <= canvas.width - this.radius) this.x += this.speed}
            break;
            case "down": {if(this.y <= canvas.height - this.radius) this.y += this.speed}
            break;
        }
    }
}