import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { BsChevronDown, BsListTask } from "react-icons/bs";
import { IconContext } from "react-icons";
import { gsap, Power4 } from "gsap";
import { useNavigate } from "react-router-dom";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import node from "../assets/nodejs-icon.svg";
import mysql from "../assets/mysql-icon.svg";
import tailwind from "../assets/tailwindcss-icon.svg";
import devices from "../assets/devices.png";
import mongo from "../assets/mongodb-icon.svg";
import puppeteer from "../assets/puppeteer.svg";
import iphone from "../assets/kmiphone.png";
import Project from "./Project";
import { Link } from "react-router-dom";

const images = [
  {
    name: "Project 1",
    nametech: ["react", "css", "html", "tailwind", "node", "mysql", "js"],
    path: [react, css, html, tailwind, node, mysql, js],
  },
  {
    name: "Project 1",
    nametech: ["react", "css", "html"],
    path: [react, css, html],
  },
];

const proj = images.map((item) => item.path);

function TestProjects() {
  const AnimationRef = useRef();

  const tl = useRef();
  const tlone = useRef();
  const tltwo = useRef();
  const tlthree = useRef();
  const navigate = useNavigate();

  const [isRotated, setisRotated] = useState(false);
  const [isRotatedOne, setisRotatedOne] = useState(false);
  const [isRotatedTwo, setisRotatedTwo] = useState(false);
  const [isRotatedThree, setisRotatedThree] = useState(false);
  const [testingActive, setTestingActive] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const [activeProject, setActiveProject] = useState();
  const [activeAnim, setActiveAnim] = useState(true);
  const [ctx, setCtx] = useState(gsap.context(() => {}, AnimationRef));

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
    setisRotated((rotated) => !rotated);
  };

  const onRotate = () => {
    setisRotated((rotated) => !rotated);
  };

  useLayoutEffect(() => {
    ctx.add("remove", () => {
      gsap.to(ctx.selector(".projects"), {
        x: -2600,
        duration: 1,
        delay: 0,
        onComplete: () => {
          setActiveAnim(false);
          navigate("/keepmoving");
        },
      });
    });
    return () => ctx.revert(), navigate("/keepmoving");
  }, []);

  const projnumber = [1, 2, 3];

  const props = [
    {
      key: 1,
      projname: "Keep Moving",
      projurl: "https://keepmovingclothing.vercel.app/",
      giturl: "https://github.com/Ehrgein/keep-moving-clothing",
      mockup: devices,
      tl: tlone,
      tltwo: tltwo,
      tlthree: tlthree,
      active: activeOne,
      setActive: setActiveOne,
      testingActive: testingActive,
      setTestingActive: setTestingActive,
      isRotated: isRotatedOne,
      setisRotated: setisRotatedOne,
      setisRotatedTwo: setisRotatedTwo,
      setisRotatedThree: setisRotatedThree,
      projectid: "projectone",
      activeProject: "projectone",
      setActiveProject: setActiveProject,
      style: "w-full flex flex-col justify-center border-black items-center",
      projdata: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Node JS",
          icon: node,
        },
        {
          name: "Javascript",
          icon: js,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },
        {
          name: "MySQL",
          icon: mysql,
        },

        {
          name: "CSS",
          icon: css,
        },
        {
          name: "HTML",
          icon: html,
        },
      ],
      projinfo:
        "Functional, responsive e-commerce in which users can register, make purchases and visualize which items they previously purchased.",
    },
    {
      key: 2,
      projname: "Lights Out",
      projurl: "https://keepmovingclothing.vercel.app/",
      giturl: "https://github.com/Ehrgein/keep-moving-clothing",
      mockup: devices,
      tlone: tlone,
      tl: tltwo,
      tlthree: tlthree,
      active: activeTwo,
      setActive: setActiveTwo,
      isRotated: isRotatedTwo,
      setisRotated: setisRotatedTwo,
      setisRotatedOne: setisRotatedOne,
      setisRotatedThree: setisRotatedThree,
      projectid: "projecttwo",
      activeProject: "projecttwo",
      setActiveProject: setActiveProject,
      style:
        "w-full flex flex-col justify-center border-t border-black items-center",
      projdata: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "NodeJS",
          icon: node,
        },
        {
          name: "Puppeteer",
          icon: puppeteer,
        },
        {
          name: "Javascript",
          icon: js,
        },
        {
          name: "MongoDB",
          icon: mongo,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },

        {
          name: "CSS",
          icon: css,
        },
        {
          name: "HTML",
          icon: html,
        },
      ],
      projinfo:
        "Lights out is a website that displays power outages across Buenos Aires. It works by scraping all reported outages by ENRE (Argentina's energy regulator) with Puppeteer every one hour and storing said data in a MongoDB database to be consumed later by the frontend and display it on a map.",
    },
    {
      key: 3,
      projname: "Keep Moving",
      projurl: "https://keepmovingclothing.vercel.app/",
      giturl: "https://github.com/Ehrgein/keep-moving-clothing",
      mockup: devices,
      tlone: tlone,
      tltwo: tltwo,
      tl: tlthree,
      active: activeThree,
      setActive: setActiveThree,
      setisRotatedOne: setisRotatedOne,
      setisRotatedTwo: setisRotatedTwo,
      isRotated: isRotatedThree,
      setisRotated: setisRotatedThree,
      projectid: "projectthree",
      activeProject: "projectthree",
      setActiveProject: setActiveProject,
      style:
        "w-full flex-col justify-center border-t border-b border-black items-center mb-40",
      projdata: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },
      ],
    },
  ];

  return (
    <div ref={AnimationRef}>
      {activeAnim ? (
        <section className="projects sectiontwo w-[100vw] flex flex-col justify-start items-center">
          <div className="w-[95%] flex justify-start items-start text-white mt-20 mb-12">
            <h3 className=" text-4xl text-black">MY PROJECTS</h3>
            <button
              onClick={() => activeAnim && ctx.remove()}
              className="text-black text-xl
              "
            >
              hola
            </button>
          </div>
          <div className="w-[95%] flex flex-col justify-center  items-center">
            {projnumber.map((item, index) => (
              <Project props={props} idx={index} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default TestProjects;
