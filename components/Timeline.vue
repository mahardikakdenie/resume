<template>
    <section class="px-8 bg-neutral-100 flex items-center justify-center">
        <!-- Main container -->
        <div class="w-full max-w-6xl flex flex-col items-center mt-5">

            <!-- Timeline Section -->
            <div class="relative max-w-[1200px] my-0 mx-auto direction">
                <!-- Experience 1 -->
                <div v-for="(experience, i) in experiences" :key="i" class="experience-wrapper"
                    :class="{ 'pos-left': i % 2 !== 0, 'pos-right': i % 2 === 0 }">
                    <!-- Timeline indicator -->
                    <div
                        :class="{ 'experience-icon-steps-left': i % 2 !== 0, 'experience-icon-steps-right': i % 2 === 0 }">
                        <img :src="calenderChecked" alt="">
                    </div>

                    <!-- Experience Card -->
                    <div class="experience-card">
                        <h3 class="text-lg font-bold text-white">{{ experience.name }}</h3>
                        <p class="text-sm text-white font-semibold ">{{ experience.job }} • {{ experience.type }}</p>
                        <p class="text-sm text-white ">{{ experience.since }} - {{ experience.until }}</p>
                        <div class="mt-4 experience-description" v-html="experience.description" />
                        <span :class="{ 'row-card-left': i % 2 !== 0, 'row-card-right': i % 2 === 0 }"></span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import calenderChecked from '@/assets/calender-check.svg';

interface TimeData {
    name: string;
    type: string;
    job: string;
    since: string;
    until: string;
    description: string;
}

const props = defineProps<{
    data: TimeData[];
}>();

const experiences = ref<{
    name: string;
    type: string;
    job: string;
    since: string;
    until: string;
    description: string;
}[]>([
    {
        name: 'PT Ordivo Technology Indonesia',
        type: 'Contract',
        job: 'Fullstack Engineer',
        since: 'November 2022',
        until: 'Present',
        description: `
            <ul>
                <li><strong>Revamping Dashboard Funnel and Storefront:</strong> Enhanced user engagement and interest by redesigning the dashboard funnel and storefront, creating a more intuitive and visually appealing user experience.</li>
                <li><strong>Improving UI/UX for Orderonline:</strong> Revamped key features to provide a superior user interface and user experience, making the platform more user-friendly and aesthetically pleasing.</li>
                <li><strong>E2E Testing with Cypress:</strong> Contributed to seamless functionality across the platform by assisting in end-to-end testing with Cypress.</li>
                <li><strong>Unit Testing:</strong> Developed unit tests to ensure component reliability and maintain platform stability.</li>
                <li><strong>Tool Development for Streamlining:</strong> Built tools to simplify and accelerate the Orderonline development process, improving overall efficiency and productivity.</li>
            </ul>
`
    },
    {
        name: 'Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Bandung',
        type: 'Contract',
        job: 'Fullstack Engineer',
        since: 'November 2023',
        until: 'Juny 2024',
        description: `<ul><li><strong>DPUTR Internal Web Report Absensi (Vue, Laravel, MySQL):</strong> A web-based application for the Department of Public Works and Spatial Planning of Bandung Regency, built with Vue, Laravel, and MySQL. It enables partners to create, submit, and track reports in real-time, enhancing transparency and operational efficiency in infrastructure project management. </li><li><strong>DPUTR Silandak Dashboard (Vue, Laravel, MongoDB):</strong> This web-based dashboard visualizes infrastructure project data for the Department of Public Works and Spatial Planning. Developed with Vue, Laravel, and MongoDB, it provides daily, monthly, and yearly reports for real-time project tracking, featuring interactive charts and tables that enhance decision-making and strategic planning.</li></ul>`
    },
    {
        name: 'Icreativelabs - PT Idekreatif Menusa Teknologi',
        type: 'Contract',
        job: 'Fullstack Engineer',
        since: 'Mei 2022',
        until: 'November 2022',
        description: `I work in an agency where I have been involved in significant projects for PT Pos Indonesia and Floucloud CMS.
        Project PT Pos Indonesia:
        •I developed a comprehensive Dashboard website to monitor the business growth and progress of PT Pos Indonesia. This included creating a detailed Dashboard Report Monitoring system to provide real-time insights and analytics, aiding in better decision-making and strategic planning.
        Project Floucloud:
        I built a CMS Dashboard website for managing landing page content, similar to WordPress. My responsibilities included ensuring the CMS operated smoothly and efficiently, providing a user-friendly platform for content management and updates.`
    },
    {
        name: 'Ensiklotari',
        type: 'Hybrid',
        job: 'Fullstack Engineer',
        since: 'Mei 2021',
        until: 'December 2023',
        description: `I am the founder of Ensiklotari.id, a pioneering startup dedicated to preserving and promoting Indonesian dance. Our startup was recognized as one of the top ten in the IEEE 2021 startup competition and proudly won funding from the Matching Fund Kedaireka. You can find more about our journey in these articles:
        •Viva Bandung: Melestarikan dan Merawat Tari Indonesia Lewat Ensiklotari (https://bandung.viva.co.id/fakta-unik/11354-melestarikan-dan-merawat-tari-indonesia-lewat-ensiklotari?page=2)
        Republika: Ars University Lolos Pendanaan Matching Fund Kedaireka (https://republika.co.id/berita/rf92i0396/ars-university-lolos-pendanaan-matching-fund-kedaireka)
        I am possibly the sole engineer responsible for developing this website, collaborating closely with two friends and our supervising professor. Our collective effort has made Ensiklotari.id a valuable digital platform for the cultural preservation of Indonesian dance.`
    },
    {
        name: 'Klosing.id',
        type: 'Hybrid',
        job: 'Fullstack Engineer',
        since: 'July 2021',
        until: 'July 2022',
        description: `Develop a comprehensive Customer Management system to efficiently handle customer or contact information. This feature is crucial as the website functions as a checkout form tool designed to assist small and medium-sized enterprises (UMKM) in their digital marketing efforts. The system should streamline the process of managing customer data, ensuring seamless communication and improved customer relationships.
        •Additionally, create a robust landing page editor that allows users to easily build and customize landing pages directly on the website. This editor should offer intuitive drag-and-drop functionality, a variety of templates, and flexible design options to accommodate the diverse needs of UMKMs in creating effective and attractive landing pages for their marketing campaigns.`
    },
    {
        name: 'CV Notiva Indonesia',
        type: 'Magang',
        job: 'Frontend Engineer',
        since: 'January 2021',
        until: 'Juny 2021',
        description: `Develop an Admin Dashboard for the Notiva CMS, featuring comprehensive capabilities to add, update, and delete content.
        This system should seamlessly automate content management for both the website landing page and the mobile app.
        Additionally, create an Admin Dashboard to effectively monitor user activity, providing real-time insights and analytics.
        The dashboard should be user-friendly, ensuring easy navigation and efficient management of all administrative tasks.`,
    },
]);

