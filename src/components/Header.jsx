import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import { GiHamburgerMenu } from "react-icons/gi";
import SplitType from "split-type";
import { Link, useParams, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Transition from "./Transition";
import TransitionWhite from "./TransitionWhite";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const navref = useRef();
  const burgerRef = useRef();

  const [menu, setMenu] = useState(false);
  console.log(menu);

  let route = useParams();
  let location = useLocation();

  console.log(route);

  useEffect(() => {
    let tl = gsap.timeline();

    const testnav = SplitType.create(navref.current, { types: "words, chars" });

    if (location.pathname === "/") {
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
    }
  }, []);

  useEffect(() => {
    let mobiletl = gsap.timeline();

    mobiletl.from(
      burgerRef.current,
      {
        opacity: 0,
        y: "-100%",
      },
      "+1.8"
    );
  });

  const handleHamburgerMenu = () => {
    setMenu(!menu);
    document.body.style.overflowY = "hidden";
  };

  useEffect(() => {
    menu
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [menu]);

  return (
    <>
      <div className="sticky top-0">
        <nav className="md:flex hidden h-[5vh] bg-white ">
          <div className="overflow-hidden flex items-center justify-end text-white text-2xl w-full">
            <div
              ref={navref}
              className="navfont flex justify-between md:text-3xl mobilexs:text-3xl"
            >
              <Link to="/">
                <span
                  className="navunderline 
              text-black cursor-pointer md:mr-8 mobilexs:mx-2"
                >
                  Home
                </span>
              </Link>

              <Link to="/about">
                <span className="navunderline text-black  cursor-pointer uppercase md:mx-8 mobilexs:mx-2">
                  About
                </span>
              </Link>
              <Link to="/contact">
                <span className="navunderline text-black cursor-pointer uppercase md:mx-8 mobilexs:mx-2">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/*mobile here */}

      <div className="sticky top-0">
        <div
          ref={burgerRef}
          className="md:hidden mobilexs:flex w-full justify-end items-center "
        >
          <GiHamburgerMenu
            onClick={handleHamburgerMenu}
            size={30}
            className="mr-2 mt-3"
          />
        </div>
      </div>
      {menu ? <Transition menu={menu} setMenu={setMenu} /> : null}
    </>
  );
}

export default Header;
