import Circ from "./circle"

export default class Coin extends Circ {
    constructor(x, y, radius, line, scolor) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.line = line;
        this.scolor = scolor;
        this.coinWidth = 44;
        this.coinHeight = 66;
        this.coinImage = new Image();
        this.coinImage.src = "../../img/coin.png";
    }

    drawCoin(ctx) {
        ctx.save();
        this.drawCirc(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.line, (Math.PI / 180) * 360);
        ctx.restore();

        ctx.drawImage(this.coinImage, 0 * this.coinWidth, 0, this.coinWidth, this.coinHeight,
            this.x - this.radius / 1, this.y - this.radius / 0.9, this.coinWidth * 1.2, this.coinHeight * 1.2);
    }

    collide(knightX, knightY, knightRadius) {
        let s = knightRadius + this.radius;
        let x = knightX - this.x;
        let y = knightY - this.y;
        return s > Math.sqrt(x * x + y * y) ? true : false;
    }
}