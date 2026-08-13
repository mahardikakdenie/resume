<template>
  <div class="min-h-screen py-16 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
    <!-- Premium Ambient Glow Background -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-[40%] left-[30%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 4s"></div>
      <!-- Subtle Grid Overlay -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]" :style="{ backgroundImage: 'radial-gradient(#6366f1 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <!-- Hero Section -->
      <div data-aos="fade-down" class="max-w-4xl mb-12 md:mb-16 text-left">
        <!-- Live Status Pill -->
        <div class="inline-flex items-center gap-3 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md text-white px-5 py-2 rounded-full border border-slate-700/50 shadow-xl mb-8 transition-all hover:scale-105 cursor-default">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          <span class="text-[11px] font-black uppercase tracking-[0.25em] text-purple-300">
            {{ $t('common.technical_library') }}
          </span>
        </div>
        
        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight mb-8">
          {{ $t('nav.projects') }}<br>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 uppercase">
            {{ $t('common.case_study') }}
          </span>
        </h1>
        
        <p class="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-normal mb-10">
          {{ $t('projects.hero_description') }}
        </p>

        <!-- Stats Overview Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
          <div class="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-purple-500/50 transition-all duration-300">
            <div class="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400">{{ projects.length }}+</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Total Projects</div>
          </div>
          <div class="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-indigo-500/50 transition-all duration-300">
            <div class="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400">{{ uniqueCategories.length }}</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Domains</div>
          </div>
          <div class="p-5 rounded-2xl col-span-2 sm:col-span-1 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-blue-500/50 transition-all duration-300">
            <div class="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">{{ availableSkills.length }}+</div>
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Tech Stack Skills</div>
          </div>
        </div>
      </div>

      <!-- Controls Panel (Search + Category Filter + Skill Filter) -->
      <div data-aos="fade-up" class="mb-12 space-y-6">
        <!-- Search Input Bar & Category Pills -->
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-xl shadow-slate-900/5">
          <!-- Live Search Bar -->
          <div class="relative flex-grow max-w-md">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by project, technology, or role..."
              class="w-full pl-11 pr-10 py-3 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-650 dark:hover:text-slate-250"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Active Results Count & Reset Button -->
          <div class="flex items-center justify-between lg:justify-end gap-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
              Showing {{ filteredProjects.length }} of {{ projects.length }}
            </span>
            <button
              v-if="hasActiveFilters"
              @click="resetFilters"
              class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 hover:underline px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <!-- Domain Categories Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            @click="activeCategory = 'all'"
            :class="[
              'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border',
              activeCategory === 'all'
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-purple-600 dark:border-purple-500 shadow-lg shadow-purple-500/20'
                : 'bg-white/85 dark:bg-slate-900/85 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-850 border-slate-200/80 dark:border-slate-800'
            ]"
          >
            All Categories
          </button>
          <button
            v-for="cat in uniqueCategories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border',
              activeCategory === cat
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-purple-600 dark:border-purple-500 shadow-lg shadow-purple-500/20'
                : 'bg-white/85 dark:bg-slate-900/85 text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-850 border-slate-200/80 dark:border-slate-800'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Featured Skill Filter List (List Skill UI Improvement) -->
        <div class="p-6 rounded-3xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Filter By Technology Skill
              </span>
            </div>
            <span v-if="selectedSkill" class="text-xs font-semibold text-purple-600 dark:text-purple-400">
              Active: <span class="font-bold underline">{{ selectedSkill }}</span>
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="skill in availableSkills"
              :key="skill.key"
              @click="toggleSkillFilter(skill.key)"
              :class="[
                'group flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border',
                selectedSkill === skill.key
                  ? 'bg-purple-650 text-white border-purple-500 shadow-md shadow-purple-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-750 hover:border-purple-400 dark:hover:border-purple-500 hover:scale-105'
              ]"
            >
              <img
                v-if="skill.image"
                :src="skill.image"
                :alt="skill.title"
                class="w-4 h-4 object-contain transition-transform group-hover:scale-110"
                @error="handleImageError"
              />
              <span>{{ skill.title }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Project Grid Display (Consuming Global ProjectCard Component) -->
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <TransitionGroup name="list">
          <ProjectCard
            v-for="(list, i) in filteredProjects"
            :key="list.link"
            :project="list"
            :index="i"
            @select-skill="toggleSkillByName"
            @click-project="navigateToProject"
          />
        </TransitionGroup>
      </div>

      <!-- Empty Results State -->
      <div v-else class="text-center py-20 p-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl">
        <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
        <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6 text-sm">
          No projects match your current filter selection or search query. Try clearing your filters to view all projects.
        </p>
        <button
          @click="resetFilters"
          class="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-purple-500/25"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { projects, skillDatas } from '@/lib/static';
import { useI18n } from 'vue-i18n';
import ProjectCard from '@/components/ProjectCard.vue';

const { t } = useI18n();
const router = useRouter();

const activeCategory = ref('all');
const selectedSkill = ref('');
const searchQuery = ref('');

// Computed unique categories
const uniqueCategories = computed(() => {
  const cats = projects.map(p => p.type).filter(Boolean) as string[];
  return [...new Set(cats)].sort();
});

// Available skills for skill filter bar
const availableSkills = computed(() => {
  return skillDatas.filter(skill => 
    projects.some(p => 
      (p.skillKeys && p.skillKeys.includes(skill.key)) || 
      (p.tools && p.tools.some(t => t.toLowerCase().includes(skill.title.toLowerCase())))
    )
  );
});

// Helper to find skill details for tool tags
function getSkillData(toolName: string) {
  return skillDatas.find(s => 
    s.title.toLowerCase() === toolName.toLowerCase() ||
    s.key.toLowerCase() === toolName.toLowerCase() ||
    toolName.toLowerCase().includes(s.title.toLowerCase())
  );
}

// Filtered projects list computation
const filteredProjects = computed(() => {
  return projects.filter(project => {
    // 1. Category Filter
    if (activeCategory.value !== 'all' && project.type !== activeCategory.value) {
      return false;
    }

    // 2. Skill Filter
    if (selectedSkill.value) {
      const matchSkillKey = project.skillKeys && project.skillKeys.includes(selectedSkill.value);
      const skillObj = skillDatas.find(s => s.key === selectedSkill.value);
      const matchToolName = skillObj && project.tools && project.tools.some(t => t.toLowerCase().includes(skillObj.title.toLowerCase()));
      if (!matchSkillKey && !matchToolName) {
        return false;
      }
    }

    // 3. Search Query Filter
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim();
      const matchName = project.name.toLowerCase().includes(query);
      const matchType = project.type?.toLowerCase().includes(query);
      const matchRole = project.role?.toLowerCase().includes(query);
      const matchTools = project.tools?.some(t => t.toLowerCase().includes(query));
      const matchDesc = t(project.description).toLowerCase().includes(query);

      if (!matchName && !matchType && !matchRole && !matchTools && !matchDesc) {
        return false;
      }
    }

    return true;
  });
});

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return activeCategory.value !== 'all' || selectedSkill.value !== '' || searchQuery.value.trim() !== '';
});

// Toggle skill selection
function toggleSkillFilter(skillKey: string) {
  if (selectedSkill.value === skillKey) {
    selectedSkill.value = '';
  } else {
    selectedSkill.value = skillKey;
  }
}

// Toggle skill by tool name click
function toggleSkillByName(toolName: string) {
  const skill = getSkillData(toolName);
  if (skill) {
    toggleSkillFilter(skill.key);
  } else {
    searchQuery.value = toolName;
  }
}

// Reset all filters
function resetFilters() {
  activeCategory.value = 'all';
  selectedSkill.value = '';
  searchQuery.value = '';
}

// Navigate to project detail
function navigateToProject(link: string) {
  router.push(`/project/${link}`);
}

// Image fallback handler
function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src = 'https://placehold.co/600x400/f8fafc/6366f1?text=Project+Preview';
}

useSeoMeta({
  title: () => `${t('nav.projects')} | Mahardika Portfolio`,
  description: () => t('projects.hero_description'),
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<style scoped>
/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.5s ease;
}

/* Hide scrollbar for category pills bar */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
