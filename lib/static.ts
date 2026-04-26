import type { IProjects, ISkillDatas } from './staticInterface';

export const projects: Array<IProjects> = [
	{
		name: 'Point Of Sales (Laukita Theme)',
		link: 'laukita-theme',
		image: '/laukita.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: `A sophisticated POS solution featuring a high-fidelity dashboard as showcased in the preview. This project highlights a clean, data-driven UI with elegant visualization cards and a streamlined sidebar, engineered to transform complex transaction data into a seamless user experience. Developed using Nuxt 3 to ensure lightning-fast performance and top-tier SEO for retail environments.`,
		images: ['/laukita.png', '/dashboard-laukita.png'],
		url: 'https://laukita.mahardikakdenie.my.id',
        role: 'Lead Frontend Engineer',
        year: '2024',
        features: [
            'Real-time Inventory Tracking System',
            'Multi-payment Gateway Integration',
            'Advanced Sales Analytics Dashboard',
            'Responsive Thermal Printer Optimization',
            'High-performance Local Storage Caching'
        ],
        challenges: 'Membangun sistem inventaris yang tetap responsif meskipun menangani ribuan SKU memerlukan optimasi state management yang sangat ketat menggunakan Pinia dan teknik virtual scrolling.'
	},
	{
		name: 'Point Of Sales (Dreams Theme)',
		link: 'dreams-theme',
		image: 'https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/a58ab27b92b27a46793582dd84a3484f/screenshot/99ea1a40-aa39-448b-b995-40fbba8bf136.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: `An aesthetically-driven POS theme that prioritizes visual clarity and modern interaction patterns. The interface utilizes a balanced color palette and spacious layout to minimize cognitive load, making it the perfect digital storefront for premium retail experiences.`,
		images: ['https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/a58ab27b92b27a46793582dd84a3484f/screenshot/99ea1a40-aa39-448b-b995-40fbba8bf136.png'],
		badge: 'Work In Progress [WIP]',
		url: "https://oddo-themes.mahardikakdenie.my.id/",
        role: 'UI/UX Developer',
        year: '2024',
        features: [
            'Dynamic Component Layout Engine',
            'Specialized Retail Widgets',
            'Ultra-low Latency Transaction Flow',
            'Seamless Dark/Light Mode Transition'
        ],
        challenges: 'Menyeimbangkan animasi tingkat tinggi dengan batasan hardware pada tablet POS kelas menengah memerlukan optimasi CSS GPU acceleration.'
	},
	{
		name: 'Template - Dashboard Theme',
		link: 'dashboard-admin-theme',
		image: 'https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/890f14769162dacdb44537794706b300/screenshot/7a4c494b-0f51-4139-933f-3b57adec20fc.png',
		type: 'Web App',
		tools: ['Vue3', 'Nuxt3', 'SEO', 'Pinia', 'TailwindCss', 'MockAPI'],
		description: `A comprehensive administrative powerhouse designed for high-level data oversight. The dashboard integrates complex analytical charts and status indicators into a cohesive, responsive layout, demonstrating expert-level proficiency in managing intricate state and dynamic UI components.`,
		images: ['https://jam.dev/cdn-cgi/image/width=1600,quality=100,dpr=1/https://cdn-jam-screenshots.jam.dev/890f14769162dacdb44537794706b300/screenshot/7a4c494b-0f51-4139-933f-3b57adec20fc.png'],
		badge: 'Work In Progress [WIP]',
		url: "https://dashboard.ensiklotari.id/",
        role: 'Fullstack Developer',
        year: '2023',
        features: [
            'Role-Based Access Control (RBAC)',
            'Dynamic Real-time Data Streaming',
            'Modular Analytics Widget System',
            'Exportable Data Tables (CSV/PDF)'
        ],
        challenges: 'Mengelola state data multi-tenant yang kompleks sambil menjaga performa render pada tabel dengan ribuan baris data.'
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
		description: `A mobile-first insurance portal that bridges the gap between complex policy management and user-friendly mobile interfaces. Featuring a crisp Material UI design, this app simplifies the insurance journey with intuitive navigation and real-time data synchronization.`,
		images: ['/customer-portal-app.png'],
        role: 'Mobile Developer',
        year: '2023',
        features: [
            'Digital Claim Submission Pipeline',
            'Policy Document Vault with Biometrics',
            'Real-time Support Chat Integration',
            'Automated Renewal Reminders'
        ],
        challenges: 'Sinkronisasi data offline di Flutter untuk memastikan user tetap bisa mengakses detail polis meskipun dalam kondisi sinyal lemah.'
	},
	{
		name: 'API Service - IMGDBB',
		link: 'api-service-imgbb',
		image: '/imgbb-api.png',
		type: 'SERVICE API',
		tools: ['IMGBB API SERVICE', 'NodeExpress', 'Typescript'],
		url: 'https://github.com/mahardikakdenie/cloud-api-imgbb',
		description: `A developer-centric cloud storage solution that streamlines image management. This TypeScript-based API service provides a robust bridge to IMGBB storage, focusing on type safety, modular architecture, and high-performance throughput.`,
		images: ['/imgbb-api.png'],
        role: 'Backend Engineer',
        year: '2024',
        features: [
            'Secure JWT Authentication',
            'Automated Image Compression Pipeline',
            'Modular Provider Architecture',
            'Global Error Handling & Logging'
        ],
        challenges: 'Menangani rate limiting dari API pihak ketiga dengan mengimplementasikan queue system yang cerdas agar tidak ada data yang hilang.'
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
		description: `An innovative cloud services platform where I architected the core Content Management System. This project showcases the power of dynamic content delivery, allowing for real-time updates through a custom-built admin dashboard.`,
		images: ['/floucloud.jpg'],
        role: 'Lead Developer',
        year: '2023',
        features: [
            'Headless CMS Architecture',
            'Dynamic Content Versioning',
            'Multi-language Support Engine',
            'Integrated SEO Metadata Manager'
        ],
        challenges: 'Integrasi antara frontend Nuxt 3 dengan backend .Net Core yang memerlukan standarisasi format API yang sangat ketat.'
	},
	{
		name: 'Ticketing Portal Automation',
		link: 'ticketing-portal-automation',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
		type: 'Automation',
		tools: ['GitHub Apps', 'Webhooks', 'Node.js', 'Typescript'],
		description: `Sistem otomatisasi yang menghubungkan alur kerja developer di GitHub dengan sistem manajemen tiket internal. Sistem ini secara cerdas mendeteksi aktivitas repository dan melakukan sinkronisasi status tiket secara real-time.`,
		images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'],
        role: 'DevOps & Automation Engineer',
        year: '2024',
        features: [
            'Smart Ticket Mapping (Anti-Salah Kamar)',
            'Automated PR Status Syncing',
            'Real-time Activity Mirroring',
            'Webhook Signature Validation Security'
        ],
        challenges: 'Membangun logika deteksi sub-task yang akurat berdasarkan aktivitas branch developer tanpa mengganggu workflow utama mereka.',
        documentationLink: '/documentation/automating-ticketing-with-github-apps'
	},
	{
		name: 'VueButton – Build with Vue 3',
		link: 'vue-button',
		image: '/lib-btn.png',
		type: 'Package Vue UI',
		description: `A lightweight, developer-focused UI library that simplifies design system implementation. Focused on creating a customizable and accessible Button component for high-scale applications.`,
		tools: ['Vue3', 'npm', 'Vite'],
		images: ['/lib-btn.png'],
		badge: 'Personal Package',
		url: 'https://www.npmjs.com/package/mahardikakdenie-vue-button',
        role: 'Open Source Creator',
        year: '2024',
        features: [
            'Zero Dependency Architecture',
            'Full TypeScript Definition Support',
            'ARIA-compliant Accessibility',
            'Extremely Small Bundle Size (< 2KB)'
        ],
        challenges: 'Memastikan library tetap fleksibel untuk berbagai tema desain namun memiliki footprint yang sekecil mungkin.',
        documentationLink: '/documentation/button-component'
	},
	{
		name: 'Zoom OAuth Integration (PoC)',
		link: 'zoom-oauth-integration',
		image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop',
		type: 'Integration',
		tools: ['Vue2', 'OAuth 2.0', 'Ngrok', 'Axios', 'Node.js'],
		description: `Sebuah maha karya integrasi sistem yang menjembatani ekosistem Vue.js dengan Zoom API melalui protokol keamanan tingkat tinggi. Proyek ini bukan sekadar koneksi API biasa, melainkan implementasi penuh dari flow Authorization Code Grant yang dirancang untuk skalabilitas dan keamanan data pengguna.`,
		images: [
            'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop'
        ],
		url: 'https://github.com/mahardikakdenie/VUEJS_NGROK_ZOOM_Outh',
        role: 'Security & Integration Engineer',
        year: '2024',
        features: [
            'High-Security OAuth 2.0 Handshake Implementation',
            'Automated Token Refresh & Lifecycle Management',
            'Dynamic Environment Orchestration (Dev vs Prod)',
            'Base64 Header Optimization for Enterprise APIs',
            'Seamless Ngrok Tunneling for Local Webhooks'
        ],
        challenges: 'Tantangan terbesar adalah menjinakkan strict security policy dari Zoom yang memerlukan encoding Basic Auth yang sangat presisi. Saya memecahkannya dengan mengarsitekturkan middleware transparan yang menangani enkripsi secara otomatis.',
        documentationLink: '/documentation/zoom-oauth-integration'
	},
    {
		name: 'Ensiklotari',
		link: 'ensiklotari',
		image: '/ensiklotari.png',
		description:
			'A digital bridge for cultural preservation, connecting traditional dance artists with a global audience. The platform features an immersive, visually-rich experience designed to celebrate Indonesian heritage.',
		images: ['/ensiklotari.png', '/bujanggamanik.png'],
		type: 'Web App',
		tools: ['Vue3', 'Laravel', 'Mysql', 'Pinia', 'TailwindCss'],
        role: 'Fullstack Developer',
        year: '2022',
        features: [
            'Immersive Cultural Content Delivery',
            'Interactive Artist Directory',
            'Educational Dance Learning Portal',
            'Integrated Booking System'
        ],
        challenges: 'Menyajikan konten multimedia yang berat (video tari) dengan tetap menjaga kecepatan loading halaman.'
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
		description: `Expert-level proficiency in building scalable React applications using modern patterns like Hooks, Context API, and Server-Side Rendering. Focused on creating highly interactive and performant user interfaces with clean code principles.`,
		experienceSkill: 'Intermediate',
		yearExperience: '1+',
		projectRelated: [
			{
				title: 'NextJS Movie Project',
				image: 'http://localhost:3000/next-movie.png',
				description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
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
		description: `Deep expertise in the Vue.js ecosystem, including Nuxt 3, Pinia, and Vue Router. Skilled in architecting high-performance web applications with a focus on SEO, reactivity, and modular component design.`,
		experienceSkill: 'Expert',
		yearExperience: '4+',
		projectRelated: [
			{
				title: 'Ensiklotari',
				image: '/ensiklotari.png',
				description: `A cultural platform built with Vue 3 and Laravel, focusing on performance and scalability.`,
				cta: {
					githubLink: '',
					previewLink: '',
				},
			},
		],
	},
];
