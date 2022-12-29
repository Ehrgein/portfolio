import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";

function Header() {
  const navref = useRef();

  const GoToProjects = () => {
    window.scrollTo({
      top: 600,
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
      "+1.8"
    ).from(
      testnav.words,
      {
        opacity: 0,
        y: "-100%",
      },
      "+1.8"
    );
  }, []);

  return (
    <nav className="flex justify-center h-[5vh] bg-white top-0 sticky">
      <div className="flex h-[5vh] w-[95%] top-0 sticky">
        <div className="overflow-hidden flex items-center justify-end text-white text-2xl w-full">
          <div
            ref={navref}
            className="navfont flex justify-between w-[20%] text-3xl"
          >
            <Link to="/">
              <span
                className="navunderline 
              text-black cursor-pointer uppercase "
              >
                Projects
              </span>
            </Link>

            <Link to="/about">
              <span className="navunderline text-black  cursor-pointer uppercase">
                About
              </span>
            </Link>
            <Link to="/contact">
              <span className="navunderline text-black cursor-pointer uppercase">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
