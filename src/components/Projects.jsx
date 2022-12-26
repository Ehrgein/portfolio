import React, { useEffect } from "react";
import pic from "../untitled2.png";
import animation from "../Animation.gif";
import Transition from "./Transition";
import gsap from "gsap";

function Projects() {
  return (
    <div className="">
      <section className="sectiontwo w-[100vw] flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-center text-white mb-36">
          <h3 className="text-2xl text-black">My Projects</h3>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="flex justify-center items-center w-[90%] h-[500px] ">
            <div className="flex text-black flex-col cardcontainer justify-start text-xl items-center w-[600px] h-[395px] rounded-xl">
              <h2 className="font-semibold">Keep Moving E-commerce</h2>

              <h2 className="font-semibold">Keep Moving E-commerce</h2>
              <h2 className="font-semibold">Keep Moving E-commerce</h2>
              <h2 className=" font-semibold">Keep Moving E-commerce</h2>
            </div>{" "}
            <div className="flex cardcontainer justify-center items-center w-[805px] h-[395px] rounded-xl">
              <img
                src={animation}
                className="w-full h-full border-r-blue-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
