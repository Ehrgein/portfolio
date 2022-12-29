import React, { useRef, useEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import SplitType from "split-type";

function Transition({ menu, setMenu }) {
  const transitionRef = useRef();
  const HomeRef = useRef();
  const AboutRef = useRef();
  const ContactRef = useRef();

  const [ctx, setctx] = useState(gsap.context((context) => {}));

  useEffect(() => {
    let mobiletl = gsap.timeline();

    const HomeSplit = SplitType.create(HomeRef.current, {
      types: "words, chars",
    });
    const AboutSplit = SplitType.create(AboutRef.current, {
      types: "words, chars",
    });
    const ContactSplit = SplitType.create(ContactRef.current, {
      types: "words, chars",
    });

    mobiletl
      .from(
        HomeSplit.chars,
        {
          yPercent: 100,
          duration: 0.6,
        },
        "+0.8"
      )
      .from(
        AboutSplit.words,
        {
          y: "100%",
        },
        "+0.8"
      )
      .from(
        ContactSplit.words,
        {
          delay: 0,
          y: "100%",
        },
        "+0.8"
      );
    console.log(HomeSplit);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    let close = document.querySelector(".close");
    console.log(close);

    tl.from(transitionRef.current, {
      x: 1080,
      duration: 1,
    });
    close.addEventListener("click", (e) => {
      setMenu(!menu);
      document.body.style.overflowY = "visible";
      tl.from(transitionRef.current, {
        x: -100,
        duration: 12,
      });
    });
  });

  return (
    <div className="">
      <div className="transition-black" ref={transitionRef}>
        <div
          className="flex justify-end
        "
        >
          <span className="text-white close text-5xl">
            {" "}
            <IoMdClose />
          </span>
        </div>
        <div className="flex h-[90%] overflow-x-hidden flex-col items-center justify-center w-full ">
          <div className=" overflow-hidden mb-20">
            <Link
              onClick={() => setMenu(!menu)}
              className="text-white font-bold close text-7xl pb-20"
            >
              <span ref={HomeRef}>HOME</span>
            </Link>
          </div>
          <div
            className="overflow-hidden mb-20
          "
          >
            <Link
              onClick={() => setMenu(!menu)}
              className="text-white font-bold overflow-hidden close text-7xl pb-20"
              to="/about"
            >
              <span ref={AboutRef}>ABOUT</span>
            </Link>
          </div>
          <div className="overflow-hidden mb-20">
            <Link
              onClick={() => setMenu(!menu)}
              className="text-white font-bold overflow-hidden close text-7xl mb-40"
              to="/contact"
            >
              <span ref={ContactRef}>CONTACT </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition;
