export default class Circ {
  constructor(x, y, radius, lineWidth, color, fill = false) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lineWidth = lineWidth;
    this.color = color;
    this.fill = fill;
  }

  drawCirc(ctx) {
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

  // Faz o padrão genérico de desenho para desenhar a boca e os olhos do Smile
  drawRosto(ctx) {
    this.circRosto(ctx, this.x, this.y, this.radius, this.lineWidth, this.color, this.fill);
  }

  circRosto(ctx, x, y, radius, l, color, fill = false) {
    ctx.lineWidth = l;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.stroke();
    if (fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
  }
}
