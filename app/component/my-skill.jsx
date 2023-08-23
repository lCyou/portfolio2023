'use client';
import React, { useState } from "react";


const MySkill = ({ data }) => {
    const{title} = data;

	const [description, setDes]  = useState("選択してください");

    const skillButton = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-1 gap-2`}
		>
			{data.skills.map(({ name, icon, description }) => (
				<li key={name} className='skill text-center'>
					<button type="button" className="sbtn py-1 cursor-pointer" onClick= {() => setDes(description)}>
                    	{icon}
                    	<p className="text-center text-sm">{name}</p>
					</button>
				</li>
			))}
		</ul>
	);

	return (
		<section>
            <div className='flex my-4'>
                <div className="bg-midnight-blue w-2 h-9 mr-6"></div>
			    <h2 className=' text-black'>{title}</h2>
            </div>
			<div className="flex flex-col h-25 backdrop-blur-sm bg-white/30 rounded-3xl ml-7">
					<p className="p-6">{description}</p>
			</div>
            <div className="ml-7 mt-7">
            	{skillButton}
            </div>
		</section>
	);
};

export default MySkill;