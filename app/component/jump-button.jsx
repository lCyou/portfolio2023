"use client";
import React, { useState } from "react";

const JumpButton = () => {
  const [isActive, setIsActive] = useState(false);

  const clickJump = () => {
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    console.log(isActive);
  };

  return (
    <div>
      <div className="fixed z-10 bottom-10 right-10 py-2 px-2 bg-dark-yellow rounded-full cursor-pointer">
        <button onClick={clickJump}>Jump</button>
      </div>
      <div className={`${isActive ? "shown" : ""}`}>
        <button className="jump-button">
            <a href="#aboutMe">About</a>
        </button>
        <button className="jump-button">
            <a href="#skill">Skills</a>
        </button>
        <button className="jump-button">
            <a href="#experience">Experience</a>
        </button>
      </div>
    </div>
  );
};

export default JumpButton;
