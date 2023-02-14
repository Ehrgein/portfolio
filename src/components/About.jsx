import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const screenref = useRef();
  const mousewheelball = useRef();

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full mt-36 mobilexs:mt-24">
        <div className="tablet:w-[60%] w-full flex justify-center">
          <h2 className="tablet:text-6xl mobileM:text-4xl mobilexs:text-3xl font-bold text-center">
            Hey there! I'm Alexis - a Frontend developer based in Buenos Aires.
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col projectinfo  tablet:w-[60%] mobilexs:w-full tablet:text-xl mobileM:text-base mobilexs:text-sm justify-center items-center  text-center tablet:mt-12 mobilexs:mt-6 mobilexs:mx-6">
          <p>
            I'm a developer who loves coding and bringing your ideas into
            responsive, intuitive, easy to use websites. I am quite interested
            in
            <span className="text-sky-500"> UX/UI</span> and I like to think my
            work reflects that, making sure user experience is as smooth as
            possible by putting myself in their shoes.<br></br>
          </p>
          <p className="mt-8">
            Lately, I've been dedicating my time to learning WebGL, ThreeJS and
            animation libraries like GSAP.
          </p>
          <p className="mt-8 mobilexs:mb-10">
            In my free time I like learning languages, discovering new bands and
            mustering the courage
            <span className="text-sky-500"> to code my own RPG game </span> (we
            can talk about this in the interview).
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
