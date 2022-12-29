import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillLinkedin } from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const screenref = useRef();
  const mousewheelball = useRef();

  useEffect(() => {
    gsap.fromTo(
      screenref.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
        duration: 10,
        scrollTrigger: {
          trigger: screenref.current,
          markers: true,
        },
        scrub: 1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(mousewheelball.current, {
      repeat: -1,
      duration: 1,
      ease: Power3.easeInOut,
      y: 12,
      opacity: 1,
      yoyo: true,
    });
  });

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full mt-36">
        <div className="w-[60%] flex justify-center">
          <h2 className="text-6xl font-bold text-center">
            Hey there! I'm Alexis - a Frontend developer based in Buenos Aires.
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col projectinfo text-xl justify-center items-center w-[60%] text-center mt-12 ">
          <p>
            I'm a developer who loves coding and making your ideas become real
            through functional, responsive, intuitive to use websites. I have a
            profound interest in <span className="text-sky-500">UX/UI</span> and
            I like to think my work reflects that, making sure user experience
            is as smooth as possible by putting myself in their shoes.<br></br>
          </p>
          <p className="mt-8">
            Lately, I've been dedicating my time to learning WebGL, ThreeJS and
            animation libraries like GSAP.
          </p>
          <p className="mt-8">
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
