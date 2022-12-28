import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import node from "../assets/nodejs-icon.svg";
import mysql from "../assets/mysql-icon.svg";
import tailwind from "../assets/tailwindcss-icon.svg";
import devices from "../assets/devices.png";
import { Link } from "react-router-dom";

function Project({
  props,
  idx,
  style,
  tlone,
  tltwo,
  tlthree,
  activeProject,
  setActiveProject,
  isRotated,
  setisRotated,
  setisRotatedOne,
  setisRotatedTwo,
  setisRotatedThree,
  projectid,
  handleCloseAll,
  tl,
  oldtl,
}) {
  const AnimationRef = useRef();
  const NewProjectRef = useRef();
  const ProjectContainerRef = useRef();

  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  });

  

  const [ctx, setCtx] = useState(gsap.context(() => {}, AnimationRef));

  const toggleTimeline = () => {
    props[idx].tl.current.reversed(!props[idx].tl.current.reversed());
    props[idx].setisRotated((rotated) => !rotated);
    props[idx].setActiveProject(props[idx].projectid);
    if (props[idx].activeProject === "projectthree") {
      props[idx].tlone.current.reverse();
      props[idx].tltwo.current.reverse();
      props[idx].setisRotatedOne(false);
      props[idx].setisRotatedTwo(false);
    }
    if (props[idx].activeProject === "projecttwo") {
      props[idx].tlone.current.reverse();
      props[idx].tlthree.current.reverse();
      props[idx].setisRotatedOne(false);
      props[idx].setisRotatedThree(false);
    }
    if (props[idx].activeProject === "projectone") {
      props[idx].tlthree.current.reverse();
      props[idx].tltwo.current.reverse();
      props[idx].setisRotatedThree(false);
      props[idx].setisRotatedTwo(false);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const project = self.selector(`#${props[idx].projectid}`);
      props[idx].tl.current = gsap
        .timeline()
        .from(project[0], {
          height: 0,
          ease: Power3.easeInOut,
        })
        .reverse();
    }, ProjectContainerRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  const onRotate = () => {
    setisRotated((rotated) => !rotated);
  };

  return (
    <div className={props[idx].style}>
      <div className="flex items-center justify-between w-full py-3">
        <span className="text-black text-3xl cursor-pointer">
          {props[idx].projname}
        </span>
        <IconContext.Provider value={{ size: "30px", color: "black" }}>
          <div>
            <BsChevronDown
              onClick={toggleTimeline}
              className={
                props[idx].isRotated
                  ? "project-arrow-down-open"
                  : "project-arrow-down-new"
              }
            />
          </div>
        </IconContext.Provider>
      </div>
      <div
        id="projects"
        className="flex justify-start w-full"
        ref={ProjectContainerRef}
      >
        <div
          ref={NewProjectRef}
          id={props[idx].projectid}
          className={`flex overflow-hidden w-full`}
        >
          <div className="flex flex-col w-[60%] justify-start items-start mt-10">
            <div className="flex justify-start items-start">
              <p className="text-lg font-normal projectinfo w-[80%]">
                {props[idx].projinfo}
              </p>{" "}
            </div>

            <div className="flex mt-10 projectinfo">
              {props[idx].projdata.map((item, index) => (
                <div key={index} className="flex items-center flex-col mx-2">
                  <img className="w-12 h-12" src={item.icon} />
                  <p className="mt-2 text-lg">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex w-[100%] justify-start mt-10">
              <div className="flex justify-between w-[60%]">
                <div className="bg-white border-2 py-1 px-6 border-black">
                  <a href="https://github.com/Ehrgein/keep-moving-clothing">
                    <button className="text-xl">Github</button>
                  </a>
                </div>
                <div className="bg-white border-2 py-1 px-6 border-black">
                  <a href="https://keepmovingclothing.vercel.app/">
                    <button className="text-xl">Deploy</button>
                  </a>
                </div>
                <div className="bg-white border-2 py-1 px-6 border-black">
                  <Link to="/keepmoving">
                    <button className="text-xl">Case Study</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-start h-auto pb-10 ">
            <img className="h-[400px]" src={props[idx].mockup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
