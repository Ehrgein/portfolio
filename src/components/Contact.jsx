import React, { useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";

function Contact() {
  const screenref = useRef();
  const mousewheelball = useRef();

  return (
    <div className="w-full">
      <div className="flex flex-col w-full justify-center items-center laptop:mt-36 mobilexs:mt-20">
        <div className="flex laptopL:w-[60%] mobilexs:w-full justify-center items-center">
          <h2 className="tablet:text-[80px] tablet:text-6xl mobileL:text-6xl mobilexs:text-7xl font-bold text-center">
            Let's have a chat!
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col projectinfo text-xl justify-center items-center laptopL:w-[60%] mobilexs:w-full text-center mt-8 ">
          <p className="tablet:text-4xl mobilexs:text-2xl font-medium tablet:mx-1">
            You can contact me in any of the following socials.
          </p>
          <p className="tablet:text-4xl mobilexs:text-2xl font-medium mt-6 tablet:mx-2">
            Feel free to reach out, I'm always down to talk!
          </p>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-center items-center">
        <div className="flex justify-between laptopL:w-[35%] tablet:w-[50%] mobilexs:w-full laptopL:text-4xl tablet:text-4xl mobilexs:text-3xl mobilexs:pb-10">
          <button className="mx-4 navunderline">
            <a href="https://github.com/Ehrgein">Github</a>
          </button>
          <button className="mx-4 navunderline">
            <a href="https://www.linkedin.com/in/alexisfordpy/">Linkedin</a>
          </button>
          <button className="mx-4 navunderline">
            <a href={resume} download="resume.pdf">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
