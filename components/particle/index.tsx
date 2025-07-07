"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NUM_PARTICLES = 30;

class Particle {
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

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    particlesRef.current = Array.from(
      { length: NUM_PARTICLES },
      () => new Particle(canvas.width, canvas.height, true)
    );

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      for (const particle of particlesRef.current) {
        particle.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticleCanvas;
