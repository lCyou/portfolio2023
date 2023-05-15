import React from "react";
import { aboutMe, skills, professionalData, workData } from "../data/page-data";
import AboutMe from "./component/about-me";
import MySkill from "./component/my-skill";
import Experience from "./component/experience";
import ProfessionalExperience from "./component/professional-experience";

const page = () => {
	return (
		<div>
			<div className="text-white ">
			<AboutMe data={aboutMe} />
			<MySkill data={skills}/>
			<Experience data={workData} />
			{/* <ProfessionalExperience data={professionalData} /> */}
			</div>
		</div>
	);
};

export default page;