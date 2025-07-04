import React from "react";

const QuoteHero = () => {
  return (
    <div className="absolute bottom-44 left-44 ">
      <div className="h-20 flex gap-2 items-center">
        <div className="w-52 flex flex-col items-center justify-center h-full">
          <div>
            <p className="text-end text-2xl text-teal-400 font-bold">1+</p>
            <p className="text-sm font-light">Experience</p>
          </div>
        </div>
        <span className="block h-[70%] w-[1px] bg-white" />
        <div className="w-52 flex flex-col items-center justify-center h-full">
          <div>
            <p className="text-end text-2xl text-teal-400 font-bold">10+</p>
            <p className="text-sm font-light">Projects Done</p>
          </div>
        </div>
        <span className="block h-[70%] w-[1px] bg-white" />
        <div className="w-52 flex flex-col items-center justify-center h-full">
          <div>
            <p className="text-end text-2xl text-teal-400 font-bold">15+</p>
            <p className="text-sm font-light">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteHero;
