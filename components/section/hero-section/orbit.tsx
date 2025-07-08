"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const ICON_SIZE = 80;
const AREA_WIDTH = 600;
const AREA_HEIGHT = 500;
const MIN_SPACING = 90;

const techStack = [
  {
    src: "/assets/react.svg",
    bg: "bg-cyan-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(6,182,212,0.5)]",
  },
  {
    src: "/assets/laravel.svg",
    bg: "bg-red-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(239,68,68,0.5)]",
  },
  {
    src: "/assets/dotnet.svg",
    bg: "bg-purple-600",
    shadow: "drop-shadow-[0_25px_25px_rgba(147,51,234,0.5)]",
  },
  {
    src: "/assets/typescript.svg",
    bg: "bg-blue-600",
    shadow: "drop-shadow-[0_25px_25px_rgba(37,99,235,0.5)]",
  },
  {
    src: "/assets/nextjs.svg",
    bg: "bg-white",
    shadow: "drop-shadow-[0_25px_25px_rgba(38,38,38,1)]",
  },
  {
    src: "/assets/node.svg",
    bg: "bg-green-600",
    shadow: "drop-shadow-[0_25px_25px_rgba(22,163,74,0.5)]",
  },
  {
    src: "/assets/git.svg",
    bg: "bg-orange-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(249,115,22,0.5)]",
  },
  {
    src: "/assets/tailwind.svg",
    bg: "bg-sky-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(14,165,233,0.5)]",
  },
  {
    src: "/assets/vite.svg",
    bg: "bg-sky-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(189,52,254,0.5)]",
  },
  {
    src: "/assets/py.svg",
    bg: "bg-yellow-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(234,179,8,0.5)]",
  },
  {
    src: "/assets/redux.svg",
    bg: "bg-violet-500",
    shadow: "drop-shadow-[0_25px_25px_rgba(139,92,246,0.5)]",
  },
  {
    src: "/assets/express.svg",
    bg: "bg-white",
    shadow: "drop-shadow-[0_25px_25px_rgba(139,92,246,0.5)]",
  },
];

const generateNonOverlappingPositions = (
  count: number,
  width: number,
  height: number,
  minSpacing: number
) => {
  const positions: { top: number; left: number }[] = [];
  let tries = 0;

  while (positions.length < count && tries < 1000) {
    const top = Math.random() * (height - ICON_SIZE);
    const left = Math.random() * (width - ICON_SIZE);
    const isTooClose = positions.some(
      (pos) => Math.hypot(pos.top - top, pos.left - left) < minSpacing
    );
    if (!isTooClose) {
      positions.push({ top, left });
    }
    tries++;
  }

  return positions;
};

const Orbit = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    const pos = generateNonOverlappingPositions(
      techStack.length,
      AREA_WIDTH,
      AREA_HEIGHT,
      MIN_SPACING
    );
    setPositions(pos);
  }, []);

  useGSAP(() => {
    iconRefs.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        y: () => gsap.utils.random(-15, 100),
        x: () => gsap.utils.random(-15, 100),
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, [positions]);

  return (
    // translate-y-1/2 bottom-1/2 right-20 -translate-x-1/2
    <Fragment>
      <div className="absolute hidden sm:block bottom-1/2 translate-y-1/2  xl:translate-x-[70%] w-[600px] h-[500px] z-[-1]">
        <div className="relative w-full h-full ">
          {techStack.map((item, index) => {
            const pos = positions[index];
            return (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={`absolute flex items-center justify-center rounded-lg
                    z -20
                    cursor-pointer
                `}
                style={{
                  top: pos?.top ?? 0,
                  left: pos?.left ?? 0,
                }}>
                <Image
                  src={item.src}
                  alt="tech-stack"
                  height={65}
                  width={65}
                  className={`object-contain
                    hover:scale-105
                    opacity-80
                    hover:opacity-100
                    ${item.shadow}
                    transition duration-300
                    `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Orbit;
