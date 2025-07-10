import gsap from "gsap";

export class Particle {
  x: number = 0;
  y: number = 0;
  radius: number = 0;
  opacity: number = 1;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number, isInit = false) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset(isInit);
    this.animate();
  }

  reset(isInit = false) {
    this.x = Math.random() * this.canvasWidth;
    this.y = isInit ? Math.random() * this.canvasHeight : -Math.random() * 50; // Start above the screen
    this.radius = Math.random() * 3 + 1;
    this.opacity = this.radius / 4;
  }

  animate() {
    const duration = Math.random() * 15 + 10; // slower: 10s to 25s

    gsap.to(this, {
      y: this.canvasHeight + 10, // Animate to beyond bottom
      duration,
      ease: "none",
      onComplete: () => {
        this.reset();
        this.animate();
      },
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.closePath();
  }
}
