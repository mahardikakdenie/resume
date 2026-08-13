<template>
  <div class="min-h-screen py-20 bg-slate-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <button 
        @click="$router.back()" 
        class="mb-8 flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors font-medium group"
      >
        <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </div>
        {{ $t('experience_page.back_to_experiences', 'Back to Experiences') }}
      </button>

      <div v-if="experience">
        <div class="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-xl overflow-hidden mb-12" data-aos="fade-up">
            <div class="h-32 bg-gradient-to-r from-purple-600 to-blue-600 relative">
                <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>
            
            <div class="px-8 md:px-12 pb-12 -mt-16 flex flex-col md:flex-row items-start md:items-end gap-6">
                <div class="w-32 h-32 bg-white rounded-3xl shadow-lg p-6 flex items-center justify-center border-4 border-white shrink-0">
                    <img :src="experience.logo" :alt="experience.name" class="w-full h-full object-contain" />
                </div>

                <div class="flex-grow pt-4 md:pt-0">
                    <div class="flex flex-wrap items-center gap-3 mb-2">
                        <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                            {{ experience.type }}
                        </span>
                        <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider border border-purple-100">
                            {{ experience.since }} - {{ experience.until }}
                        </span>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-1">{{ experience.name }}</h1>
                    <p class="text-lg text-slate-500 font-medium flex items-center gap-2">
                        {{ experience.job }}
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        {{ experience.location }}
                    </p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            <div class="lg:col-span-5" data-aos="fade-right" data-aos-delay="100">
                <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-2 h-8 bg-purple-600 rounded-full"></span>
                    {{ $t('experience_page.key_responsibilities', 'Key Responsibilities & Impact') }}
                </h3>

                <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                    <div class="space-y-6 relative z-10">
                        <div 
                            v-for="(point, i) in experience.description" 
                            :key="i"
                            class="flex gap-4 group"
                        >
                            <div class="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <span class="text-xs font-bold">{{ Number(i) + 1 }}</span>
                            </div>
                            <p class="text-slate-600 leading-relaxed text-sm pt-1" v-html="point"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
                <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-2 h-8 bg-blue-500 rounded-full"></span>
                    {{ $t('experience_page.delivered_projects', 'Delivered Projects') }}
                </h3>

                <div v-if="relatedProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div 
                        v-for="(project, idx) in relatedProjects" 
                        :key="idx"
                        class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col"
                    >
                         <div class="h-40 bg-slate-100 rounded-xl overflow-hidden relative mb-4">
                             <div v-if="project.image && !project.image.startsWith('http://localhost')" class="w-full h-full">
                                <img 
                                    :src="project.image" 
                                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    @error="handleImageError"
                                />
                             </div>
                             <div v-else class="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                                 <svg xmlns="http://www.w3.org/2050/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                             </div>

                             <span class="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded text-slate-700">
                                {{ project.type }}
                             </span>
                         </div>

                         <div class="flex-grow flex flex-col justify-between">
                             <div>
                                 <h4 class="text-sm font-bold text-slate-850 group-hover:text-purple-650 transition-colors line-clamp-1 mb-1">{{ project.name }}</h4>
                                 <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">{{ project.description }}</p>
                             </div>
                             
                             <div class="flex items-center justify-between text-[11px] font-bold text-slate-400">
                                 <span>{{ project.role }}</span>
                                 <NuxtLink :to="`/project#project-section`" class="text-purple-600 hover:text-purple-700 flex items-center gap-0.5">
                                     View &rarr;
                                 </NuxtLink>
                             </div>
                         </div>
                    </div>
                </div>
                
                <div v-else class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <span class="text-3xl mb-2">📂</span>
                    <h4 class="text-sm font-bold text-slate-800">No Projects Linked</h4>
                    <p class="text-xs text-slate-400 mt-1">This experience is focused on internal infrastructure & private codebases.</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { projects } from '~/lib/static';

const route = useRoute();
const slug = route.params.slug as string;
const { t, tm, te } = useI18n();

