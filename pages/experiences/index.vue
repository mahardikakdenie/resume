<template>
  <div class="min-h-screen py-20 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-6">
      <div data-aos="fade-down" class="text-center mb-20">
        <div class="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/60 px-6 py-2 rounded-full shadow-sm mb-4">
             <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span class="text-sm font-bold text-slate-600 tracking-wider uppercase">{{ $t('experience_page.badge') }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
           {{ $t('experience_page.title_1') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{{ $t('experience_page.title_2') }}</span>
        </h2>
      </div>

      <Timeline :experiences="experiences" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const experiences = ref([
    {
        slug: 'friendsure',
        name: 'PT Friendsure Technology Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '02/2025',
        until: 'Present',
        location: 'Jakarta, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png',
        description: [
            'Engineered a real-time ticket management portal using <strong>Next.js, TypeScript, WebSockets, and Redis</strong>, successfully replacing third-party tools and reducing software licensing expenses by 100%.',
            'Architected scalable backend Microservices using <strong>NestJS</strong>, optimizing complex SQL queries and enforcing ISO-standard data parsing to significantly reduce API error rates.',
            'Developed a cross-platform mobile insurance app using <strong>Flutter</strong>, delivering an intuitive user interface for efficient policy and claim management.',
            'Built high-performance, SEO-friendly web applications using <strong>React and Next.js</strong>, leveraging modern rendering strategies to accelerate client acquisition and ensure a seamless UX.',
            'Containerized application components with <strong>Docker</strong> and orchestrated deployments via <strong>Kubernetes</strong>, ensuring high availability and scalable delivery within a robust infrastructure.',
            'Designed a comprehensive <strong>AI Monitoring Dashboard</strong> using React and TypeScript to track real-time LLM performance, token consumption, and operational costs.',
            'Automated developer workflows by integrating <strong>GitHub Apps and Webhooks</strong>, enabling seamless synchronization between GitHub activities and ticket statuses.'
        ]
    },
    {
        slug: 'ordivo',
        name: 'PT ORDIVO TEKNOLOGI INDONESIA (ordeonline.id)',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '11/2022',
        until: '12/2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3094/3094918.png',
        description: [
            'Engineered a real-time seller dashboard using <strong>Vue.js and Nuxt.js</strong>, delivering actionable sales analytics that accelerated daily workflows and boosted seller productivity by 40%.',
            'Spearheaded comprehensive UI/UX revamps across the platform\'s funnel and landing pages, optimizing user journeys and driving a 30% increase in overall user engagement.',
            'Architected robust end-to-end (E2E) automated testing frameworks using <strong>Cypress</strong> for core transaction workflows, slashing bug detection and resolution time by over 50% and ensuring high platform stability.',
            'Developed 10+ customizable, highly responsive storefront themes, including a high-converting TikTok-inspired layout that accelerated platform adoption among younger demographics by 25%.',
            'Led the end-to-end development of the Wholesale Order System, introducing a B2B feature designed to improve merchant retention and drive a 20% growth in average order value.',
            'Scaled and optimized the Ostock Admin Dashboard and Customer Portal utilizing <strong>Vue.js, Laravel, and MongoDB</strong>, proactively resolving critical technical debt and reducing system latency by 30% to ensure a seamless user experience.'
        ]
    },
    {
        slug: 'dpupr',
        name: 'Dinas Pekerjaan Umum dan Penataan Ruang Kab. Bandung',
        type: 'Contract',
        job: 'Fullstack Engineer',
        since: '11/2023',
        until: '01/2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/2942/2942544.png',
        description: [
            '<strong>Real-Time Attendance App:</strong> Built a real-time, web-based attendance application using <strong>Vue.js, Laravel, and MySQL</strong>, reducing manual data processing time by 75% through automation and instant reporting.',
            '<strong>Silandak Dashboard – Infrastructure Monitoring System:</strong> Developed an infrastructure monitoring dashboard with <strong>Vue.js, Laravel, and MongoDB</strong>, providing real-time insights into system performance.',
            'Delivered interactive reports and optimized backend logic, improving data retrieval speed by 70%.'
        ]
    },
    {
        slug: 'icreativelabs',
        name: 'Icreativelabs - PT Idekreatif Menusa Teknologi',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '05/2022',
        until: '11/2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/4205/4205106.png',
        description: [
            '<strong>PT Pos Indonesia Software Developer:</strong> Developed a real-time Dashboard Reporting System with interactive data visualizations, improving internal reporting efficiency by 70%.',
            '<strong>Floucloud CMS:</strong> Built a WordPress-like CMS dashboard with a clean and intuitive user interface for content management.',
            'Optimized backend architecture using <strong>Laravel & MySQL</strong>, resulting in a 70% reduction in page load times, enhancing system scalability and maintainability.'
        ]
    },
    {
        slug: 'ensiklotari',
        name: 'Ensiklotari',
        type: 'Founder & Builder',
        job: 'Full-Stack Engineer',
        since: '07/2021',
        until: '09/2023',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665939.png',
        description: [
            'Founded Ensiklotari.id, a digital platform dedicated to preserving Indonesian dance culture through interactive online dance classes.',
            'Recognized as a <strong>Top 10 Finalist</strong> in the IEEE 2021 Startup Competition.',
            'Received <strong>Kedaireka Matching Fund</strong> to support product development and content creation.',
            'Built the platform using <strong>Vue.js and Laravel</strong>, ensuring a responsive and user-friendly experience.'
        ]
    },
    {
        slug: 'klosing',
        name: 'KlosingId',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '05/2021',
        until: '05/2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/6585/6585728.png',
        description: [
            'Developed a Customer Management System and landing page editor with drag-and-drop features, boosting SME operational efficiency by 65% and user adoption by 60%.',
            'Integrated marketing tools and implemented interactive design elements, significantly improving user engagement.',
            'Built using <strong>Vue.js, Laravel, and MySQL</strong>, ensuring high scalability, performance, and usability.'
        ]
    },
    {
        slug: 'notiva',
        name: 'CV Notiva Indonesia',
        type: 'Internship',
        job: 'Intern Frontend Engineer',
        since: '01/2021',
        until: '06/2021',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
        description: [
            'Designed and built the Notiva CMS Admin Dashboard, streamlining content management across platforms.',
            'Automated content workflows, reducing manual effort by 40%, and integrated real-time analytics for better decision-making.'
        ]
    }
]);
</script>
