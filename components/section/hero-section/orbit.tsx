"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { techStack } from "./data";
import { useTechStackFloting } from "./hooks";

const Orbit = () => {
  const { positions, iconRefs } = useTechStackFloting();

  return (
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
                  src={`/assets/${item.src}`}
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
