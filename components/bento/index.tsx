import { forwardRef, MouseEvent, PropsWithChildren, useImperativeHandle, useRef, useState } from "react";

interface BentoTiltProps extends PropsWithChildren {
  className?: string;
  style?: any;
}

export const BentoTilt = forwardRef<HTMLDivElement, BentoTiltProps>(
  ({ children, className = "", style }, ref) => {
    const [transformStyle, setTransformStyle] = useState<string>("");
    const itemRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => itemRef.current!, []);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!itemRef.current) return;
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();

      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      const tiltX = (relativeY - 0.8) * 3;
      const tiltY = (relativeX - 0.8) * -3;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
      setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
      setTransformStyle("rotateX(0deg) rotateY(0deg)");
    };

    return (
      <div
        ref={itemRef}
        className={`transition-all ease-in-out ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle, ...style }}
      >
        {children}
      </div>
    );
  }
);

BentoTilt.displayName = "BentoTilt";
export const BentoCard = ({ src, title, description }: any) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-center object-cover"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title  special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