</script>

<style lang="scss">
/* Styling for flex reverse in even rows */
div.flex-row-reverse {
    flex-direction: row-reverse;
}

/* Timeline line */
.relative.w-4::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: gray;
    top: 100%;
}

/* General spacing and positioning */
.mb-12 {
    margin-bottom: 3rem;
}

/* Hover effect and transform */
.border-2 {
    transition: transform 0.3s ease;
}

.direction::after {
    content: '';
    position: absolute;
    width: 0;
    /* Set width to 0 */
    height: 100%;
    /* Full height */
    top: 0;
    left: 50%;
    margin-left: -1px;
    /* Centering adjustment */
    z-index: 1;
    border-left: 2px solid;
    @apply border-purple-400 bg-red-200;
    /* Dashed border color */
}

.experience-wrapper {
    @apply py-[10px] px-[50px] relative w-[50%];
}

.experience-icon-steps {
    @apply absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid flex justify-center -right-[20px] text-purple-600 bg-white;
}

/* Class untuk posisi di kanan */
.experience-icon-steps-right {
    @apply absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid flex justify-center -right-[20px] text-purple-600 bg-white;
}

/* Class untuk posisi di kiri */
.experience-icon-steps-left {
    @apply absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid flex justify-center -left-[20px] text-purple-600 bg-white;
}


.experience-card {
    @apply py-[20px] px-[30px] text-sm text-neutral-700 border rounded-lg bg-white hover:bg-white cursor-pointer shadow-xl;

    h3,
    p {
        @apply text-neutral-600;
    }

    &:hover {

        h3,
        p {
            @apply text-purple-700;
        }

        .experience-description {
            @apply text-purple-600;
        }
    }
}

/* Untuk runcingan di sebelah kanan */
.row-card-right {
    border-top: 15px solid transparent;
    /* Batas atas dibuat transparan */
    border-bottom: 15px solid transparent;
    /* Batas bawah dibuat transparan */
    border-left: 17px solid;
    /* Runcingan di sebelah kiri */
    border-right: none;
    /* Tidak ada border di kanan */
    right: 34px;
    /* Posisi dari kanan */
    transition: 0.2s ease-in-out;
    @apply h-0 w-0 absolute top-[37px] z-[1] border-l-white;
}

/* Untuk runcingan di sebelah kiri */
.row-card-left {
    border-top: 15px solid transparent;
    /* Batas atas dibuat transparan */
    border-bottom: 15px solid transparent;
    /* Batas bawah dibuat transparan */
    border-right: 17px solid;
    /* Runcingan di sebelah kanan */
    border-left: none;
    /* Tidak ada border di kiri */
    left: 34px;
    /* Posisi dari kiri */
    transition: 0.2s ease-in-out;
    @apply h-0 w-0 absolute top-[37px] z-[1] border-r-white;
}


.pos-right {
    left: 0;
}

.pos-left {
    left: 50%;
}

.experience-description {
    ul {
        li {
            font-size: 13px;
        }
    }
}
</style>
