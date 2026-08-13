<template>
  <div class="relative">
    <!-- Animated Central Vertical Spine Line (Desktop & Mobile) with Flowing Laser Gradient -->
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.35)]"></div>
    <div class="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.35)]"></div>

    <div class="space-y-10 sm:space-y-16">
      
      <!-- Chronological Experience Items -->
      <div 
        v-for="(exp, index) in experiences" 
        :key="index"
        class="relative flex flex-col md:flex-row items-center justify-between group"
        :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <!-- Animated Pulsing Node Dot -->
        <div class="absolute left-6 md:left-1/2 w-6 h-6 transform -translate-x-1/2 z-20 flex items-center justify-center">
          <span class="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping group-hover:bg-pink-500"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-white dark:border-slate-950 shadow-md group-hover:scale-125 transition-transform duration-300"></span>
        </div>

        <!-- Date Pill Badge (Desktop) -->
        <div class="hidden md:block w-5/12 text-center" :class="index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'">
          <span class="inline-flex items-center gap-2 py-2 px-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-purple-200/80 dark:border-slate-800 shadow-md text-purple-700 dark:text-purple-300 font-extrabold text-xs tracking-wider uppercase group-hover:border-purple-400 group-hover:shadow-purple-500/10 transition-all duration-300">
            <svg class="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ exp.since }} - {{ $t(`experience_page.jobs.${exp.slug}.until`, exp.until) }}
          </span>
        </div>

        <!-- Date Pill Badge (Mobile) -->
        <div class="md:hidden ml-14 mb-3 self-start">
          <span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl bg-purple-100/80 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-[11px] font-black uppercase tracking-wider">
            <svg class="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ exp.since }} - {{ $t(`experience_page.jobs.${exp.slug}.until`, exp.until) }}
          </span>
        </div>

        <!-- Experience Card -->
        <div 
          @click="navigateToDetail(exp.slug)"
          class="w-[calc(100%-3.5rem)] md:w-5/12 ml-14 md:ml-0 p-6 sm:p-8 bg-white/90 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1.5 hover:border-purple-400/80 dark:hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden cursor-pointer group/card"
        >
          <!-- Ambient Card Hover Glow -->
          <div class="absolute -right-20 -bottom-20 w-48 h-48 bg-purple-400/15 rounded-full blur-3xl group-hover/card:bg-purple-400/30 transition-all duration-500 pointer-events-none"></div>

          <!-- Detail Arrow Indicator Icon -->
          <div class="absolute top-6 right-6 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/card:translate-x-0">
            <div class="w-8 h-8 rounded-xl bg-purple-100/80 dark:bg-purple-950/80 flex items-center justify-center text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          <!-- Card Header & Company Logo -->
          <div class="flex items-start justify-between mb-4 pr-8">
            <div>
              <h3 class="text-xl font-black text-slate-900 dark:text-white leading-tight group-hover/card:text-purple-600 dark:group-hover/card:text-purple-400 transition-colors">
                {{ exp.name }}
              </h3>
              <p class="text-purple-600 dark:text-purple-400 font-extrabold text-sm sm:text-base mt-1 tracking-wide">
                {{ $t(`experience_page.jobs.${exp.slug}.job`, exp.job) }}
              </p>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200/80 dark:border-slate-700/60 shrink-0 p-2 shadow-sm group-hover/card:scale-110 transition-transform duration-300">
              <img :src="exp.logo" alt="logo" class="w-full h-full object-contain" @error="handleImageError" />
            </div>
          </div>

          <!-- Location & Employment Type Meta Badges -->
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">
            <span class="flex items-center gap-1.5 text-xs font-semibold">
              <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ $t(`experience_page.jobs.${exp.slug}.location`, exp.location) }}
            </span>
            <span class="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40 text-[10px] font-black uppercase tracking-wider">
              {{ $t(`experience_page.jobs.${exp.slug}.type`, exp.type) }}
            </span>
          </div>

          <!-- Key Responsibilities Bullet List -->
          <ul class="space-y-3">
            <li 
              v-for="(item, i) in getLocalizedDescription(exp.slug, exp.description)" 
              :key="i" 
              class="flex gap-3 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
            >
              <span class="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shrink-0 shadow-sm"></span>
              <span v-html="item"></span>
            </li>
          </ul>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t, tm, te } = useI18n();

defineProps<{
  experiences: {
    slug: string;
    name: string;
    job: string;
    type: string;
    since: string;
    until: string;
    location: string;
    logo?: string;
    description: string[];
  }[];
}>();

const getLocalizedDescription = (slug: string, fallback: string[]): string[] => {
  if (te(`experience_page.jobs.${slug}.description`)) {
    const list = tm(`experience_page.jobs.${slug}.description`) as any;
    if (Array.isArray(list) && list.length > 0) {
      return list;
    }
  }
  return fallback;
};

const navigateToDetail = (slug: string) => {
  if (slug) {
    router.push(`/experiences/${slug}`);
  }
};

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png';
};
</script>
