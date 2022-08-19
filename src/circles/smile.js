import Circ from "./circ";
export default class Smile extends Circ{
    constructorS(x, y, size, c, r, color = "#FF0", speed = 10) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.c= c;
        this.r = r;
        this.color = color;
        this.speed = speed;
        this.status = "ArrowDown";
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.fillStyle = "#FF0";
        ctx.arc(this.x, this.y, this.size, this.c, this.r);
        ctx.fill();
    };
    /*
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
            this.x = -this.size;
        else if(this.x + this.size < 0)
            this.x = limits.width - this.size;
    }

    collide(Orange, limits) {
        if(this.x + this.size /2 - (Orange.x + Orange.size /2)
        && this.y + this.size /2 - (Orange.y + Orange.size /2)) {
            Orange.x = Math.floor(Math.random() * limits.width);
            Orange.y = Math.floor(Math.random() * limits.width);
        }
    }
    
    collide(Red) {

    }

    move(limits, key) {
        let movements = {
            "w": { x: this.x, y: this.y - this.speed},
            "a": { x: this.x - this.speed, y: this.y},
            "d": { x: this.x + this.speed, y: this.y},
            "s": { x: this.x, y: this.y + this.speed}
        }

        this.status = movements[key] ? key: this.status

        this.x = movements[this.status].x
        this.y = movements[this.status].y

        this.x = this.x + this.sa > limits.width ? -this.sa: this.x
        this.x = this.x + this.sa < 0 ? limits.width -this.sa: this.x
    };*/
}