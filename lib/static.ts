import type { IProjects } from "./staticInterface";

export const projects: Array<IProjects> = [
    {
        name: 'Ensiklotari',
        link: 'ensiklotari',
        image: '/ensiklotari.png',
        description: 'Ensiklotari ini merupakan aplikasi yang bertujuan untuk menjembatani para seniman tari dan pembelajar tari dalam mengenal dan mempelajari tari tradisional Indonesia khususnya, dan tari internasional pada umumnya.',
        images: ['/ensiklotari.png', '/bujanggamanik.png'],
    },
    {
        name: 'BujanggaManik Appointment App',
        link: 'bujangga-manik',
        image: '/bujanggamanik.png',
        description: 'Bujangga Manik adalah aplikasi berbasis website yang dirancang khusus untuk mempermudah proses temu janji serta memperkenalkan profil perusahaan dalam sektor jasa konstruksi bangunan dan gedung. Dengan fitur-fitur yang intuitif dan user-friendly, aplikasi ini memungkinkan pengguna untuk menjadwalkan pertemuan dengan para profesional konstruksi, mengeksplorasi berbagai layanan yang ditawarkan, serta mendapatkan informasi mendetail mengenai pengalaman dan keahlian perusahaan. Bujangga Manik bertujuan untuk meningkatkan efisiensi komunikasi antara klien dan penyedia jasa, sekaligus memberikan transparansi dan kemudahan akses kepada semua pihak yang terlibat dalam proyek konstruksi.',
        images: []
    },
    {
        name: 'Next Movie',
        link: 'next-movie',
        image: '/next-movie.png',
        description: 'List Movie And Ratting, is a dynamic website built with Next.js, designed to provide users with a comprehensive platform to browse movie listings and view detailed ratings and reviews.',
        images: []
    },
    {
        name: 'Library Vue Button',
        link: 'vue-button',
        image: '/lib-btn.png',
        description: 'Library Vue in Node Package Manager',
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

export const skillDatas: Array<{
    title: string;
    key: string;
    image: string;
    description: string;
    experienceSkill: string;
    yearExperience: string;
    projectRelated?: Array<{
        image: string;
        title: string;
        description: string;
        cta?: {
            githubLink?: string;
            previewLink?: string;
        };
    }>;
    sertification?: Array<{
        image: string;
        title: string;
        description: string;
        cta?: {
            githubLink?: string;
            previewLink?: string;
        };
    }>;
}> = [
    {
        title: 'ReactJS',
        key: 'react',
        image: 'https://media.licdn.com/dms/image/v2/D4D12AQH5dlcCSBp4cg/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1672212317392?e=1735171200&v=beta&t=s_ZWHbnRfWAI0CYQ1gHCNUc8DBQjqeOmnP5NmG5OY8c',
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
        ],
    },
];
