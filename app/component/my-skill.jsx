import React from "react";


const MySkill = ({ data }) => {
    const{title} = data;

    const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2`}
		>
			{data.skills.map(({ name, icon }) => (
				<li key={name} className='skill text-center'>
                    {icon}
                    <p className="text-center text-sm">{name}</p>
				</li>
			))}
		</ul>
	);

	return (
		<section>
            <div className='flex my-4'>
                <div className="bg-grey w-2 h-9 mr-6"></div>
			    <h2 className='mb-6 text-white'>{title}</h2>
            </div>
            <div className="ml-7">
            {content}
            </div>
		</section>
	);
};

export default MySkill;