// 1. DATA PENGALAMAN (Master Data)
const experiencesMap: Record<string, any> = {
    'friendsure': {
        name: 'PT Friendsure Technology Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '02/2025',
        until: 'Present',
        location: 'Jakarta, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png',
        description: [
            'Engineered real-time ticket management portal using <strong>Next.js, TypeScript, WebSockets, Redis</strong>.',
            'Architected scalable backend microservices using <strong>NestJS</strong> and optimized SQL queries.',
            'Developed cross-platform mobile insurance app using <strong>Flutter</strong>.',
            'Built SEO-friendly web apps using React & Next.js.',
            'Containerized services with <strong>Docker & Kubernetes</strong>.',
            'Designed <strong>AI Monitoring Dashboard</strong> tracking LLM latency, tokens, and operational costs.',
            'Automated developer workflows with <strong>GitHub Apps & Webhooks</strong>.'
        ],
        projectKeywords: ['Customer Portal', 'Friendsure', 'Ticket', 'AI', 'Insurance'] 
    },
    'ordivo': {
        name: 'PT ORDIVO TEKNOLOGI INDONESIA (ordeonline.id)',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '11/2022',
        until: '12/2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3094/3094918.png',
        description: [
            'Engineered real-time seller dashboard using Vue.js & Nuxt.js (+40% productivity).',
            'Spearheaded UI/UX revamps driving 30% higher user engagement.',
            'Implemented E2E automated testing with Cypress (slashing bug resolution time by 50%).',
            'Developed 10+ storefront themes including TikTok-inspired layout (+25% adoption).',
            'Led development of Wholesale Order System (B2B) growing average order value by 20%.',
            'Scaled Ostock Admin Dashboard & Customer Portal (Vue.js, Laravel, MongoDB) reducing latency by 30%.'
        ],
        projectKeywords: ['Laukita', 'Dreams', 'Uniqlo', 'Orderonline', 'Storefront', 'Ostock']
    },
    'dpupr': {
        name: 'Dinas Pekerjaan Umum dan Penataan Ruang Kab. Bandung',
        type: 'Contract',
        job: 'Fullstack Engineer',
        since: '11/2023',
        until: '01/2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/2942/2942544.png',
        description: [
            'Built a real-time web-based attendance app using Vue.js, Laravel, MySQL.',
            'Developed Silandak Dashboard (Infrastructure Monitoring System) using Vue.js, Laravel, MongoDB.',
            'Optimized queries & reporting dashboards (+70% load speeds).'
        ],
        projectKeywords: ['Silandak', 'Attendance']
    },
    'icreativelabs': {
        name: 'Icreativelabs - PT Idekreatif Menusa Teknologi',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '05/2022',
        until: '11/2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/4205/4205106.png',
        description: [
            'PT Pos Indonesia Software Developer: Developed interactive Dashboard Reporting System.',
            'Floucloud CMS: Built CMS Content dashboard UI and scaled data structures.',
            'Optimized backend workflows using Laravel & MySQL (-70% load times).'
        ],
        projectKeywords: ['Pos Indonesia', 'Floucloud']
    },
    'ensiklotari': {
        name: 'Ensiklotari',
        type: 'Founder',
        job: 'Full-Stack Engineer & Founder',
        since: '07/2021',
        until: '09/2023',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665939.png',
        description: [
            'Preserving Indonesian dance culture via interactive online classes.',
            'IEEE 2021 Startup Competition Top 10 Finalist.',
            'Received Matching Fund Kedaireka grant support.',
            'Built complete platform using Vue.js & Laravel.'
        ],
        projectKeywords: ['Ensiklotari']
    },
    'klosing': {
        name: 'KlosingId',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: '05/2021',
        until: '05/2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/6585/6585728.png',
        description: [
            'Developed CMS and page builder editor with drag-and-drop elements.',
            'Integrated external marketing systems and scaled workflows.',
            'Crafted highly modular Vue & Laravel APIs.'
        ],
        projectKeywords: ['Klosing']
    },
    'notiva': {
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
        ],
        projectKeywords: ['Notiva']
    }
};

const getLocalizedDescription = (itemSlug: string, fallback: string[]): string[] => {
  if (te(`experience_page.jobs.${itemSlug}.description`)) {
    const list = tm(`experience_page.jobs.${itemSlug}.description`) as any;
    if (Array.isArray(list) && list.length > 0) {
      return list;
    }
  }
  return fallback;
};

// 2. RETRIEVE ACTIVE EXPERIENCE BY SLUG (Mapped with translations)
const experience = computed(() => {
    const base = experiencesMap[slug];
    if (!base) return null;
    return {
        ...base,
        job: t(`experience_page.jobs.${slug}.job`, base.job),
        type: t(`experience_page.jobs.${slug}.type`, base.type),
        until: t(`experience_page.jobs.${slug}.until`, base.until),
        location: t(`experience_page.jobs.${slug}.location`, base.location),
        description: getLocalizedDescription(slug, base.description)
    };
});

// 3. RELATED PROJECTS
const relatedProjects = computed(() => {
    const activeExp = experiencesMap[slug];
    if (!activeExp || !activeExp.projectKeywords) return [];
    
    return projects.filter(proj => {
        return activeExp.projectKeywords.some((kw: string) => {
            const matchTitle = proj.name.toLowerCase().includes(kw.toLowerCase());
            const matchDesc = proj.description.toLowerCase().includes(kw.toLowerCase());
            return matchTitle || matchDesc;
        });
    });
});

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png';
};
</script>
