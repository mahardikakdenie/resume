<template>
    <div>
        <Timeline :experiences="experiences" />
    </div>
</template>

<script setup lang="ts">
const experiences = ref<{
    name: string;
    type: string;
    job: string;
    since: string;
    until: string;
    description: string;
    icon?:string;
}[]>([
    {
        name: 'Adhirajasa Reswara Sanjaya University',
        type: 'S1',
        job: 'Teknik Informatika',
        since: 'September 2020',
        until: 'September 2024',
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
        name: 'Sekolah Menengah Atas Negeri 1 Sumedang',
        type: 'SMA',
        job: 'MIPA',
        since: 'Juni 2017',
        until: 'Juni 2020',
        description: `<ul><li><strong>DPUTR Internal Web Report Absensi (Vue, Laravel, MySQL):</strong> A web-based application for the Department of Public Works and Spatial Planning of Bandung Regency, built with Vue, Laravel, and MySQL. It enables partners to create, submit, and track reports in real-time, enhancing transparency and operational efficiency in infrastructure project management. </li><li><strong>DPUTR Silandak Dashboard (Vue, Laravel, MongoDB):</strong> This web-based dashboard visualizes infrastructure project data for the Department of Public Works and Spatial Planning. Developed with Vue, Laravel, and MongoDB, it provides daily, monthly, and yearly reports for real-time project tracking, featuring interactive charts and tables that enhance decision-making and strategic planning.</li></ul>`
    },
    {
        name: 'Sekolah Menengah Pertama Negeri 1 Sumedang',
        type: 'SMP',
        job: 'SMP',
        since: 'Juni 2014',
        until: 'Juni 2017',
        description: `I work in an agency where I have been involved in significant projects for PT Pos Indonesia and Floucloud CMS.
        Project PT Pos Indonesia:
        •I developed a comprehensive Dashboard website to monitor the business growth and progress of PT Pos Indonesia. This included creating a detailed Dashboard Report Monitoring system to provide real-time insights and analytics, aiding in better decision-making and strategic planning.
        Project Floucloud:
        I built a CMS Dashboard website for managing landing page content, similar to WordPress. My responsibilities included ensuring the CMS operated smoothly and efficiently, providing a user-friendly platform for content management and updates.`
    },
    {
        name: 'Sekolah Dasar Negeri Pasarean',
        type: 'SD',
        job: 'SD',
        since: 'Juni 2010',
        until: 'Juni 2014',
        description: `I am the founder of Ensiklotari.id, a pioneering startup dedicated to preserving and promoting Indonesian dance. Our startup was recognized as one of the top ten in the IEEE 2021 startup competition and proudly won funding from the Matching Fund Kedaireka. You can find more about our journey in these articles:
        •Viva Bandung: Melestarikan dan Merawat Tari Indonesia Lewat Ensiklotari (https://bandung.viva.co.id/fakta-unik/11354-melestarikan-dan-merawat-tari-indonesia-lewat-ensiklotari?page=2)
        Republika: Ars University Lolos Pendanaan Matching Fund Kedaireka (https://republika.co.id/berita/rf92i0396/ars-university-lolos-pendanaan-matching-fund-kedaireka)
        I am possibly the sole engineer responsible for developing this website, collaborating closely with two friends and our supervising professor. Our collective effort has made Ensiklotari.id a valuable digital platform for the cultural preservation of Indonesian dance.`
    },
    {
        name: 'Sekolah Dasar Negeri JATIPAMOR',
        type: 'SD',
        job: 'SD',
        since: 'Juni 2008',
        until: 'Juni 2010',
        description: `Develop a comprehensive Customer Management system to efficiently handle customer or contact information. This feature is crucial as the website functions as a checkout form tool designed to assist small and medium-sized enterprises (UMKM) in their digital marketing efforts. The system should streamline the process of managing customer data, ensuring seamless communication and improved customer relationships.
        •Additionally, create a robust landing page editor that allows users to easily build and customize landing pages directly on the website. This editor should offer intuitive drag-and-drop functionality, a variety of templates, and flexible design options to accommodate the diverse needs of UMKMs in creating effective and attractive landing pages for their marketing campaigns.`
    },
    {
        name: 'TK Trisula Sumedang',
        type: 'TK',
        job: 'TK',
        since: 'Juni 2007',
        until: 'Juni 2008',
        description: `Develop an Admin Dashboard for the Notiva CMS, featuring comprehensive capabilities to add, update, and delete content.
        This system should seamlessly automate content management for both the website landing page and the mobile app.
        Additionally, create an Admin Dashboard to effectively monitor user activity, providing real-time insights and analytics.
        The dashboard should be user-friendly, ensuring easy navigation and efficient management of all administrative tasks.`,
    },
]);

</script>
