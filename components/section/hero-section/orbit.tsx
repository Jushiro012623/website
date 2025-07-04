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
    shadow: "hover:shadow-cyan-500/50",
  },
  {
    src: "/assets/laravel.svg",
    bg: "bg-red-500",
    shadow: "hover:shadow-red-500/50",
  },
  {
    src: "/assets/dotnet.svg",
    bg: "bg-purple-600",
    shadow: "hover:shadow-purple-600/50",
  },
  {
    src: "/assets/typescript.svg",
    bg: "bg-blue-600",
    shadow: "hover:shadow-blue-600/50",
  },
  {
    src: "/assets/nextjs.svg",
    bg: "bg-neutral-800",
    shadow: "hover:shadow-neutral-800/50",
  },
  {
    src: "/assets/node.svg",
    bg: "bg-green-600",
    shadow: "hover:shadow-green-600/50",
  },
  {
    src: "/assets/git.svg",
    bg: "bg-orange-500",
    shadow: "hover:shadow-orange-500/50",
  },
  {
    src: "/assets/tailwind.svg",
    bg: "bg-sky-500",
    shadow: "hover:shadow-sky-500/50",
  },
  {
    src: "/assets/vite.svg",
    bg: "bg-sky-500",
    shadow: "hover:shadow-sky-500/50",
  },
  {
    src: "/assets/py.svg",
    bg: "bg-yellow-500",
    shadow: "hover:shadow-yellow-500/50",
  },
  {
    src: "/assets/redux.svg",
    bg: "bg-violet-500",
    shadow: "hover:shadow-violet-500/50",
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
    <Fragment>
      <div className="absolute z-10 translate-y-1/2 bottom-1/2 left-56 w-[600px] h-[500px]">
        <div className="relative w-full h-full ">
          
          {techStack.map((item, index) => {
            const pos = positions[index];
            return (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={`absolute w-24 h-24 flex items-center justify-center rounded-lg
                    ${item.shadow}
                    z-20
                    cursor-pointer
                    opacity-50
                    hover:opacity-100
                    hover:bg-black
                    hover:shadow-2xl transition duration-300`}
                style={{
                  top: pos?.top ?? 0,
                  left: pos?.left ?? 0,
                }}>
                <Image
                  src={item.src}
                  alt="tech-stack"
                  height={65}
                  width={65}
                  className="object-contain"
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
