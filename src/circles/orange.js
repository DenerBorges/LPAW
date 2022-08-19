import Circ from "./circ";

export default class Orange extends Circ {
    constructorO(x, y, size, r, color = "#00F") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.c = c;
        this.r = r;
        this.color = color;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, this.r);
        ctx.fill();
    };
}