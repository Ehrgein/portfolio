import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";

function Header() {
  const navref = useRef();

  const GoToProjects = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let tl = gsap.timeline();

    const testnav = SplitType.create(navref.current, { types: "words, chars" });

    tl.from(
      navref.current,
      {
        opacity: 0,
      },
      "+2.5"
    ).from(
      testnav.words,
      {
        opacity: 0,
        y: "-100%",
      },
      "+2.5"
    );
  }, []);

  return (
    <nav className="flex justify-center h-[5vh] bg-white">
      <div className="w-[95%]">
        <div className="flex h-[5vh]">
          <div className="overflow-hidden flex items-center justify-end text-white text-2xl w-full">
            <div
              ref={navref}
              className="navfont flex justify-between w-[20%] text-2xl  fixed"
            >
              <span
                onClick={GoToProjects}
                className="navunderline 
              text-black cursor-pointer uppercase "
              >
                Projects
              </span>

              <span className="navunderline text-black  cursor-pointer uppercase">
                About
              </span>

              <span className="navunderline text-black cursor-pointer uppercase">
                Contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
