import type { IProjects, ISkillDatas } from "./staticInterface";

export const projects: Array<IProjects> = [
    {
        name: "Floucloud Id",
        link: 'floucloud',
        image: '/floucloud.jpg',
        type: 'Web App',
        tools: [
            'Vue3',
            'Nuxt3',
            'SEO',
            'Pinia',
            'TailwindCss',
        ],
        description: `Actively contributed to the development of this project by designing and implementing the admin content management system (CMS). This allowed non-technical users to easily create, update, and manage content through the admin dashboard. As a result, the frontend or landing page was able to display dynamic and up-to-date content based on the administrator's input, improving overall flexibility, user experience, and maintainability of the website`,
        images: [],
    },
    {
        name: "Vue Page Builder",
        link: 'vue-page-builder',
        image: '/web-builder.png',
        type: 'Web App',
        tools: [
            'Vue3',
            'Pinia',
            'TailwindCss',
        ],
        description: `A Web Builder built using Vue.js provides an intuitive and dynamic platform for creating websites without requiring users to write code manually. Leveraging Vue’s reactive data binding and component-based architecture, this web builder allows users to drag-and-drop UI elements, configure content, and customize styles in real time.

The application offers a seamless user experience with fast rendering and efficient updates, thanks to Vue’s virtual DOM. It also supports reusable components, live preview features, and the ability to export clean, production-ready HTML/CSS/JS code.

Whether for portfolios, landing pages, or small business sites, this Vue-powered web builder ensures flexibility, scalability, and a modern user interface that empowers both beginners and professionals to design beautiful websites effortlessly.`,
        images: [],
    },
    {
        name: 'Ensiklotari',
        link: 'ensiklotari',
        image: '/ensiklotari.png',
        description: 'Ensiklotari ini merupakan aplikasi yang bertujuan untuk menjembatani para seniman tari dan pembelajar tari dalam mengenal dan mempelajari tari tradisional Indonesia khususnya, dan tari internasional pada umumnya.',
        images: ['/ensiklotari.png', '/bujanggamanik.png'],
        type: 'Web App',
        tools: [
            'Vue3',
            'Laravel',
            'Mysql',
            'Pinia',
            'TailwindCss',
        ],
    },
    {
        name: 'BujanggaManik Appointment App',
        link: 'bujangga-manik',
        image: '/bujanggamanik.png',
        description: 'Bujangga Manik adalah aplikasi berbasis website yang dirancang khusus untuk mempermudah proses temu janji serta memperkenalkan profil perusahaan dalam sektor jasa konstruksi bangunan dan gedung. Dengan fitur-fitur yang intuitif dan user-friendly, aplikasi ini memungkinkan pengguna untuk menjadwalkan pertemuan dengan para profesional konstruksi, mengeksplorasi berbagai layanan yang ditawarkan, serta mendapatkan informasi mendetail mengenai pengalaman dan keahlian perusahaan. Bujangga Manik bertujuan untuk meningkatkan efisiensi komunikasi antara klien dan penyedia jasa, sekaligus memberikan transparansi dan kemudahan akses kepada semua pihak yang terlibat dalam proyek konstruksi.',
        type: 'Web App',
        images: [],
        tools: [
            'Vue3',
            'Laravel',
            'Mysql',
            'Pinia',
            'TailwindCss',
        ],
    },
    {
        name: 'Next Movie',
        link: 'next-movie',
        image: '/next-movie.png',
        description: 'List Movie And Ratting, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to browse movie listings and view detailed ratings and reviews.',
        type: 'Web App',
        tools: [
            'Nextjs13',
            'Laravel',
            'Typescript',
        ],
        images: []
    },
    {
        name: 'Library Vue Button',
        link: 'vue-button',
        image: '/lib-btn.png',
        type: 'Package Vue UI',
        description: 'Library Vue in Node Package Manager',
        tools: [
            'Vue3',
            'npm',
        ],
        images: []
    },
    {
        name: 'Uniqlo Theme',
        type: 'mobile',
        link: 'uniqlo-theme',
        image: '/uniqlo-theme.png',
        description: 'Slicing Uniqlo Theme',
        images: []
    },
    {
        name: 'Learning Management System Smile Learning Center',
        link: 'slc',
        image: '/lms.png',
        description: 'Learning Management System',
        images: []
    },
    {
        name: 'Store Vue',
        link: 'store-vue',
        image: '/store-slicing.png',
        description: 'this website is a ecoomerce website built with nuxtjs',
        images: []
    },
    {
        name: 'Dikti Appplication',
        link: 'dikti-app',
        image: '/dikti.png',
        description: 'this is a Dikti web company profile',
        images: []
    },
    {
        name: 'PM TRICKS DASHBOARD',
        link: 'pm-trics',
        image: '/pm-trick.png',
        description: 'PM TRICK is a web application E-LEARNING',
        images: []
    },
    {
        name: 'Web Absen - DPUTR INTERNAL',
        link: 'dputrinternal-absen',
        image: '/web-absen.png',
        description: 'WEBSITE Human Resource System Application for Dinas Pekerjaan Umum dan Penataan Ruang',
        images: []
    }
];

