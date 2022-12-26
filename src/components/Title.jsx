import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { AiOutlineArrowRight, AiOutlineDribbble } from "react-icons/ai";
import animation from "../Animation.gif";
import SplitType from "split-type";
import { gsap, Power3 } from "gsap";
import Transition from "./Transition";
import { Link } from "react-router-dom";

function Title() {
  const [inputValue, setInputValue] = useState("");

  const target = useRef();
  const targettwo = useRef();
  const iconsRef = useRef();
  const workRef = useRef();

  const GoToProjects = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let textAnimation = gsap.timeline();

    const text = SplitType.create(target.current, { types: "words, chars" });
    const texttwo = SplitType.create(targettwo.current, {
      types: "words, chars",
    });

    textAnimation
      .from(
        text.chars,
        {
          stagger: 0.05,
          y: "100%",
          ease: Power3.easeOut,
        },
        "1"
      )
      .from(
        texttwo.chars,
        {
          opacity: 0,
          delay: 0,
          y: "100%",
        },
        "+1.8"
      )
      .from(
        iconsRef.current,
        {
          opacity: 0,
        },
        "+2.5"
      )
      .from(
        workRef.current,
        {
          opacity: 0,
        },
        "+2.5"
      );
  }, []);

  return (
    <div className="container">
      <section className="sectionone w-[100vw] flex flex-col justify-center items-center text-black bg-white mb-20">
        <div className="wrapper flex flex-col items-center justify-center mb-12">
          <h1
            ref={target}
            className="uppercase overflow-hidden text-8xl mb-2 font-bold"
          >
            alexis ford
          </h1>

          <div className="overflow-hidden">
            <h3 ref={targettwo} className="text-4xl job">
              Frontend Developer
            </h3>
          </div>
          <div
            ref={workRef}
            onClick={GoToProjects}
            className="work flex border-2 justify-center items-center border-black mt-4 mb-2 px-6 py-1 hover:text-white hover:bg-black cursor-pointer"
          >
            <span className="font-semibold my-1">View my work</span>
            <AiOutlineArrowRight
              size={20}
              className="arrow ml-1 ease-in rotate-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Title;
