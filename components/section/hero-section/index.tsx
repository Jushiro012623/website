"use client";
import { BentoTilt } from "@/components/bento";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reactCircle = useRef<HTMLDivElement>(null);
  const oval1Ref = useRef<HTMLDivElement>(null);
  const oval2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current || !imageRef.current) return;
    gsap.registerPlugin(Draggable);
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.to(imageRef.current, {
      y: gsap.utils.random(-10, -20),
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(reactCircle.current, {
      x: gsap.utils.random(-5, -10),
      y: gsap.utils.random(-5, -10),
      duration: 10,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(oval1Ref.current, {
      rotation: 360,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

  }, []);
  return (
    <div
      ref={contentRef}
      className="relative flex text-white items-center justify-center w-full h-screen">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[80%] z-20">
        <div className="relative w-[450px] aspect-square">
          <BentoTilt
            ref={imageRef}
            className={`w-full h-full bg-bottom bg-no-repeat bg-cover`}
            style={{
              backgroundImage: "url('/assets/me.jpg')",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backgroundBlendMode: "darken",
            }}
          />

          <div className="pointer-events-none absolute top-0 right-0 w-full h-full translate-x-14 translate-y-14 border border-white/50">
          </div>
        </div>
        <div className="absolute top-24 right-0 uppercase  tracking-wider translate-x-44">
          <p className="text-end text-[5rem] font-semibold">Ivan</p>
          <p className="text-end text-[5rem] font-semibold -translate-y-8">
            martin
          </p>
          <p className="text-end -translate-y-12 animate-pulse">
            Software Developer
          </p>
        </div>
      </div>
      <div ref={reactCircle} className="absolute z-10 bottom-0 left-0 -translate-x-20 translate-y-20 ">
        <div className="relative h-[500px] rounded-full flex items-center justify-center border aspect-square">
          <div
            ref={oval1Ref}
            className={`absolute h-20 w-20 bg-bottom bg-no-repeat bg-cover `}
            style={{
              backgroundImage: "url('/assets/react.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
