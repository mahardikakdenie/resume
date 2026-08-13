<template>
  <div class="relative">
    <!-- Soft Animated Central Vertical Spine Line (Desktop & Mobile) -->
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-indigo-500/40 to-blue-500/40 transform -translate-x-1/2 rounded-full"></div>
    <div class="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-indigo-500/40 to-blue-500/40 rounded-full"></div>

    <div class="space-y-8 sm:space-y-12">
      
      <!-- Chronological Experience Items -->
      <div 
        v-for="(exp, index) in experiences" 
        :key="index"
        class="relative flex flex-col md:flex-row items-center justify-between group"
        :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
      >
        <!-- Timeline Node Dot -->
        <div class="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-white dark:bg-slate-950 border-2 border-purple-500 rounded-full transform -translate-x-1/2 z-20 shadow-sm group-hover:scale-125 group-hover:border-purple-400 group-hover:bg-purple-500 transition-all duration-300"></div>

        <!-- Date Pill (Desktop) -->
        <div class="hidden md:block w-5/12 text-center" :class="index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'">
          <span class="inline-block py-1.5 px-5 rounded-full bg-slate-100/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xs text-purple-600 dark:text-purple-300 font-semibold text-xs tracking-wider uppercase">
            {{ exp.since }} - {{ exp.until }}
          </span>
        </div>

        <!-- Date Pill (Mobile) -->
        <div class="md:hidden ml-14 mb-2 self-start">
          <span class="inline-block py-1 px-3.5 rounded-full bg-purple-50/80 dark:bg-purple-950/50 border border-purple-200/40 dark:border-purple-800/40 text-purple-600 dark:text-purple-300 text-[11px] font-semibold uppercase">
            {{ exp.since }} - {{ exp.until }}
          </span>
        </div>

        <!-- Soft Glassmorphism Experience Card -->
        <div 
          @click="navigateToDetail(exp.slug)"
          class="w-[calc(100%-3.5rem)] md:w-5/12 ml-14 md:ml-0 p-6 sm:p-7 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-purple-300/60 dark:hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden cursor-pointer group/card"
        >
          <!-- Soft Background Hover Gradient Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Detail Link Icon Indicator -->
          <div class="absolute top-5 right-5 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-x-1 group-hover/card:translate-x-0">
            <div class="w-7 h-7 rounded-full bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          <!-- Card Header & Company Logo -->
          <div class="flex items-start justify-between mb-4 pr-6">
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover/card:text-purple-600 dark:group-hover/card:text-purple-400 transition-colors">
                {{ exp.name }}
              </h3>
              <p class="text-purple-600 dark:text-purple-400 font-semibold text-xs sm:text-sm mt-1">
                {{ exp.job }}
              </p>
            </div>
            <div class="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800/80 flex items-center justify-center border border-slate-100 dark:border-slate-700/50 shrink-0 p-2 shadow-xs">
              <img :src="exp.logo" alt="logo" class="w-full h-full object-contain" @error="handleImageError" />
            </div>
          </div>

          <!-- Location & Type Meta Badges -->
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium mb-5">
            <span class="flex items-center gap-1.5 text-[11px]">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ exp.location }}
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-blue-50/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/40 dark:border-blue-800/40 text-[10px] font-bold uppercase tracking-wider">
              {{ exp.type }}
            </span>
          </div>

          <!-- Key Responsibilities Bullet List -->
          <ul class="space-y-2.5">
            <li 
              v-for="(item, i) in exp.description" 
              :key="i" 
              class="flex gap-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed"
            >
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400/80 dark:bg-purple-500/80 shrink-0"></span>
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

const router = useRouter();

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

const navigateToDetail = (slug: string) => {
  if (slug) {
    router.push(`/experiences/${slug}`);
  }
};

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3061/3061341.png';
};
</script>
