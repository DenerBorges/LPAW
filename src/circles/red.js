import { numeroRandom } from "../number";
import { CANVAS } from "../init";
import Circ from "./circ";

export default class Red extends Circ {
    constructor(x, y, radius, lineWidth, color, fill = false, speed = 10) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.color = color;
        this.fill = fill;
        this.speed = speed;
        this.status = "ArrowDown";
      }
    
      drawSmile(ctx) {
        ctx.save();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
        ctx.stroke();
        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }
        ctx.restore();
      }

      move() {
        if (this.y <= CANVAS.height) {
          this.y = this.y + this.speed;
        } else {
          this.y = 0;
          this.x = numeroRandom(CANVAS.width - this.radius, this.radius);
        }
      }

      collide(smileX, smileY, smileRadius) {
        let s = smileRadius + this.radius;
        let x = smileX - this.x;
        let y = smileY - this.y;
        return s > Math.sqrt(x * x + y * y) ? true : false;
      }
}