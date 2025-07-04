"use client";
import Curve from "@/components/curve";
import Navbar from "@/components/navbar";
import Hero from "@/components/section/hero-section";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  useGSAP(
    () => {
      // Animate black section (scale down & rotate -5)
      gsap.to(boxRef.current, {
        scale: 0.8,
        rotate: -5,
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: boxRef }
  );

  const targetRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        targetRef.current,
        { scale: 0.8, rotate: 5 },
        {
          scale: 1,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    },
    { scope: targetRef }
  );

  return (
    <>
      <Navbar />
      <div ref={boxRef} className="bg-gradient-to-r from-black to-black-300 w-full h-screen sticky top-0 ">
        <Curve>
          <Hero />
        </Curve>
      </div>
      <div className="relative h-screen bg-red-100 h-[200vh]" ref={targetRef}>
        asdasd
      </div>
    </>
  );
};

export default Home;
