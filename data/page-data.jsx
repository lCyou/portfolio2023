export const personalData = {
	name: "Kaoru Yamakawa",
	role: ["Student",
        "(engineer)"
    ],
	education: [
		"Faculty of Science and Technology Informatics Department of Media in Kindai University(2021- )",
	],
	contactLinks: [
		"Osaka, Japan",
		"mailto:emailto:info.lcyouy@gmail.com",
		"https://twitter.com/lCyo_u",
		"https://www.linkedin.com/in/kaoru-yamakawa-965088271/",
		"https://github.com/lCyou",
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"こんにちは！　lCyou という名前で活動しています。",
		"大学に入って自分のパソコンを持ったことをきっかけにプログラミングに興味を持ちました。趣味でWeb関連の技術を触ったりハッカソンに出たりしています。",
		"技術としては学校で基本的なコンピュータサイエンスの知識と独学でのプログラミングで日々勉強に取り組んでいます。将来はエンジニアリングを通して問題解決に貢献できるようになりたいです。",
	],
};

export const skills = {//icons from https://devicon.dev/
	title: "skills",
	skills: [
		{ name: "next", icon: <i class="devicon-nextjs-plain"></i>},
		{ name: "react", icon: <i className="devicon-react-original colored"></i>},
		{ name: "css",icon: <i className="devicon-css3-plain colored"></i>},
		{ name: "html",icon: <i className="devicon-html5-plain colored"></i>},
		{ name: "tailwind",icon: <i className="devicon-tailwindcss-plain colored"></i>},
		{ name: "js",icon: <i className="devicon-javascript-plain colored"></i>},
		{ name: "ts",icon: <i className="devicon-typescript-plain colored"></i>},
		{ name: "python",icon: <i className="devicon-python-plain colored"></i>},
		{ name: "java",icon: <i class="devicon-java-plain"></i>},
		{ name: "c",icon: <i className="devicon-c-plain colored"></i>},
		{ name: "c++",icon: <i className="devicon-cplusplus-plain colored"></i>},
		{ name: "c#",icon: <i className="devicon-csharp-plain colored"></i>},
		{ name: "sqlite",icon: <i class="devicon-sqlite-plain"></i>},
		{ name: "git",icon: <i className="devicon-git-plain colored"></i>},
		{ name: "github",icon: <i class="devicon-github-original"></i>},
		{ name: "docker",icon: <i className="devicon-docker-plain colored"></i>},
		{ name: "heroku",icon: <i className="devicon-heroku-original colored"></i>},
		{ name: "node",icon: <i className="devicon-nodejs-plain colored"></i>},
		{ name: "express",icon: <i class="devicon-express-original"></i>},
		{ name: "flask",icon: <i class="devicon-flask-original"></i>},
		{ name: "unity",icon: <i class="devicon-unity-original"></i>},
		{ name: "IFTTT", icon: <i class="devicon-ifttt-plain"></i>},
		{ name: "nginx", icon: <i class="devicon-nginx-original colored"></i>},
		{ name: "FastAPI", icon: <i class="devicon-fastapi-plain"></i>},
		{ name: "flutter", icon: <i class="devicon-flutter-plain colored"></i>},

	],
	
};

export const workData = {
	title: "Experience",
	experiences: [
		{
			id: 1,
			status: "school",
			date: "2021 - Present",
			event: "大学入学",
			role: "理工学部情報学科 に入学",
		},
		{
			id: 2,
			status: "school",
			date: "2021.5",
			event: "CSG(電子計算機研究会) 入部",
			role: "基本的なWeb技術の勉強を始める",
		},
		{
			id: 3,
			status: "school",
			date: "2021.8",
			event: "部内ハッカソン 初参加",
			role: "初めてハッカソンでチーム開発を体験",
		},
		{
			id: 4,
			status: "activity",
			date: "2022.2",
			event: "KC3Hack 2022",
			role: "フロントエンド担当 / オーディエンス賞3位",
		},
		{
			id: 5,
			status: "activity",
			date: "2022.10 - 2023.3",
			event: "CODEGYM academy2022秋",
			role: "CS50修了 / Webの知識を学んだ",
		},
		{
			id: 6,
			status: "activity",
			date: "2023.2",
			event: "KC3Hack 2023",
			role: "バックエンド担当 / さくらインターネット賞受賞",
		},
		{
			id: 7,
			status: "work",
			date: "2023.5",
			event: "GMO DecSecOpsthon2023",
			role: "インターネットインフラについて勉強",
		},
	],
};


export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Data Scientist, Acme Inc. (2021-Present)",
			description:
				"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
			current: true,
		},

		{
			role: "Machine Learning Engineer, XYZ Corp. (2019-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
		{
			role: "Machine Learning Engineer, ABX Corp. (2020-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
	],
};