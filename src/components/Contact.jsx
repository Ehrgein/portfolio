import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillLinkedin } from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const screenref = useRef();
  const mousewheelball = useRef();

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full mt-36">
        <div className="w-[60%] flex justify-center">
          <h2 className="text-[80px] font-bold text-center">
            Let's have a chat!
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col projectinfo text-xl justify-center items-center w-[60%] text-center mt-8 ">
          <p className="text-4xl font-medium">
            You can contact me in any of the following socials.
          </p>
          <p className="text-4xl font-medium mt-6">
            Feel free to reach out, I'm always down to talk!
          </p>
        </div>
      </div>

      <div className="mt-12 w-full flex justify-center items-center">
        <div className="flex justify-between w-[35%] text-4xl">
          <span className="mx-4 navunderline">Github</span>
          <span className="mx-4 navunderline">Linkedin</span>
          <span className="mx-4 navunderline">Resume</span>
          <span className="mx-4 navunderline">Email</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
