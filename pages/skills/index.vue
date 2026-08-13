<template>
  <div class="min-h-screen py-16 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
    <!-- Ambient Dynamic Background Glowing Orbs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 4s"></div>
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]" :style="{ backgroundImage: 'radial-gradient(#a855f7 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }"></div>
    </div>

    <div class="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
      <!-- Header & Hero Section -->
      <div data-aos="fade-down" class="text-left mb-12 max-w-4xl">
        <!-- Live Status Pill -->
        <div class="inline-flex items-center gap-3 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md text-white px-5 py-2 rounded-full border border-slate-700/50 shadow-xl mb-8 transition-all hover:scale-105 cursor-default">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          <span class="text-[11px] font-black uppercase tracking-[0.25em] text-purple-300">
            {{ $t('common.technical_library') }} & {{ $t('common.knowledge_base') }}
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight mb-8">
          {{ $t('nav.skills') }} &<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-500 uppercase">
            {{ $t('common.knowledge_base') }}
          </span>
        </h1>

        <p class="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-normal mb-10">
          Comprehensive overview of software engineering skills, frameworks, databases, and architectural proficiencies.
        </p>

        <!-- Quick Metrics Overview Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            <div class="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400">{{ abilities.length }}+</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Total Skills</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            <div class="text-2xl md:text-3xl font-black text-pink-600 dark:text-pink-400">{{ getCategoryCount('frontend') }}</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Frontend</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            <div class="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400">{{ getCategoryCount('backend') }}</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Backend</div>
          </div>
          <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            <div class="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">{{ getCategoryCount('database') + getCategoryCount('cloud') }}</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Data & Cloud</div>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Bar & Search / Filter Controls -->
      <div data-aos="fade-up" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 mb-12 shadow-xl shadow-slate-900/5">
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          <!-- Search Bar Input -->
          <div class="relative flex-1 min-w-[280px]">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search skill (e.g. React, Golang, PostgreSQL)..."
              class="w-full pl-11 pr-10 py-3.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              :class="[
                'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 border',
                selectedCategory === cat.id
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20 scale-105'
                  : 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
              ]"
            >
              <span>{{ cat.label }}</span>
              <span
                :class="[
                  'px-2 py-0.5 rounded-full text-[10px] font-black',
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700/80 text-slate-500 dark:text-slate-400'
                ]"
              >
                {{ getCategoryCount(cat.id) }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Skills Premium Card Grid -->
      <div v-if="filteredAbilities.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6">
        <NuxtLink
          v-for="(ability, index) in filteredAbilities"
          :key="ability.key"
          :to="`/skills/${ability.key}`"
          data-aos="fade-up"
          :data-aos-delay="(index % 12) * 40"
          class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:border-purple-400/60 dark:hover:border-purple-500/60 text-center overflow-hidden min-h-[240px]"
        >
          <!-- Hover Ambient Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Dynamic Top Accent Line -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Top Badge / Category Tag -->
          <div class="w-full flex items-center justify-between relative z-10 mb-2">
            <span class="text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/60 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors border border-slate-200/50 dark:border-slate-700/50">
              {{ getSkillCategory(ability.key) }}
            </span>
            <span v-if="ability.yearExperience" class="text-[9px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              {{ ability.yearExperience }} Yrs
            </span>
          </div>

          <!-- Icon Container with Glow & Ring -->
          <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-inner group-hover:shadow-lg group-hover:shadow-purple-500/15 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 my-3 p-3">
            <img
              :src="getSkillImage(ability)"
              class="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-6"
              :alt="ability.title"
              @error="handleImageError"
              loading="lazy"
            />
          </div>

          <!-- Title & Experience Proficiency -->
          <div class="relative z-10 w-full mt-2">
            <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight leading-snug line-clamp-1 uppercase">
              {{ ability.title }}
            </h3>

            <div class="mt-2.5 flex items-center justify-center gap-1 text-[10px] font-bold text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
              <span>Explore Tech</span>
              <svg class="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State for Search / Filter -->
      <div v-else class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-12 text-center max-w-xl mx-auto shadow-xl">
        <div class="w-16 h-16 bg-purple-100 dark:bg-purple-950/60 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 dark:text-purple-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">No skills found</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">
          No technology matched your filter criteria "<span class="font-semibold text-purple-600 dark:text-purple-400">{{ searchQuery }}</span>".
        </p>
        <button
          @click="resetFilters"
          class="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all uppercase tracking-wider cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { skillDatas } from '@/lib/static';
import { type ISkillDatas } from '@/lib/staticInterface';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const abilities = ref<Array<ISkillDatas>>(skillDatas);

const searchQuery = ref('');
const selectedCategory = ref('all');

const categories = [
  { id: 'all', label: 'All Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'cloud', label: 'Cloud & Tools' }
];

useSeoMeta({
  title: () => `${t('nav.skills')} | Mahardika Portfolio`,
  description: () => `${t('nav.skills')} & ${t('common.knowledge_base')} of Mahardika Kessuma Denie.`
});

const skillCategoryMap: Record<string, string> = {
  react: 'frontend',
  vue: 'frontend',
  html5: 'frontend',
  css3: 'frontend',
  javascript: 'frontend',
  typescript: 'frontend',
  'tailwind-css': 'frontend',
  bootstrap: 'frontend',
  sass: 'frontend',
  nodejs: 'backend',
  expressjs: 'backend',
  'go-lang': 'backend',
  php: 'backend',
  laravel: 'backend',
  codeIgniter: 'backend',
  mysql: 'database',
  pgsql: 'database',
  mongoodb: 'database',
  vercell: 'cloud'
};

const getSkillCategory = (key: string): string => {
  return skillCategoryMap[key] || 'general';
};

const getCategoryCount = (categoryId: string): number => {
  if (categoryId === 'all') return abilities.value.length;
  return abilities.value.filter(skill => getSkillCategory(skill.key) === categoryId).length;
};

const filteredAbilities = computed(() => {
  return abilities.value.filter(skill => {
    const matchesCategory = selectedCategory.value === 'all' || getSkillCategory(skill.key) === selectedCategory.value;
    const matchesQuery = !searchQuery.value || 
      skill.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      skill.key.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesQuery;
  });
});

const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
};

const skillIconMap: Record<string, string> = {
  react: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  vue: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  html5: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  css3: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  javascript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  typescript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'tailwind-css': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  bootstrap: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  sass: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  nodejs: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  expressjs: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'go-lang': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
  php: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  laravel: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
  codeIgniter: 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-3-1175229.png',
  mysql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  pgsql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  mongoodb: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  vercell: 'https://assets.vercel.app/image/upload/v1588805858/repositories/vercel/logo.png'
};

const getSkillImage = (item: ISkillDatas) => {
  if (item.key && skillIconMap[item.key]) return skillIconMap[item.key];
  if (item.thumb && item.thumb.startsWith('http')) return item.thumb;
  return 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

const handleImageError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
