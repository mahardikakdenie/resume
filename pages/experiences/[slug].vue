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
        Back to Experiences
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
                    Key Responsibilities & Impact
                </h3>

                <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                    <div class="space-y-6 relative z-10">
                        <div 
                            v-for="(point, i) in experience.description" 
                            :key="i"
                            class="flex gap-4 group"
                        >
                            <div class="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <span class="text-xs font-bold">{{ i }}</span>
                            </div>
                            <p class="text-slate-600 leading-relaxed text-sm pt-1" v-html="point"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
                <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-2 h-8 bg-blue-500 rounded-full"></span>
                    Delivered Projects
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
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                             </div>

                             <span class="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded text-slate-700">
                                {{ project.type }}
                             </span>
                         </div>

                         <div class="flex-grow">
                             <h4 class="font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
                                {{ project.name }}
                             </h4>
                             <div v-if="project.tools" class="flex flex-wrap gap-1 mb-3">
                                <span v-for="tool in project.tools.slice(0,3)" :key="tool" class="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">
                                    {{ tool }}
                                </span>
                             </div>
                             <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                                {{ project.description }}
                             </p>
                         </div>

                         <a 
                            v-if="project.url"
                            :href="project.url" 
                            target="_blank"
                            class="mt-auto w-full py-2 flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-purple-600 transition-colors"
                         >
                            View Details
                         </a>
                    </div>
                </div>

                <div v-else class="bg-white rounded-3xl p-8 border border-dashed border-slate-300 text-center">
                    <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <p class="text-slate-500 font-medium">Internal confidential projects or not listed publicly.</p>
                </div>
            </div>

        </div>
      </div>

      <div v-else class="text-center py-20">
          <h2 class="text-2xl font-bold text-slate-400">Experience Not Found</h2>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/lib/static'; // Mengambil data project global

const route = useRoute();
const slug = route.params.slug as string;

// 1. DATA PENGALAMAN (Master Data)
// Kita definisikan ulang data experience di sini agar bisa di-link-kan dengan keyword project
const experiencesMap: Record<string, any> = {
    'friendsure': {
        name: 'PT Friendsure Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'Feb 2025',
        until: 'Present',
        location: 'Jakarta, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png',
        description: [
            'Developing a cross-platform insurance application using <strong>Flutter</strong>.',
            'Integrating backend services (NestJS) for real-time updates.',
            'Developing CMS Dashboard using Strapi & Python for AI video generation.',
        ],
        // Keywords untuk mencari project di static.ts
        projectKeywords: ['Customer Portal', 'Friendsure', 'CMS AI'] 
    },
    'ordivo': {
        name: 'PT Ordivo Teknologi Indonesia',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'Nov 2022',
        until: 'Dec 2024',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3094/3094918.png',
        description: [
            'Increased seller productivity by 35% via real-time dashboard.',
            'Redesigned UI/UX for Funnel and Storefronts (20% engagement boost).',
            'Implemented E2E Testing with Cypress.',
            'Created 10+ Storefront Themes (e.g. Uniqlo, Laukita, Dreams).',
        ],
        projectKeywords: ['Laukita', 'Dreams', 'Uniqlo', 'Orderonline', 'Storefront']
    },
    'icreativelabs': {
        name: 'Icreativelabs',
        type: 'Fulltime',
        job: 'Fullstack Engineer',
        since: 'May 2022',
        until: 'Nov 2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/4205/4205106.png',
        description: [
            'PT Pos Indonesia Dashboard Reporting System.',
            'Floucloud CMS implementation (WordPress-like).',
        ],
        projectKeywords: ['Floucloud', 'Pos Indonesia']
    },
    'ensiklotari': {
        name: 'Ensiklotari',
        type: 'Founder',
        job: 'Fullstack Engineer',
        since: 'July 2021',
        until: 'Sept 2023',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665939.png',
        description: [
            'Founder & Builder of Ensiklotari.id (Top 10 IEEE 2021).',
            'Built full platform using Vue.js & Laravel.',
            'Secured funding from Kedaireka Matching Fund.',
        ],
        projectKeywords: ['Ensiklotari', 'Bujangga', 'Maida Clinic']
    },
    'klosing': {
        name: 'Klosing.id',
        type: 'Hybrid',
        job: 'Fullstack Engineer',
        since: 'May 2021',
        until: 'May 2022',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/6585/6585728.png',
        description: [
            'Developed CMS and Landing Page Editor.',
            'Boosted SME operational efficiency by 65%.',
        ],
        projectKeywords: ['Klosing']
    },
    'notiva': {
        name: 'CV Notiva Indonesia',
        type: 'Internship',
        job: 'Frontend Engineer',
        since: 'Jan 2021',
        until: 'June 2021',
        location: 'Bandung, Indonesia',
        logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
        description: [
            'Built Notiva CMS Admin Dashboard.',
            'Automated content workflows.',
        ],
        projectKeywords: ['Notiva']
    }
};

const experience = computed(() => experiencesMap[slug]);

// 2. FILTER PROJECTS LOGIC
// Mencari project di static.ts yang nama/deskripsinya mengandung keyword perusahaan
const relatedProjects = computed(() => {
    if (!experience.value || !experience.value.projectKeywords) return [];
    
    return projects.filter(proj => {
        // Cek apakah nama project atau deskripsi mengandung salah satu keyword
        return experience.value.projectKeywords.some((keyword: string) => 
            proj.name.toLowerCase().includes(keyword.toLowerCase()) || 
            (proj.description && proj.description.toLowerCase().includes(keyword.toLowerCase()))
        );
    });
});

const handleImageError = (e: Event) => {
    (e.target as HTMLElement).style.display = 'none'; // Sembunyikan gambar rusak
};
</script>
