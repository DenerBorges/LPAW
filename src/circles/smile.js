import Circ from "./circ";
export default class Smile extends Circ {
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
  
    anda(limits, key) {
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
            case "up": this.y -= this.speed
            break;
            case "left": this.x -= this.speed
            break;
            case "right": this.x += this.speed
            break;
            case "down": this.y += this.speed
            break;
        }

        if(this.x > limits.width)
          this.x =- this.radius;
        else if(this.x + this.radius > 0)
          this.x = limits.width - this.radius;
        //else if(this.x + this.radius < 0)
          //this.x = limits.width - this.radius;
    }

    collide(Orange, limits) {
        if(this.x + this.radius /2 - (Orange.x + Orange.radius /2)
        && this.y + this.radius /2 - (Orange.y + Orange.radius /2)) {
            Orange.x = Math.floor(Math.random() * limits.width);
            Orange.y = Math.floor(Math.random() * limits.width);
        }
    }
    
    collide(Red, width) {

    }
}