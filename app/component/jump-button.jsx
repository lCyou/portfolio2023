"use client";
import React, { useState } from "react";
import { Allow } from "./icons/";

const JumpButton = () => {
  const [isActive, setIsActive] = useState(true);

  const clickJump = () => {
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    console.log(isActive);
  };

  return (
    <div className="text-white">
      <button
        className="fixed z-10 top-5 right-5 px-2 py-2 place-content-center bg-dark-yellow rounded-full"
        onClick={clickJump}
      >
        <Allow
          className={`transform duration-500 ${isActive ? "" : "rotate-180"}`}
        />
      </button>
      <div className={`${isActive ? " visible" : " invisible"}`}>
        <a href="#aboutMe">
          <button className="fixed jump-button top-20 right-10 h-12 w-32">
            About
          </button>
        </a>
        <a href="#skill">
          <button className="fixed jump-button top-36 right-10 h-12 w-32">
            Skills
          </button>
        </a>
        <a href="#experience">
          <button className=" fixed jump-button top-52 right-10 h-12 w-32">
            Experience
          </button>
        </a>
      </div>
    </div>
  );
};

export default JumpButton;
