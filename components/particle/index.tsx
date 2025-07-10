"use client";
import React, { useEffect, useRef } from "react";

import { Particle } from "./particle";

const NUM_PARTICLES = 30;

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
