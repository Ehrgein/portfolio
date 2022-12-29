import React, { useLayoutEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { IconContext } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

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
          <div className="flex flex-col md:w-[60%] mobilexs:w-full justify-start items-start tablet:mt-10 mobilexs:mt-4">
            <div className="flex justify-start items-start">
              <p className="md:text-lg mobilexs:text-sm font-normal projectinfo md:w-[80%] mobilexs:w-full">
                {props[idx].projinfo}
              </p>{" "}
            </div>

            <div className="flex mt-10 projectinfo">
              {props[idx].projdata.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col desktop:mx-2 mobilexs:mx-1"
                >
                  <img
                    className="md:w-12 md:h-12 mobilexs:h-6 mobilexs:w-6"
                    src={item.icon}
                  />
                  <p className="mt-2 text-sm mobilexs:text-xs">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex w-[100%] justify-start mt-10 mb-10">
              <div className="flex justify-between ">
                <div
                  className="bg-white border-2 py-1 px-6 border-black ml-10 mobilexs:ml-4 mobileM:ml-10
                "
                >
                  <a href={props[idx].giturl}>
                    <button className="text-xl">Github</button>
                  </a>
                </div>
                <div className="bg-white border-2 py-1 px-6 border-black tablet:ml-20 mobilexs:ml-16">
                  <a href={props[idx].projurl}>
                    <button className="text-xl">Deploy</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex w-[50%] hidden   justify-start h-auto pb-10 ">
            <img className="h-[400px]" src={props[idx].mockup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
