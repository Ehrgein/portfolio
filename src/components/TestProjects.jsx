import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsChevronDown, BsListTask } from "react-icons/bs";
import { IconContext } from "react-icons";
import { gsap, Power4 } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Tween } from "gsap/gsap-core";
import App from "../App";

function TestProjects() {
  const AnimationRef = useRef();
  const ProjectRef = useRef();
  const hiddenRef = useRef();

  const [arrow, setactiveArrow] = useState(false);

  const [active, setActive] = useState(true);
  const [ctx, setCtx] = useState(gsap.context(() => {}, AnimationRef));

  useLayoutEffect(() => {
    let tl = gsap.timeline();

    tl.from(ProjectRef.current, {
      height: 0,
      ease: Power4.easeInOut,
    });

    const projects = document.getElementById("projects");

    if (projects) {
      projects.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
      });
    }
  }, [arrow]);

  // useLayoutEffect(() => {
  //   ctx.add("remove", () => {
  //     gsap.to(ctx.selector(".projects"), {
  //       x: -2600,
  //       opacity: 0.1,
  //       duration: 1,
  //       onComplete: () => {
  //         setActive(false); //navigate("/keepmoving");
  //       },
  //     });
  //   });
  //   return () => ctx.revert(); //navigate("/keepmoving");
  // }, []);

  return (
    <div ref={AnimationRef}>
      {active ? (
        <section className="projects sectiontwo w-[100vw] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-white mb-20">
            <h3 className="text-5xl text-black">MY PROJECTS</h3>
          </div>
          <div className="w-[60%] flex flex-col justify-center  items-center">
            <div className="flex text-5xl items-center justify-between w-full border-t-2 border-black py-12">
              <span className="text-black cursor-pointer">KEEP MOVING</span>

              <IconContext.Provider value={{ size: "50px", color: "black" }}>
                <div>
                  <BsChevronDown
                    id="arrowbtn"
                    onClick={() => setactiveArrow(!arrow)}
                    className={
                      arrow
                        ? "project-arrow-down open ml-1 "
                        : "project-arrow-down ml-1  duration-300"
                    }
                  />
                </div>
              </IconContext.Provider>
            </div>
            <div id="projects">
              {arrow ? (
                <div ref={ProjectRef} className="overflow-hidden">
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                  <div>HOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLAHOLA</div>
                </div>
              ) : null}
            </div>
            <div className="flex text-5xl items-center justify-between w-full border-b-2 border-t-2 border-black py-12">
              <span className="text-black cursor-pointer">KEEP MOVING</span>
              <IconContext.Provider value={{ size: "50px", color: "black" }}>
                <BsChevronDown />
              </IconContext.Provider>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default TestProjects;
