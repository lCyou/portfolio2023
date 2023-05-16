import "./global.css";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { tsParticles } from "tsparticles-engine";

import BackGround from "./background";
import Sidebar from "./component/sidebar";
import { personalData } from "../data/page-data";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<title>lCyou resume 2023ss</title>
				<link rel='icon' href='/icon.svg' />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          
			</head> 

			<body>
				<BackGround />
				<div className=" flex flex-col sm:flex-row">
					<Sidebar data={personalData} />
					<main className='grow-full justify-center p-8 sm:p-16 w-full sm:basis-2/3  ml-auto mr-8'>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}