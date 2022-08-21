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
}