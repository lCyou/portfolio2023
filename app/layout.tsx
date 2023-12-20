import "./global.css";

import Head from 'next/head'
import Chatbot from "./component/chatbot";
import BackGround from "./background";
import Sidebar from "./component/sidebar";
import { personalData } from "../data/page-data";
import JumpButton from "./component/jump-button";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="scroll-smooth">
			<head>
				<title>lCyou resume 2023ss</title>
				<link rel='icon' href='/icon.svg' />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
			</head> 

			<body className="bg-weate">
				<BackGround />
				<div className = "flex flex-col sm:flex-row">
					<Sidebar data={personalData} />
					<main className='grow-full justify-center p-8 sm:p-16 w-full sm:basis-2/3  ml-auto mr-8'>
						{children}
					</main>
					<JumpButton />
				</div>
				<Chatbot />
			</body>
		</html>
	);
}