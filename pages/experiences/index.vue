<template>
  <div class="min-h-screen py-16 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
    <!-- Ambient Animated Light Theme Background Orbs & High-tech Pattern Overlay -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <!-- Soft Light Gradient Orbs -->
      <div class="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-gradient-to-br from-purple-400/20 via-indigo-300/15 to-transparent rounded-full blur-[130px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[650px] h-[650px] bg-gradient-to-tl from-blue-400/20 via-pink-300/15 to-transparent rounded-full blur-[130px] animate-pulse-slow" style="animation-delay: 3s"></div>
      <div class="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 6s"></div>
      
      <!-- Subtle Light Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" :style="{ backgroundImage: 'radial-gradient(#9333ea 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }"></div>
    </div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
      
      <!-- Asymmetric Executive Hero Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-24">
        
        <!-- Left Hero Content Column -->
        <div class="lg:col-span-7 text-left" data-aos="fade-right">
          <!-- Live Status Badge -->
          <div class="inline-flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-slate-800 dark:text-white px-5 py-2.5 rounded-full border border-purple-200 dark:border-purple-500/30 shadow-lg shadow-purple-500/5 mb-8 transition-all hover:scale-105 cursor-default group">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-[11px] font-black uppercase tracking-[0.25em] text-purple-700 dark:text-purple-300">
              {{ $t('experience_page.badge') || 'CAREER CHRONICLE & IMPACT TRACK RECORD' }}
            </span>
          </div>

          <!-- Headline Title -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-8">
            {{ $t('experience_page.title_1') || 'Professional' }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 uppercase animate-gradient-text">
              {{ $t('experience_page.title_2') || 'Experience' }}
            </span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal mb-10">
            A comprehensive record of full-stack engineering excellence, system architecture, enterprise leadership, and product innovations shipped to production.
          </p>

          <!-- Interactive Action CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4">
            <button
              @click="scrollToTimeline"
              class="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer group"
            >
              <span>Explore Timeline</span>
              <svg class="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <NuxtLink
              to="/contact"
              class="px-8 py-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-black text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <span>Get In Touch</span>
              <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Light Theme Executive Career Dashboard Card (Without Top Hat Line) -->
        <div class="lg:col-span-5" data-aos="fade-left">
          <div class="relative bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-8 border border-purple-200/80 dark:border-purple-500/30 shadow-xl shadow-purple-500/5 overflow-hidden group hover:border-purple-400/80 transition-colors duration-300">
            <!-- Background Ambient Soft Glow -->
            <div class="absolute -right-16 -top-16 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl group-hover:bg-purple-400/35 transition-all duration-500 pointer-events-none"></div>

            <!-- Header Badge inside Dashboard -->
            <div class="flex items-center justify-between mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                <span class="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Available For Engineering Roles</span>
              </div>
              <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Summary</span>
            </div>

            <!-- Stats Matrix Grid -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 hover:border-purple-400/50 transition-colors">
                <div class="text-3xl font-black text-blue-600 dark:text-blue-400">{{ yearsFormatted }}</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Years Commercial</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 hover:border-purple-400/50 transition-colors">
                <div class="text-3xl font-black text-purple-600 dark:text-purple-400">7+</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Orgs & Clients</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 hover:border-purple-400/50 transition-colors">
                <div class="text-3xl font-black text-pink-600 dark:text-pink-400">25+</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Products Shipped</div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 hover:border-purple-400/50 transition-colors">
                <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">High-Impact Delivery</div>
              </div>
            </div>

            <!-- Core Stack Pills -->
            <div>
              <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Core Stack Focus</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in ['Next.js', 'Vue.js', 'NestJS', 'Flutter', 'Docker', 'Redis', 'TypeScript']" :key="tech" class="px-3 py-1 rounded-xl bg-purple-50 dark:bg-slate-800 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200/60 dark:border-slate-700 hover:border-purple-400 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Timeline Section Anchor Header -->
      <div id="timeline-section" class="scroll-mt-28 mb-12 text-center" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-black uppercase tracking-widest mb-3">
          <span>Career Journey</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Milestones & Experience Timeline
        </h2>
      </div>

      <!-- Timeline Component -->
      <Timeline :experiences="experiences" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useExperienceYears } from '~/composables/useExperienceYears';

const { yearsFormatted } = useExperienceYears(2021);

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

const scrollToTimeline = () => {
  const el = document.getElementById('timeline-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.08); }
}

.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-text {
  background-size: 200% auto;
  animation: gradientText 4s ease infinite;
}
</style>
