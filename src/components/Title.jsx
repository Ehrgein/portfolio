import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import SplitType from "split-type";
import { gsap, Power3 } from "gsap";

function Title() {
  const [inputValue, setInputValue] = useState("");

  const target = useRef();
  const targettwo = useRef();
  const iconsRef = useRef();
  const workRef = useRef();

  const GoToProjects = () => {
    window.scrollTo({
      top: 900,
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
        "0.5"
      )
      .from(
        texttwo.chars,
        {
          opacity: 0,
          delay: 0,
          y: "100%",
        },
        "+1.3"
      )
      .from(
        iconsRef.current,
        {
          opacity: 0,
        },
        "+1.9"
      )
      .from(
        workRef.current,
        {
          opacity: 0,
        },
        "1.9"
      );
  }, []);

  return (
    <div className="container">
      <section className="sectionone w-[100vw] flex flex-col justify-center items-center text-black bg-white mb-20">
        <div className="wrapper flex flex-col items-center justify-center mb-12">
          <h1
            ref={target}
            className="uppercase overflow-hidden tablet:text-8xl mobilexs:text-7xl mb-2 font-bold"
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
            <span className="my-1 workinfo">View my work</span>
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
