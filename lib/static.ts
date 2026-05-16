import type { IProjects, ISkillDatas } from './staticInterface';

export const projects: Array<IProjects> = [
	{
		name: 'Attendance & Payroll SaaS',
		link: 'attendance-saas',
		image: '/web-absen.png',
		type: 'SaaS Platform',
		tools: ['Next.js', 'Golang', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
		description: 'project_content.attendance-saas.description',
		images: ['/web-absen.png'],
		url: 'https://landing-page-attendance.mahardikakdenie.my.id/',
		role: 'Fullstack Developer',
		year: '2024',
		features: [
			'project_content.attendance-saas.features.0',
			'project_content.attendance-saas.features.1',
			'project_content.attendance-saas.features.2',
			'project_content.attendance-saas.features.3'
		],
		challenges: 'project_content.attendance-saas.challenges',
		documentationLink: '/documentation/go-attendance-api'
	},
	{
		name: 'Drag & Drop Web Builder',
		link: 'web-builder',
		image: 'https://jam.dev/cdn-cgi/image/width=2560,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/e5ed9efb9cb1aa4507117938f41e78f8/screenshot/748f726e-f672-46b9-b36c-94cd8e733593.png',
		type: 'Web App',
		tools: ['React', 'TypeScript', 'Vite', 'Zustand', 'TailwindCss'],
		description: 'project_content.web-builder.description',
		images: ['https://jam.dev/cdn-cgi/image/width=2560,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/e5ed9efb9cb1aa4507117938f41e78f8/screenshot/748f726e-f672-46b9-b36c-94cd8e733593.png'],
		url: 'https://web-builder.mahardikakdenie.my.id/',
		role: 'Frontend Engineer',
		year: '2024',
		features: [
			'project_content.web-builder.features.0',
			'project_content.web-builder.features.1',
			'project_content.web-builder.features.2',
			'project_content.web-builder.features.3'
		],
		challenges: 'project_content.web-builder.challenges'
	},
	{
		name: 'Point Of Sales (Laukita Theme)',
		link: 'laukita-theme',
		image: '/laukita.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: 'project_content.laukita-theme.description',
		images: ['/laukita.png', '/dashboard-laukita.png'],
		url: 'https://laukita.mahardikakdenie.my.id',
        role: 'Lead Frontend Engineer',
        year: '2024',
        features: [
            'project_content.laukita-theme.features.0',
            'project_content.laukita-theme.features.1',
            'project_content.laukita-theme.features.2',
            'project_content.laukita-theme.features.3',
            'project_content.laukita-theme.features.4'
        ],
        challenges: 'project_content.laukita-theme.challenges'
	},
	{
		name: 'Point Of Sales (Dreams Theme)',
		link: 'dreams-theme',
		image: 'https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/a58ab27b92b27a46793582dd84a3484f/screenshot/99ea1a40-aa39-448b-b995-40fbba8bf136.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: 'project_content.dreams-theme.description',
		images: ['https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/a58ab27b92b27a46793582dd84a3484f/screenshot/99ea1a40-aa39-448b-b995-40fbba8bf136.png'],
		badge: 'Work In Progress [WIP]',
		url: "https://oddo-themes.mahardikakdenie.my.id/",
        role: 'UI/UX Developer',
        year: '2024',
        features: [
            'project_content.dreams-theme.features.0',
            'project_content.dreams-theme.features.1',
            'project_content.dreams-theme.features.2',
            'project_content.dreams-theme.features.3'
        ],
        challenges: 'project_content.dreams-theme.challenges'
	},
	{
		name: 'Template - Dashboard Theme',
		link: 'dashboard-admin-theme',
		image: 'https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/890f14769162dacdb44537794706b300/screenshot/7a4c494b-0f51-4139-933f-3b57adec20fc.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: 'project_content.dashboard-admin-theme.description',
		images: ['https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/890f14769162dacdb44537794706b300/screenshot/7a4c494b-0f51-4139-933f-3b57adec20fc.png'],
		badge: 'Work In Progress [WIP]',
		url: "https://dashboard.ensiklotari.id/",
        role: 'Fullstack Developer',
        year: '2023',
        features: [
            'project_content.dashboard-admin-theme.features.0',
            'project_content.dashboard-admin-theme.features.1',
            'project_content.dashboard-admin-theme.features.2',
            'project_content.dashboard-admin-theme.features.3'
        ],
        challenges: 'project_content.dashboard-admin-theme.challenges'
	},
	{
		name: 'Customer Portal App',
		link: 'customer-portal-app',
		image: '/customer-portal-app.png',
		type: 'Mobile App',
		tools: [
			'Flutter',
			'Bloc Cubit',
			'Material UI',
			'Typescript',
			'Nestjs',
			'Microservice API',
		],
		description: 'project_content.customer-portal-app.description',
		images: ['/customer-portal-app.png'],
        role: 'Mobile Developer',
        year: '2023',
        features: [
            'project_content.customer-portal-app.features.0',
            'project_content.customer-portal-app.features.1',
            'project_content.customer-portal-app.features.2',
            'project_content.customer-portal-app.features.3'
        ],
        challenges: 'project_content.customer-portal-app.challenges'
	},
	{
		name: 'API Service - IMGDBB',
		link: 'api-service-imgbb',
		image: '/imgbb-api.png',
		type: 'SERVICE API',
		tools: ['IMGBB API SERVICE', 'NodeExpress', 'Typescript'],
		url: 'https://github.com/mahardikakdenie/cloud-api-imgbb',
		description: 'project_content.api-service-imgbb.description',
		images: ['/imgbb-api.png'],
        role: 'Backend Engineer',
        year: '2024',
        features: [
            'project_content.api-service-imgbb.features.0',
            'project_content.api-service-imgbb.features.1',
            'project_content.api-service-imgbb.features.2',
            'project_content.api-service-imgbb.features.3'
        ],
        challenges: 'project_content.api-service-imgbb.challenges'
	},
	{
		name: 'Floucloud Id',
		link: 'floucloud',
		image: '/floucloud.jpg',
		type: 'Web App',
		tools: [
			'Vue3',
			'Nuxt3',
			'SEO',
			'Pinia',
			'TailwindCss',
			'.Net Core',
			'PostgreeSQL',
		],
		description: 'project_content.floucloud.description',
		images: ['/floucloud.jpg'],
        role: 'Lead Developer',
        year: '2023',
        features: [
            'project_content.floucloud.features.0',
            'project_content.floucloud.features.1',
            'project_content.floucloud.features.2',
            'project_content.floucloud.features.3'
        ],
        challenges: 'project_content.floucloud.challenges'
	},
	{
		name: 'Ticketing Portal Automation',
		link: 'ticketing-portal-automation',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
		type: 'Automation',
		tools: ['GitHub Apps', 'Webhooks', 'Node.js', 'Typescript'],
		description: 'project_content.ticketing-portal-automation.description',
		images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'],
        role: 'DevOps & Automation Engineer',
        year: '2024',
        features: [
            'project_content.ticketing-portal-automation.features.0',
            'project_content.ticketing-portal-automation.features.1',
            'project_content.ticketing-portal-automation.features.2',
            'project_content.ticketing-portal-automation.features.3'
        ],
        challenges: 'project_content.ticketing-portal-automation.challenges',
        documentationLink: '/documentation/automating-ticketing-with-github-apps'
	},
	{
		name: 'VueButton – Build with Vue 3',
		link: 'vue-button',
		image: '/lib-btn.png',
		type: 'Package Vue UI',
		description: 'project_content.vue-button.description',
		tools: ['Vue3', 'npm', 'Vite'],
		images: ['/lib-btn.png'],
		badge: 'Personal Package',
		url: 'https://www.npmjs.com/package/mahardikakdenie-vue-button',
        role: 'Open Source Creator',
        year: '2024',
        features: [
            'project_content.vue-button.features.0',
            'project_content.vue-button.features.1',
            'project_content.vue-button.features.2',
            'project_content.vue-button.features.3'
        ],
        challenges: 'project_content.vue-button.challenges',
        documentationLink: '/documentation/button-component'
	},
	{
		name: 'Zoom OAuth Integration (PoC)',
		link: 'zoom-oauth-integration',
		image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop',
		type: 'Integration',
		tools: ['Vue2', 'OAuth 2.0', 'Ngrok', 'Axios', 'Node.js'],
		description: 'project_content.zoom-oauth-integration.description',
		images: [
            'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop'
        ],
		url: 'https://github.com/mahardikakdenie/VUEJS_NGROK_ZOOM_Outh',
        role: 'Security & Integration Engineer',
        year: '2024',
        features: [
            'project_content.zoom-oauth-integration.features.0',
            'project_content.zoom-oauth-integration.features.1',
            'project_content.zoom-oauth-integration.features.2',
            'project_content.zoom-oauth-integration.features.3',
            'project_content.zoom-oauth-integration.features.4'
        ],
        challenges: 'project_content.zoom-oauth-integration.challenges',
        documentationLink: '/documentation/zoom-oauth-integration'
	},
    {
		name: 'Ensiklotari',
		link: 'ensiklotari',
		image: '/ensiklotari.png',
		description: 'project_content.ensiklotari.description',
		images: ['/ensiklotari.png', '/bujanggamanik.png'],
		type: 'Web App',
		tools: ['Vue3', 'Laravel', 'Mysql', 'Pinia', 'TailwindCss'],
        role: 'Fullstack Developer',
        year: '2022',
        features: [
            'project_content.ensiklotari.features.0',
            'project_content.ensiklotari.features.1',
            'project_content.ensiklotari.features.2',
            'project_content.ensiklotari.features.3'
        ],
        challenges: 'project_content.ensiklotari.challenges'
	},
    {
		name: 'CMS HAYS GALLERY',
		link: 'cms-hays-gallery',
		image: '/cms-hays-login.png',
		description: 'project_content.cms-hays-gallery.description',
		images: ['/cms-hays-login.png'],
		type: 'Web App',
		tools: ['React', 'Next.js', 'Tailwind CSS'],
        role: 'Frontend Developer',
        year: '2023',
        features: [
            'project_content.cms-hays-gallery.features.0',
            'project_content.cms-hays-gallery.features.1'
        ],
        challenges: 'project_content.cms-hays-gallery.challenges'
	},
    {
		name: 'Maida Clinic Landing Page',
		link: 'maida-clinic',
		image: '/maida-clinik-1.png',
		description: 'project_content.maida-clinic.description',
		images: ['/maida-clinik-1.png'],
		type: 'Landing Page',
		tools: ['Nuxt 3', 'Vue 3', 'SEO'],
        role: 'Frontend Developer',
        year: '2023',
        features: [
            'project_content.maida-clinic.features.0',
            'project_content.maida-clinic.features.1'
        ],
        challenges: 'project_content.maida-clinic.challenges'
	},
    {
		name: 'PM TRICK – LMS Web App',
		link: 'pm-tricks-lms',
		image: '/pm-trick.png',
		description: 'project_content.pm-tricks-lms.description',
		images: ['/pm-trick.png'],
		type: 'Web App',
		tools: ['Vue 3', 'Tailwind', 'Typescript'],
        role: 'Fullstack Developer',
        year: '2023',
        features: [
            'project_content.pm-tricks-lms.features.0',
            'project_content.pm-tricks-lms.features.1'
        ],
        challenges: 'project_content.pm-tricks-lms.challenges'
	},
    {
		name: 'Store Vue - Ecommerce',
		link: 'store-vue-catalog',
		image: '/store-slicing.png',
		description: 'project_content.store-vue-catalog.description',
		images: ['/store-slicing.png'],
		type: 'Web App',
		tools: ['Nuxt.js', 'Vue', 'Tailwind CSS'],
        role: 'Frontend Developer',
        year: '2023',
        features: [
            'project_content.store-vue-catalog.features.0',
            'project_content.store-vue-catalog.features.1'
        ],
        challenges: 'project_content.store-vue-catalog.challenges'
	},
    {
		name: 'Dikti Application Profile',
		link: 'dikti-company',
		image: '/dikti.png',
		description: 'project_content.dikti-company.description',
		images: ['/dikti.png'],
		type: 'Web App',
		tools: ['Web', 'CSS'],
        role: 'Frontend Developer',
        year: '2022',
        features: [
            'project_content.dikti-company.features.0'
        ],
        challenges: 'project_content.dikti-company.challenges'
	},
    {
		name: 'Uniqlo Theme Slicing',
		link: 'uniqlo-slicing',
		image: '/uniqlo-theme.png',
		description: 'project_content.uniqlo-slicing.description',
		images: ['/uniqlo-theme.png'],
		type: 'Slicing UI',
		tools: ['HTML', 'CSS', 'Slicing'],
        role: 'UI Developer',
        year: '2022',
        features: [
            'project_content.uniqlo-slicing.features.0'
        ],
        challenges: 'project_content.uniqlo-slicing.challenges'
	},
    {
		name: 'Next Movie App',
		link: 'next-movie-app',
		image: '/next-movie.png',
		description: 'project_content.next-movie-app.description',
		images: ['/next-movie.png'],
		type: 'Web App',
		tools: ['Next.js', 'React', 'TMDB API'],
        role: 'Frontend Developer',
        year: '2022',
        features: [
            'project_content.next-movie-app.features.0',
            'project_content.next-movie-app.features.1'
        ],
        challenges: 'project_content.next-movie-app.challenges'
	},
    {
		name: 'BujanggaManik Appointment',
		link: 'bujangga-manik-app',
		image: '/bujanggamanik.png',
		description: 'project_content.bujangga-manik-app.description',
		images: ['/bujanggamanik.png'],
		type: 'Web App',
		tools: ['Web', 'PHP'],
        role: 'Fullstack Developer',
        year: '2022',
        features: [
            'project_content.bujangga-manik-app.features.0',
            'project_content.bujangga-manik-app.features.1'
        ],
        challenges: 'project_content.bujangga-manik-app.challenges'
	},
    {
		name: 'Smile Learning Center LMS',
		link: 'slc-lms',
		image: '/lms.png',
		description: 'project_content.slc-lms.description',
		images: ['/lms.png'],
		type: 'Web App',
		tools: ['Web', 'PHP', 'MySQL'],
        role: 'Fullstack Developer',
        year: '2022',
        features: [
            'project_content.slc-lms.features.0'
        ],
        challenges: 'project_content.slc-lms.challenges'
	},
    {
		name: 'Tic Tac Toe - Interactive',
		link: 'tic-tac-toe',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png',
		description: 'project_content.tic-tac-toe.description',
		images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png'],
		type: 'Game',
		tools: ['React', 'JavaScript'],
        role: 'Frontend Developer',
        year: '2022',
        features: [
            'project_content.tic-tac-toe.features.0'
        ],
        challenges: 'project_content.tic-tac-toe.challenges'
	},
    {
		name: 'RESTful Book Library API',
		link: 'book-library-api',
		image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop',
		description: 'project_content.book-library-api.description',
		images: ['https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop'],
		type: 'Backend API',
		tools: ['Golang', 'PostgreSQL'],
        role: 'Backend Engineer',
        year: '2023',
        features: [
            'project_content.book-library-api.features.0'
        ],
        challenges: 'project_content.book-library-api.challenges'
	},
];

export const skillDatas: Array<ISkillDatas> = [
	{
		title: 'ReactJS',
		key: 'react',
		current_thumb: '/react.png',
		thumb: '/react.png',
		thumb_active: '/react.png',
		image: '/react.png',
		description: 'skills_content.react',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [
			{
				title: 'Attendance & Payroll SaaS',
				image: '/web-absen.png',
				description: 'skills_content.shared_project_desc.attendance_saas',
				cta: {
					githubLink: '',
					previewLink: 'https://landing-page-attendance.mahardikakdenie.my.id/',
				},
			},
			{
				title: 'Drag & Drop Web Builder',
				image: 'https://jam.dev/cdn-cgi/image/width=2560,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/e5ed9efb9cb1aa4507117938f41e78f8/screenshot/748f726e-f672-46b9-b36c-94cd8e733593.png',
				description: 'skills_content.shared_project_desc.web_builder',
				cta: {
					githubLink: 'https://github.com/mahardikakdenie/WebBuilder',
					previewLink: 'https://web-builder.mahardikakdenie.my.id/',
				},
			},
			{
				title: 'NextJS Movie Project',
				image: 'http://localhost:3000/next-movie.png',
				description: 'skills_content.shared_project_desc.nextjs_movie',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Tic Tac Toe',
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png',
				description: 'skills_content.shared_project_desc.tic_tac_toe',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
		],
	},
	{
		title: 'Vuejs',
		key: 'vue',
		thumb: 'vue.png',
		image: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/119058023_1791394821036070_6678793766601996160_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=25d718&_nc_eui2=AeHIc-ijQN-hOSZtgGZoi63eRvwwu1TPEhhG_DC7VM8SGGY6M2PsTnxEDdeaqectOP17zt3xRRd4t07efYBbICgf&_nc_ohc=f0kXO3aRSA4Q7kNvgFbWC1E&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=AZ94VW9pWom6RHF__7-lvEU&oh=00_AYB9rUwwp18GnmklKzv1Z7mXNL9U4wiHGJ7fCz0n5AdvRA&oe=673E8B82',
		description: 'skills_content.vue',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [
			{
				title: 'Ensiklotari',
				image: '/ensiklotari.png',
				description: 'skills_content.shared_project_desc.ensiklotari',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Bujangga Manik App Appoitment',
				image: '/bujanggamanik.png',
				description: 'skills_content.shared_project_desc.bujanggamanik',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Web Absen - DPUTR INTERNAL',
				image: '/web-absen.png',
				description: 'skills_content.shared_project_desc.web_absen',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Theme UI STORE VUE',
				image: 'https://i.ibb.co/cQv7kP7/Mahardika-Store.jpg',
				description: 'skills_content.shared_project_desc.store_vue',
				cta: {
					githubLink:
						'https://github.com/mahardikakdenie/nuxt-catalog',
					previewLink: 'https://nuxt-catalog.mahardikakdenie.my.id',
				},
			},
			{
				title: 'PM Tricks Dashboard',
				image: 'https://i.ibb.co/PsyMmbH/PM-Tricks.jpg',
				description: 'skills_content.shared_project_desc.pm_tricks',
				cta: {
					githubLink:
						'https://github.com/mahardikakdenie/nuxt-catalog',
					previewLink: 'https://nuxt-catalog.mahardikakdenie.my.id',
				},
			},
		],
	},
	{
		title: 'Nodejs',
		key: 'nodejs',
		thumb: 'node.png',
		image: 'https://weebpal.com/sites/default/files/media-image/2020-06/nodejs-1.svg',
		description: 'skills_content.node',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [
			{
				title: 'Ensiklotari',
				image: '/ensiklotari.png',
				description: 'skills_content.shared_project_desc.ensiklotari',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Bujangga Manik App Appoitment',
				image: '/bujanggamanik.png',
				description: 'skills_content.shared_project_desc.bujanggamanik',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
		],
	},
	{
		title: 'Expressjs',
		key: 'expressjs',
		thumb: 'express.png',
		image: 'https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg',
		description: 'skills_content.express',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [
			{
				title: 'Ensiklotari',
				image: '/ensiklotari.png',
				description: 'skills_content.shared_project_desc.ensiklotari',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
			{
				title: 'Bujangga Manik App Appoitment',
				image: '/bujanggamanik.png',
				description: 'skills_content.shared_project_desc.bujanggamanik',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
		],
	},
	{
		title: 'Golang',
		key: 'go-lang',
		thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE816VbDNBBKzwptMA1ZGW_SIYY03Bbw_kA&s',
		image: 'https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62217e885f52b860da9f00cc_Apa%20Itu%20Golang%3F%20Apa%20Saja%20Fungsi%20Dan%20Keunggulannya%20-%20Binar%20Academy.jpeg',
		description: 'skills_content.golang',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [
			{
				title: 'Attendance & Payroll SaaS',
				image: '/web-absen.png',
				description: 'skills_content.shared_project_desc.attendance_saas',
				cta: {
					githubLink: '',
					previewLink: 'https://landing-page-attendance.mahardikakdenie.my.id/',
				},
			},
			{
				title: 'Book Library API',
				image: '',
				description: 'skills_content.shared_project_desc.book_api',
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
		],
	},
	{
		title: 'HTML5',
		key: 'html5',
		thumb: 'html.png',
		image: 'https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/HTML55.png',
		description: 'skills_content.html5',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'Tailwind CSS',
		key: 'tailwind-css',
		thumb: 'tailwindcss.png',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0Eu0y1ONkIG7uPJeGGqq8uqeIOqp8IJOrg&s',
		description: 'skills_content.tailwind',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'Bootstrap',
		key: 'bootstrap',
		thumb: 'boostrap.png',
		image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-200522-Bootstrap.png',
		description: 'skills_content.bootstrap',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'SASS',
		key: 'sass',
		thumb: 'saas.png',
		image: 'https://css-irl.info/a-modern-front-end-workflow-03_01.png',
		description: 'skills_content.sass',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'CSS3',
		key: 'css3',
		thumb: 'css3.png',
		image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-202042-Css3.png',
		description: 'skills_content.css3',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'JavaScript',
		key: 'javascript',
		thumb: 'javascript.png',
		image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230329-221857-JavaScript.png',
		description: 'skills_content.js',
		experienceSkill: 'Expert',
		yearExperience: '6+',
		projectRelated: [],
	},
	{
		title: 'TypeScript',
		key: 'typescript',
		thumb: 'typescript.png',
		image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-194450-TypeScript.png',
		description: 'skills_content.ts',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'PHP',
		key: 'php',
		thumb: 'php.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-202703-Php.png',
		description: 'skills_content.php',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'CodeIgniter',
		key: 'codeIgniter',
		thumb: 'ci.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203051-CodeIgniter.png',
		description: 'skills_content.ci',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'Laravel',
		key: 'laravel',
		thumb: 'laravel.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203233-Laravel.png',
		description: 'skills_content.laravel',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'Mysql',
		key: 'mysql',
		thumb: 'mysql.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204749-MySql.png',
		description: 'skills_content.mysql',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'Vercell',
		key: 'vercell',
		thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBqE3tRJO64QQSZUUu6OXKbFZtP4VQHOaYg&s',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBqE3tRJO64QQSZUUu6OXKbFZtP4VQHOaYg&s',
		description: 'skills_content.vercel',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'PostgreSql',
		key: 'pgsql',
		thumb: 'pgsql.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204931-PostgreSql.png',
		description: 'skills_content.pgsql',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
	{
		title: 'MongooDB',
		key: 'mongoodb',
		thumb: 'mongoo.png',
		image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204441-MongoDb.png',
		description: 'skills_content.mongodb',
		experienceSkill: 'Expert',
		yearExperience: '5+',
		projectRelated: [],
	},
];
