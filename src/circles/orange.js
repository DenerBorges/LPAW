import Smile from "./smile";

export default class Orange extends Smile {
    constructorO(x, y, sa, ea, color = "#FFA500") {
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