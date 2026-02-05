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
            <span class="text-sm font-bold text-slate-600 tracking-wider uppercase">Career Journey</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
           Professional <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
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
        name: 'PT Friendsure Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'Feb 2025',
        until: 'Present',
        location: 'Jakarta, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png',
        description: [
            'Developing a cross-platform insurance application using <strong>Flutter</strong> for Android/iOS.',
            'Integrating backend services (NestJS) to enable real-time updates and ensure accurate data synchronization.',
            'Implementing secure data storage solutions to protect sensitive user information.',
            'Developing an all-in-one <strong>CMS Dashboard</strong> using Strapi & Python for content automation.',
        ]
    },
    {
        slug: 'ordivo',
        name: 'PT Ordivo Teknologi Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'Nov 2022',
        until: 'Dec 2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3094/3094918.png',
        description: [
            'Increased seller productivity by <strong>35%</strong> through a real-time sales dashboard.',
            'Redesigned UI/UX for Funnel and Storefronts, boosting user engagement by <strong>20%</strong>.',
            'Implemented automated testing with <strong>Cypress</strong>, reducing bug resolution time by 50%.',
            'Created 10+ responsive storefront themes, including a TikTok-inspired design.',
        ]
    },
    {
        slug: 'icreativelabs',
        name: 'Icreativelabs (PT Idekreatif)',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'May 2022',
        until: 'Nov 2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/4205/4205106.png',
        description: [
            '<strong>PT Pos Indonesia Project:</strong> Developed a Dashboard Reporting System, improving reporting efficiency by 70%.',
            '<strong>Floucloud CMS:</strong> Built a WordPress-like CMS dashboard using Laravel & Vue.',
            'Optimized page load times by 70% through efficient query caching.'
        ]
    },
    {
        slug: 'ensiklotari',
        name: 'Ensiklotari',
        type: 'Founder & Builder',
        job: 'Fullstack Engineer',
        since: 'July 2021',
        until: 'Sept 2023',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665939.png',
        description: [
            'Founded a digital platform preserving Indonesian dance culture (Top 10 Finalist in IEEE 2021).',
            'Built the entire platform using <strong>Vue.js and Laravel</strong>.',
            'Secured "Kedaireka Matching Fund" to support product development.',
        ]
    },
    {
        slug: 'klosing',
        name: 'Klosing.id',
        type: 'Hybrid',
        job: 'Fullstack Engineer',
        since: 'May 2021',
        until: 'May 2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/6585/6585728.png',
        description: [
            'Developed a Customer Management System and drag-and-drop landing page editor.',
            'Boosted SME operational efficiency by <strong>65%</strong> through automated tools.',
            'Built using Vue.js, Laravel, and MySQL focused on high scalability.'
        ]
    },
    {
        slug: 'notiva',
        name: 'CV Notiva Indonesia',
        type: 'Internship',
        job: 'Frontend Engineer',
        since: 'Jan 2021',
        until: 'June 2021',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
        description: [
            'Designed and built the Notiva CMS Admin Dashboard.',
            'Automated content workflows, reducing manual effort by <strong>40%</strong>.',
            'Integrated real-time analytics for better decision making.'
        ]
    }
]);
</script>
