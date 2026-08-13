<template>
  <div class="min-h-screen py-16 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
    <!-- Ambient Dynamic Background Glowing Orbs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[650px] h-[650px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-[35%] right-[25%] w-[450px] h-[450px] bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 4s"></div>
      <!-- Radial Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]" :style="{ backgroundImage: 'radial-gradient(#a855f7 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }"></div>
    </div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
      
      <!-- Asymmetric Executive Hero Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
        
        <!-- Left Hero Content Column -->
        <div class="lg:col-span-7 text-left" data-aos="fade-right">
          <!-- Live Status Badge -->
          <div class="inline-flex items-center gap-3 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md text-white px-5 py-2 rounded-full border border-slate-700/50 shadow-xl mb-8 transition-all hover:scale-105 cursor-default">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span class="text-[11px] font-black uppercase tracking-[0.25em] text-blue-300">
              {{ $t('experience_page.badge') || 'CAREER CHRONICLE & TRACK RECORD' }}
            </span>
          </div>

          <!-- Headline Title -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-8">
            {{ $t('experience_page.title_1') || 'Professional' }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 uppercase">
              {{ $t('experience_page.title_2') || 'Experience' }}
            </span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal mb-10">
            A comprehensive track record of full-time engineering roles, technical leadership, contract systems development, and entrepreneurial ventures.
          </p>

          <!-- Interactive Action CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4">
            <button
              @click="scrollToTimeline"
              class="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <span>Explore Timeline</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <NuxtLink
              to="/contact"
              class="px-8 py-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-black text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <span>Get In Touch</span>
              <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Executive Career Dashboard Card -->
        <div class="lg:col-span-5" data-aos="fade-left">
          <div class="relative bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl overflow-hidden group">
            <!-- Background Ambient Glow -->
            <div class="absolute -right-16 -top-16 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/35 transition-all duration-500 pointer-events-none"></div>
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <!-- Header Badge inside Dashboard -->
            <div class="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Available For Engineering Roles</span>
              </div>
              <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Summary</span>
            </div>

            <!-- Stats Matrix Grid -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                <div class="text-3xl font-black text-blue-400">4+</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Years Commercial</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                <div class="text-3xl font-black text-purple-400">7+</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Orgs & Clients</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                <div class="text-3xl font-black text-pink-400">25+</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Products Shipped</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                <div class="text-3xl font-black text-emerald-400">100%</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">High-Impact Delivery</div>
              </div>
            </div>

            <!-- Core Stack Pills -->
            <div>
              <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Core Stack Focus</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in ['Next.js', 'Vue.js', 'NestJS', 'Flutter', 'Docker', 'Redis', 'TypeScript']" :key="tech" class="px-3 py-1 rounded-xl bg-slate-800 text-purple-300 text-xs font-semibold border border-slate-700">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Segmented Controller Filter Switcher -->
      <div id="timeline-section" data-aos="fade-up" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-4 sm:p-5 mb-10 shadow-xl shadow-slate-900/5">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v25a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Career Filter</h3>
              <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400">Filter timeline by employment type</p>
            </div>
          </div>

          <!-- Segment Tabs -->
          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              v-for="type in filterTypes"
              :key="type.id"
              @click="selectedType = type.id"
              :class="[
                'px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 border cursor-pointer',
                selectedType === type.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-purple-500 text-white shadow-md shadow-purple-500/20 scale-105'
                  : 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
              ]"
            >
              <span>{{ type.label }}</span>
              <span
                :class="[
                  'px-2 py-0.5 rounded-full text-[10px] font-black',
                  selectedType === type.id ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                ]"
              >
                {{ getRoleCount(type.id) }}
              </span>
            </button>
          </div>

        </div>
      </div>

      <!-- Active Filter Context Ribbon -->
      <div v-if="selectedType !== 'all'" class="mb-8 flex items-center justify-between px-6 py-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-bold">
        <span>Showing <strong class="text-purple-900 dark:text-purple-100">{{ filteredExperiences.length }}</strong> experience(s) matching filter: <span class="uppercase tracking-widest font-black">{{ selectedType }}</span></span>
        <button @click="selectedType = 'all'" class="text-purple-600 dark:text-purple-400 hover:underline uppercase text-[10px] font-black tracking-wider cursor-pointer">Reset Filter</button>
      </div>

      <!-- Timeline Component (Untouched) -->
      <Timeline :experiences="filteredExperiences" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selectedType = ref('all');

const filterTypes = [
  { id: 'all', label: 'All Roles' },
  { id: 'fulltime', label: 'Fulltime' },
  { id: 'contract', label: 'Contract' },
  { id: 'founder', label: 'Founder' },
  { id: 'internship', label: 'Internship' }
];

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
    type: 'Founder',
    job: 'Full-Stack Engineer & Founder',
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

const getRoleCount = (typeId: string): number => {
  if (typeId === 'all') return experiences.value.length;
  return experiences.value.filter(exp => exp.type.toLowerCase().includes(typeId)).length;
};

const filteredExperiences = computed(() => {
  if (selectedType.value === 'all') return experiences.value;
  return experiences.value.filter(exp => exp.type.toLowerCase().includes(selectedType.value));
});

const scrollToTimeline = () => {
  const el = document.getElementById('timeline-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
