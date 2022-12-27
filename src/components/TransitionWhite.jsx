import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function TransitionWhite() {
  const ProjectRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(ProjectRef.current, {
      duration: 1.5,
      x: -2600,
    });
  });
  

  return (
    <div>
      <div className="transition-white" ref={ProjectRef}></div>
    </div>
  );
}

export default TransitionWhite;
