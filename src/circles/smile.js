export default class Smile {
    constructorS(x, y, sa, ea, r, speed = 10, fcolor = "#FF0", scolor = "#000") {
        this.x = x;
        this.y = y;
        this.sa = sa;
        this.ea = ea;
        this.r = r;
        this.speed = speed;
        this.fcolor = fcolor;
        this.scolor = scolor;
        this.status = "ArrowDown";
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.fillStyle = this.fcolor;
        ctx.strokeStyle = this.scolor;
        ctx.arc(this.x, this.y, this.sa, this.ea, this.r);
        ctx.fill();
        ctx.stroke();
    };

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
            this.x = -this.sa;
        else if(this.x + this.sa < 0)
            this.x = limits.width - this.size;
    }

    collide(Orange, limits) {
        if(this.x + this.sa /2 - (Orange.x + Orange.sa /2)
        && this.y + this.sa /2 - (Orange.y + Orange.sa /2)) {
            Orange.x = Math.floor(Math.random() * limits.width);
            Orange.y = Math.floor(Math.random() * limits.width);
        }
    }

    collide(Red) {

    }

    move(limits, key) {
        /*let movements = {
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
    */};
}