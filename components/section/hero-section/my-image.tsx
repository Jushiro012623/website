import { BentoTilt } from "@/components/bento";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MyImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      y: () => gsap.utils.random(-25, 50),
      x: () => gsap.utils.random(-25, 50),
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[80%] z-20">
      <div className="relative w-[450px] aspect-square">
        <BentoTilt
          ref={imageRef}
          className={`rounded-lg w-full h-full bg-bottom bg-no-repeat bg-cover`}
          style={{
            backgroundImage: "url('/assets/me.jpg')",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundBlendMode: "darken",
          }}
        />
        <div className="animate-pulse rounded-lg pointer-events-none absolute top-0 right-0 w-full h-full translate-x-14 translate-y-14 border border-white/50"></div>
      </div>
      <div className="absolute top-24 right-0 uppercase flex flex-col items-end justify-end tracking-wider translate-x-44">
        <p className="text-end text-[5rem] font-semibold">Ivan</p>
        <p className="text-end text-[5rem] font-semibold -translate-y-8 ">
          allen
        </p>
        <p className="text-end -translate-y-12 animate-pulse text-teal-400">
          Software Developer
        </p>
      </div>
    </div>
  );
};

export default MyImage;
