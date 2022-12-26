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
  const ProjectRefTwo = useRef();
  const arrowAnimationRef = useRef();
  const arrowAnimationRefTwo = useRef();

  const [menu, setMenu] = useState(false);
  const [menuTwo, setMenuTwo] = useState(false);
  const [isRotated, setisRotated] = useState(false);
  const [isRotatedTwo, setisRotatedTwo] = useState(false);
  const [active, setActive] = useState(true);
  const [ctx, setCtx] = useState(gsap.context(() => {}, AnimationRef));

  let tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.from(ProjectRef.current, {
      height: 0,
      ease: Power4.easeInOut,
    });

    const arrowbtn = document.getElementById("arrowbtn");

    if (menu) {
      arrowbtn.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
      });
    }
  }, [menu]);

  useLayoutEffect(() => {
    let tltwo = gsap.timeline();
    tltwo.from(ProjectRefTwo.current, {
      height: 0,
      ease: Power4.easeInOut,
    });

    const arrowbtntwo = document.getElementById("arrowbtntwo");

    if (menuTwo) {
      arrowbtntwo.addEventListener("click", () => {
        tltwo.reversed() ? tltwo.play() : tltwo.reverse();
      });
    }
  }, [menuTwo]);

  const onRotate = () => {
    setisRotated((rotated) => !rotated);
  };

  const onRotateTwo = () => {
    setisRotatedTwo((rotated) => !rotated);
  };
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
                  {menu ? (
                    <BsChevronDown
                      onClick={onRotate}
                      ref={arrowAnimationRef}
                      id="arrowbtn"
                      className={
                        isRotated
                          ? "project-arrow-down-new"
                          : "project-arrow-down open"
                      }
                    />
                  ) : (
                    <BsChevronDown
                      onClick={() => setMenu(!menu)}
                      className={
                        menu
                          ? "project-arrow-down open ml-1 pepito11 "
                          : "project-arrow-down ml-1 duration-300 pepito40"
                      }
                    />
                  )}
                </div>
              </IconContext.Provider>
            </div>
            <div id="projects">
              {menu ? (
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
                <div>
                  {menuTwo ? (
                    <BsChevronDown
                      onClick={onRotateTwo}
                      ref={arrowAnimationRefTwo}
                      id="arrowbtntwo"
                      className={
                        isRotatedTwo
                          ? "project-arrow-down-new"
                          : "project-arrow-down open"
                      }
                    />
                  ) : (
                    <BsChevronDown
                      onClick={() => setMenuTwo(!menuTwo)}
                      className={
                        menuTwo
                          ? "project-arrow-down open ml-1 pepito11 "
                          : "project-arrow-down ml-1 duration-300 pepito40"
                      }
                    />
                  )}
                </div>
              </IconContext.Provider>
            </div>
            <div id="projectstwo">
              {menuTwo ? (
                <div ref={ProjectRefTwo} className="overflow-hidden">
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
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default TestProjects;
