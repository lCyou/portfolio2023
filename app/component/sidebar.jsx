'use client';
import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Github, Location} from "./icons/";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;

	return (
		<div className=' flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
			<div className='text-white flex flex-col p-10 items-center'>
				<Image
					priority
					width={300}
					height={300}
					className='rounded-full h-full mb-5 mt-5'
					src='/images/myicon.jpg'
					alt='myicon.jpg'
					aria-label='myicon.jpg'
				/>
				<h1 className='mb-0'>{name}</h1>
				<h2 className='mb-0'>{role[0]}</h2>
                <h2 className='mb-3'>{role[1]}</h2>
				<div className='flex flex-row justify-center mb-6'>
					<span className='mr-3'><Location/></span>
					<span>{contactLinks?.[0]}</span>
				</div>
				<p className='text-center mb-2'>{education[0]}</p>
				<div className='text-white text-center mb-0 mt-4 sm:mt-8'>
					<h3 className='mb-2'> </h3>
					<div className='flex flex-row justify-center '>
						<a
							className='icons-contactme'
							href={contactLinks?.[1]}
							aria-label={"email link"}
						>
							<Envelope />
						</a>
						<a
							className='icons-contactme'
							href={contactLinks?.[2]}
							aria-label={"twitter link"}
						>
							<Twitter />
						</a>
						<a
							className='icons-contactme'
							href={contactLinks?.[3]}
							aria-label={"linkedin link"}
						>
							<Linkedin />
						</a>
						<a
							className='icons-contactme'
							href={contactLinks?.[4]}
							aria-label={"github link"}
						>
							<Github />
						</a>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;