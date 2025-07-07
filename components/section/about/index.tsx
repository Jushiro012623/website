import { BentoTilt } from "@/components/bento";
import React, { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(" ivanallen64@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className=" c-space my-20 max-w-7xl mx-auto" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <BentoTilt className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/self.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext ">Hi, I’m Ivan Macabontoc</p>
              <p className="grid-subtext">
                As a developer, I have honed my skills in both frontend and
                backend development, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </BentoTilt>

        <BentoTilt className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/stacks.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </BentoTilt>

        <BentoTilt className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              HELLO
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Manila, Philippines and open to remote work
                worldwide.
              </p>
              <a
                href="#contact"
                className="w-fit">
                <button
                  name="Contact Me"
                >CONTACT ME</button>
              </a>
            </div>
          </div>
        </BentoTilt>

        <BentoTilt className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </BentoTilt>

        <BentoTilt className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ivanallen64@gmail.com
                </p>
              </div>
            </div>
          </div>
        </BentoTilt>
      </div>
    </section>
  );
};

export default About;