export const skillDatas: Array<ISkillDatas> = [
    {
        title: 'ReactJS',
        key: 'react',
        current_thumb: '/react.png',
        thumb: '/react.png',
        thumb_active: '/react.png',
        image: '/react.png',
        description: `This section describes the details of your ReactJS skill. It provides information about the technologies you have mastered, your experience, and any notable projects where you have applied these skills.`,
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
                }
            },  
            {
                title: 'Tic Tac Toe',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/400px-Tic_tac_toe.svg.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
        ],
    },
    {
        title: 'Vuejs',
        key: 'vue',
        thumb: 'vue.png',
        image: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/119058023_1791394821036070_6678793766601996160_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=25d718&_nc_eui2=AeHIc-ijQN-hOSZtgGZoi63eRvwwu1TPEhhG_DC7VM8SGGY6M2PsTnxEDdeaqectOP17zt3xRRd4t07efYBbICgf&_nc_ohc=f0kXO3aRSA4Q7kNvgFbWC1E&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=AZ94VW9pWom6RHF__7-lvEU&oh=00_AYB9rUwwp18GnmklKzv1Z7mXNL9U4wiHGJ7fCz0n5AdvRA&oe=673E8B82',
        description: `This section describes the details of your ReactJS skill. It provides information about the technologies you have mastered, your experience, and any notable projects where you have applied these skills.`,
        experienceSkill: 'Expert',
        yearExperience: '4+',
        projectRelated: [
            {
                title: 'Ensiklotari',
                image: '/ensiklotari.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
            {
                title: 'Bujangga Manik App Appoitment',
                image: '/bujanggamanik.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },
            {
                title: 'Web Absen - DPUTR INTERNAL',
                image: '/web-absen.png',
                description: 'WEBSITE Human Resource System Application for Dinas Pekerjaan Umum dan Penataan Ruang',
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },
            {
                title: 'Theme UI STORE VUE',
                image: 'https://i.ibb.co/cQv7kP7/Mahardika-Store.jpg',
                description: 'loremmmmmmmmm',
                cta: {
                    githubLink: 'https://github.com/mahardikakdenie/nuxt-catalog',
                    previewLink: 'https://nuxt-catalog.mahardikakdenie.my.id',
                }
            },
            {
                title: 'PM Tricks Dashboard',
                image: 'https://i.ibb.co/PsyMmbH/PM-Tricks.jpg',
                description: 'loremmmmmmmmm',
                cta: {
                    githubLink: 'https://github.com/mahardikakdenie/nuxt-catalog',
                    previewLink: 'https://nuxt-catalog.mahardikakdenie.my.id',
                }
            },
        ],
    },
    {
        title: 'Nodejs',
        key: 'nodejs',
        thumb: 'node.png',
        image: 'https://weebpal.com/sites/default/files/media-image/2020-06/nodejs-1.svg',
        description: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting`,
        experienceSkill: 'Intermediate',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'Ensiklotari',
                image: '/ensiklotari.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
            {
                title: 'Bujangga Manik App Appoitment',
                image: '/bujanggamanik.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
        ],
    },
    {
        title: 'Expressjs',
        key: 'expressjs',
        thumb: 'express.png',
        image: 'https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg',
        description: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting`,
        experienceSkill: 'Intermediate',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'Ensiklotari',
                image: '/ensiklotari.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
            {
                title: 'Bujangga Manik App Appoitment',
                image: '/bujanggamanik.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
        ],
    },
    {
        title: 'Golang',
        key: 'go-lang',
        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE816VbDNBBKzwptMA1ZGW_SIYY03Bbw_kA&s',
        image: 'https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62217e885f52b860da9f00cc_Apa%20Itu%20Golang%3F%20Apa%20Saja%20Fungsi%20Dan%20Keunggulannya%20-%20Binar%20Academy.jpeg',
        description: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting`,
        experienceSkill: 'Intermediate',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'Book Library API',
                image: '',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
            {
                title: 'Bujangga Manik App Appoitment',
                image: '/bujanggamanik.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
        ],
    },
    {
        title: 'HTML5',
        key: 'html5',
        thumb: 'html.png',
        image: 'https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/HTML55.png',
        description: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting`,
        experienceSkill: 'Intermediate',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'Ensiklotari',
                image: '/ensiklotari.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
            {
                title: 'Bujangga Manik App Appoitment',
                image: '/bujanggamanik.png',
                description: `List Movie And Rating, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to...`,
                cta: {
                    githubLink: '',
                    previewLink: '',
                }
            },  
        ],
    },
    {
        title: 'Tailwind CSS',
        key: 'tailwind-css',
        thumb: 'tailwindcss.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0Eu0y1ONkIG7uPJeGGqq8uqeIOqp8IJOrg&s',
        description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs directly in your markup.',
        experienceSkill: 'Intermediate',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'Tailwind CSS Project 1',
                image: '/tailwind-project1.png',
                description: 'A simple project using Tailwind CSS to create a responsive layout and fast design iteration.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'Tailwind CSS Project 2',
                image: '/tailwind-project2.png',
                description: 'An advanced project showcasing the flexibility and customization available with Tailwind CSS.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'Bootstrap',
        key: 'bootstrap',
        thumb: 'boostrap.png',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-200522-Bootstrap.png',
        description: 'Bootstrap is a popular CSS framework for developing responsive and mobile-first websites quickly.',
        experienceSkill: 'Expert',
        yearExperience: '4+',
        projectRelated: [
            {
                title: 'Bootstrap Project 1',
                image: '/bootstrap-project1.png',
                description: 'A responsive e-commerce site built using Bootstrap for fast and reliable design.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'Bootstrap Project 2',
                image: '/bootstrap-project2.png',
                description: 'A portfolio site leveraging Bootstrap\'s grid system and components for ease of use.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'SASS',
        key: 'sass',
        thumb: 'saas.png',
        image: 'https://css-irl.info/a-modern-front-end-workflow-03_01.png',
        description: 'Sass is a CSS preprocessor that allows you to use variables, nested rules, and functions for efficient styling.',
        experienceSkill: 'Intermediate',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'SASS Project 1',
                image: '',
                description: 'A project that uses Sass for scalable and maintainable CSS, featuring variables and mixins.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'SASS Project 2',
                image: '',
                description: 'A web app with a clean UI, utilizing Sass for optimized and organized styling.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'CSS3',
        key: 'css3',
        thumb: 'css3.png',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-202042-Css3.png',
        description: 'CSS3 is the latest evolution of the Cascading Style Sheets language and allows for more complex layouts.',
        experienceSkill: 'Advanced',
        yearExperience: '4+',
        projectRelated: [
            {
                title: 'CSS3 Project 1',
                image: '',
                description: 'A modern website showcasing CSS3 animations and transitions for enhanced user experience.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'CSS3 Project 2',
                image: '',
                description: 'A portfolio site using CSS3 grid and flexbox for responsive and accessible design.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'JavaScript',
        key: 'javascript',
        thumb: 'javascript.png',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230329-221857-JavaScript.png',
        description: 'JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.',
        experienceSkill: 'Expert',
        yearExperience: '6+',
        projectRelated: [
            {
                title: 'JavaScript Project 1',
                image: '/javascript-project1.png',
                description: 'A browser-based game utilizing JavaScript for dynamic interactions and smooth gameplay.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'JavaScript Project 2',
                image: '/javascript-project2.png',
                description: 'A web application that leverages JavaScript for client-side form validation and dynamic UI elements.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'TypeScript',
        key: 'typescript',
        thumb: 'typescript.png',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-194450-TypeScript.png',
        description: 'TypeScript is a strongly typed programming language that builds on JavaScript, adding optional static types.',
        experienceSkill: 'Advanced',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'TypeScript Project 1',
                image: '/typescript-project1.png',
                description: 'A complex web application utilizing TypeScript for enhanced code quality and type safety.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'TypeScript Project 2',
                image: '/typescript-project2.png',
                description: 'An API server implemented with TypeScript for scalable and maintainable backend code.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'PHP',
        key: 'php',
        thumb: 'php.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-202703-Php.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '4+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },    
    {
        title: 'CodeIgniter',
        key: 'codeIgniter',
        thumb: 'ci.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203051-CodeIgniter.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '2+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },  
    {
        title: 'Laravel',
        key: 'laravel',
        thumb: 'laravel.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203233-Laravel.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '4+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },  
    {
        title: 'Mysql',
        key: 'mysql',
        thumb: 'mysql.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204749-MySql.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },  
    {
        title: 'Vercell',
        key: 'vercell',
        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBqE3tRJO64QQSZUUu6OXKbFZtP4VQHOaYg&s',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBqE3tRJO64QQSZUUu6OXKbFZtP4VQHOaYg&s',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'PostgreSql',
        key: 'pgsql',
        thumb: 'pgsql.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204931-PostgreSql.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    {
        title: 'MongooDB',
        key: 'mongoodb',
        thumb: 'mongoo.png',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204441-MongoDb.png',
        description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
        experienceSkill: 'Expert',
        yearExperience: '3+',
        projectRelated: [
            {
                title: 'PHP Project 1',
                image: '/php-project1.png',
                description: 'A content management system built using PHP for a fast and dynamic website.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
            {
                title: 'PHP Project 2',
                image: '/php-project2.png',
                description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
                cta: {
                    githubLink: '',
                    previewLink: '',
                },
            },
        ],
    },
    // {
    //     title: 'Docker',
    //     key: 'docker',
    //     thumb: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211426-Docker.png',
    //     image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211426-Docker.png',
    //     description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
    //     experienceSkill: 'Expert',
    //     yearExperience: '5+',
    //     projectRelated: [
    //         {
    //             title: 'PHP Project 1',
    //             image: '/php-project1.png',
    //             description: 'A content management system built using PHP for a fast and dynamic website.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //         {
    //             title: 'PHP Project 2',
    //             image: '/php-project2.png',
    //             description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //     ],
    // },
    // {
    //     title: 'Heroku',
    //     key: 'heroku',
    //     thumb: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211605-Heroku.png',
    //     image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211605-Heroku.png',
    //     description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
    //     experienceSkill: 'Expert',
    //     yearExperience: '5+',
    //     projectRelated: [
    //         {
    //             title: 'PHP Project 1',
    //             image: '/php-project1.png',
    //             description: 'A content management system built using PHP for a fast and dynamic website.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //         {
    //             title: 'PHP Project 2',
    //             image: '/php-project2.png',
    //             description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //     ],
    // },
    // {
    //     title: 'Netlify',
    //     key: 'netlify',
    //     thumb: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211644-Netlify.png',
    //     image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211644-Netlify.png',
    //     description: 'PHP is a popular server-side scripting language designed for web development, powering many websites and web apps.',
    //     experienceSkill: 'Expert',
    //     yearExperience: '5+',
    //     projectRelated: [
    //         {
    //             title: 'PHP Project 1',
    //             image: '/php-project1.png',
    //             description: 'A content management system built using PHP for a fast and dynamic website.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //         {
    //             title: 'PHP Project 2',
    //             image: '/php-project2.png',
    //             description: 'A RESTful API developed with PHP to handle data efficiently for a large-scale web application.',
    //             cta: {
    //                 githubLink: '',
    //                 previewLink: '',
    //             },
    //         },
    //     ],
    // },
];
