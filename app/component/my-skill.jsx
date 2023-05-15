import React from "react";


const MySkill = ({ data }) => {
    const {front, back} = data;
	return (
		<section>
            <div className='flex my-4'>
            <div className="bg-grey w-2 h-9 mr-6"></div>
			<h2 className='mb-6 text-white'> Skills</h2>
            </div>
			<div className='flex my-5 gap-6'>
				{front.map((skill, name) => (
                    <div key={name} className="">{skill.icon}</div>
                ))}
			</div>
		</section>
	);
};

export default MySkill;