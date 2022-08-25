import Circ from "./circ";
import { CANVAS } from "../init";
export default class Smile extends Circ {
  constructor(x, y, radius, lineWidth, color, fill = false, speed = 3) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lineWidth = lineWidth;
    this.color = color;
    this.fill = fill;
    this.speed = speed;
    this.status = "down";
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
  
    anda(CANVAS, key) {
        switch (key) {
            case "w": this.status = "up"
            break;
            case "a": this.status = "left"
            break;
            case "d": this.status = "right"
            break;
            case "s": this.status = "down"
            break;
        }

        switch (this.status) {
            case "up": {if(this.y >= this.radius) this.y -= this.speed}
            break;
            case "left": {if(this.x >= this.radius) this.x -= this.speed}
            break;
            case "right": {if(this.x <= CANVAS.width - this.radius) this.x += this.speed}
            break;
            case "down": {if(this.y <= CANVAS.height - this.radius) this.y += this.speed}
            break;
        }
    }
}