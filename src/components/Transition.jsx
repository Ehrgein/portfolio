import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Transition() {
  const transitionRef = useRef();
  const transitionRefTwo = useRef();
  const transitionRefThree = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      transitionRef.current,
      {
        y: 1080,
      },
      "0.1"
    );
    tl.from(
      transitionRefTwo.current,
      {
        y: 1080,
      },
      "0.13"
    );
    tl.from(
      transitionRefThree.current,
      {
        y: 1080,
        delay: 0.1,
      },
      "0.16"
    );
    tl.to(
      transitionRef.current,
      {
        y: -1200,
        delay: 0.4,
      },
      "0.5"
    );
    tl.to(
      transitionRefTwo.current,
      {
        y: -1200,
        delay: 0.4,
      },
      "0.6"
    );
    tl.to(
      transitionRefThree.current,
      {
        y: -1200,
        delay: 0.4,
      },
      "0.7"
    );
  });

  return (
    <div>
      <div className="transition-black" ref={transitionRef}></div>
      <div className="transition-blacktwo" ref={transitionRefTwo}></div>
      <div className="transition-blackthree" ref={transitionRefThree}></div>
    </div>
  );
}

export default Transition;
