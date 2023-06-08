'use client';
import React, {useState, useEffect} from "react";
import { aboutMe, skills, workData } from "../data/page-data";
import AboutMe from "./component/about-me";
import MySkill from "./component/my-skill";
import Experience from "./component/experience";
import { Allow } from "./component/icons/";
import { Link as Scroll } from "react-scroll";

const page = () => {
	const [isActive, setIsActive]  = useState(false);
	
  const jumpButton = (
	  
		<div className="fixed z-50 bottom-10 right-10 py-2 px-2 bg-dark-yellow rounded-full cursor-pointer">
			<Allow className="text-white "/>
		</div>
    
  );

  return (
    <div>
      {jumpButton}
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
    </div>
  );
};

export default page;
