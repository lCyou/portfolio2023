import React,{ memo } from "react";

const Experience = ({data}) => {
	const { title, experiences } = data;
    const reverse = experiences.reverse();

	return (
		<section>
            <div className='flex my-4'>
            <div className="bg-midnight-blue w-2 h-9 mr-6"></div>
			<h2 className='text-black mb-6'> {title}</h2>
            </div>
			<div className='flex flex-col gap-6'>
				{reverse.map(({ date, event, role, id, status}) => (
					<div key={role} className='flex ml-10'>
						<div className='mr-8'>
                            <div className="mx-auto w-1 h-4 bg-midnight-blue"></div>
                            <div className={`bg-midnight-blue rounded-full h-6 w-6`}>
                                {id == 1 ?
                                    <div className="mx-auto w-1 h-20 md:10 bg-midnight-blue"></div> : <div className="mx-auto w-1 h-60 md:h-30 bg-midnight-blue"></div>
                                }
                            </div>
						</div>
                        <div className="text-lg font-light mt-2 mb-4">
                            <div className="">
                                <div className="text-sm">{date}</div>
                                <div className="my-auto font-normal text-xl">{event}</div>
                                <div className="text-base">{role}</div>
                            </div>
                        </div>
					</div>
				))}
			</div>
            <div className="mb-20"></div>
		</section>
	);
};


export default Experience;