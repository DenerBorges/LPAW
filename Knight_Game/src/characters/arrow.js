import { numeroRandom } from "../number";
import { canvas } from "../init";
import Circ from "./circle"

export default class Arrow extends Circ {
    constructor(x, y, radius, line, scolor, speed = 3) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.line = line;
        this.scolor = scolor;
        this.speed = speed;
        this.arrowWidth = 30;
        this.arrowHeight = 33;
        this.arrowImage = new Image();
        this.arrowImage.src = "../../img/arrow1.png";
    }

    drawArrow(ctx) {
        ctx.save();
        this.drawCirc(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.line, (Math.PI / 180) * 360);
        ctx.restore();

        ctx.drawImage(this.arrowImage, 0 * this.arrowWidth, 0, this.arrowWidth, this.arrowHeight,
            this.x - this.radius / .3, this.y - this.radius / .2, this.arrowWidth * 1.2, this.arrowHeight * 1.2);
    }

    move() {
        if (this.y <= canvas.height) {
          this.y = this.y + this.speed;
        } else {
          this.y = 0;
          this.x = numeroRandom(canvas.width - this.radius, this.radius);
        }
      }

      collide(knightX, knightY, knightRadius) {
        let s = knightRadius + this.radius;
        let x = knightX - this.x;
        let y = knightY - this.y;
        return s > Math.sqrt(x * x + y * y) ? true : false;
      }
}