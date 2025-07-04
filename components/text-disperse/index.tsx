import { PropsWithChildren, useRef } from "react";
import "./style.css";
import gsap from "gsap";

interface TextDisperseProps extends PropsWithChildren {
  className?: string;
}

export default function TextDipserse({
  children,
  className,
}: TextDisperseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getChars = (element: any) => {
    const chars: any = [];

    const word = element.props.children;

    word.split("").forEach((char: any, i: number) => {
      chars.push(
        <span
          key={char + i}
          className={`${className} char`}
          style={{ display: "inline-block" }}>
          {char}
        </span>
      );
    });

    return chars;
  };

  const manageMouseEnter = () => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (chars) {
      chars.forEach((char, i) => {
        gsap.killTweensOf(char);
        gsap.to(char, {
          y: gsap.utils.random(-5, -5),
          x: gsap.utils.random(-1, 1),
          rotation: gsap.utils.random(-20, 20),
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.03,
          overwrite: "auto",
        });
      });
    }
  };

  const manageMouseLeave = () => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (chars) {
      chars.forEach((char) => gsap.killTweensOf(char));
      gsap.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    }
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      ref={containerRef}
      className="introLine">
      {getChars(children)}
    </div>
  );
}
