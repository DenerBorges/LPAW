import Smile from "./smile";

export default class Red extends Smile {
    constructorR(x, y, sa, ea, color = "#F00") {
        this.x = x;
        this.y = y;
        this.sa = sa;
        this.ea = ea;
        this.color = color;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.sa, this.ea);
    };
}