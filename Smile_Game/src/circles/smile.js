import Circ from "./circ";
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
    this.drawRosto(ctx);
    this.circRosto(ctx, this.x - this.radius / 2.5, this.y - this.radius / 4, this.radius * .1, 3, "#000", "#000");
    this.circRosto(ctx, this.x + this.radius / 2.5, this.y - this.radius / 4, this.radius * .1, 3, "#000", "#000");   

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.x, this.y + this.radius / 4, this.radius / 2, 0, Math.PI);
    ctx.strokeStyle = "#000";
    ctx.stroke();
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