import React, { useId } from "react";

const AboutMe = ({ data}) => {
	const { title, body } = data;
	const id = useId();
	return (
		<section>
			<div className='flex my-4'>
			<div className="bg-midnight-blue w-2 h-9 mr-6"></div>
			<h2 className='text-black mb-5'> {title}</h2>
			</div>
			{body?.map((el, i) => (
				<p key={`${id}_${i}`} className='mt-3 mb-3 ml-9'>
					{el}
				</p>
			))}
		</section>
	);
};

export default AboutMe;