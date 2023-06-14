'use client';
import React, { memo } from "react";
import { aboutMe, skills, workData } from "../data/page-data";
import AboutMe from "./component/about-me";
import MySkill from "./component/my-skill";
import Experience from "./component/experience";

const page = memo(() => {
  return (
      <div className="text-black ">
        <div id="aboutMe">
          <AboutMe data={aboutMe} />
        </div>
        <div id="skill">
          <MySkill data={skills} />
        </div>
        <div id="experience">
          <Experience data={workData} />
        </div>
      </div>
  );
});

export default page;
