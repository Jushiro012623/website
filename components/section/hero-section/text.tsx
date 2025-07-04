import React from "react";

const TextHero = () => {
  return (
    <div className="absolute right-0 rotate-90 translate-x-28">
      <p className="uppercase text-sm flex items-center gap-3 ">
        <span className="block w-32 h-[1px] bg-white" />
        <span>My portfolio</span>
        <span className="block w-32 h-[1px] bg-white" />
      </p>
    </div>
  );
};

export default TextHero;
