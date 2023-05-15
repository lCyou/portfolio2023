"use client";
import React, { useState } from "react";

import { TS } from "./icons";

const Skills = ({ data }) => {
	const [activeTab, setActiveTab] = useState("front");

	const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
	const setTabsAlignment = (tab) =>
		tab === "front" ? "text-left" : "text-right";

	const tabs = (
		<div className='flex'>
			{["front", "back"].map((el) => (
				<button
					key={el}
					type='button'
					className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
					onClick={() => setActiveTab(el)}
				>
					{el} Skills
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
				activeTab === "front" ? "justify-start" : "justify-end"
			}`}
		>
			{data[activeTab].map(({ name, icon }) => (
				<li key={name} className='skill'>
					<TS />
				</li>
			))}
		</ul>
	);
	return (
		<div>
			{tabs}
			{content}
		</div>
	);
};

export default Skills;