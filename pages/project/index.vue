<template>
  <div class="min-h-screen py-20 md:py-32 relative overflow-hidden bg-white text-left">
    <!-- Premium Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-50/40 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-[0%] right-[-10%] w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s"></div>
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 opacity-[0.03]" :style="{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Hero Section -->
      <div data-aos="fade-right" class="max-w-4xl mb-20 md:mb-32 text-left">
           <div class="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-2.5 rounded-full shadow-2xl shadow-slate-900/20 mb-10 group transition-transform hover:scale-105 active:scale-95 cursor-default">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span class="text-[10px] font-black uppercase tracking-[0.3em]">{{ $t('common.technical_library') }}</span>
           </div>
           
           <h1 class="text-[12vw] sm:text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-12">
              {{ $t('nav.projects') }}<br>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 uppercase">{{ $t('common.case_study') }}</span>
           </h1>
           
           <p class="text-xl md:text-3xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              {{ $t('projects.hero_description') }}
           </p>
      </div>

      <!-- Filter Controls -->
      <div data-aos="fade-up" class="mb-16 md:mb-24 flex flex-wrap items-center gap-4">
        <button 
          @click="activeCategory = 'all'"
          :class="[
            'px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500',
            activeCategory === 'all' ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
          ]"
        >
          All Projects
        </button>
        <button 
          v-for="cat in uniqueCategories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500',
            activeCategory === cat ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        <TransitionGroup name="list">
          <div
            v-for="(list, i) in filteredProjects"
            :key="list.link"
            data-aos="fade-up"
            :data-aos-delay="(i % 3) * 100"
            @click="navigateToProject(list.link)"
            class="group relative flex flex-col h-full cursor-pointer text-left"
          >
            <!-- Card Wrapper with Hover Elevation -->
            <div class="relative bg-white rounded-[3rem] border border-slate-100 overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.15)] group-hover:-translate-y-6 flex flex-col h-full">
              
              <!-- Image Container -->
              <div class="relative overflow-hidden aspect-[4/3] bg-slate-50 flex items-center justify-center p-12">
                  <!-- Dynamic Status Badge -->
                  <div class="absolute top-8 left-8 z-20 px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl font-black text-[9px] text-slate-900 shadow-xl shadow-slate-200/50 uppercase tracking-[0.2em]">
                    {{ list?.badge ?? 'Production' }}
                  </div>
                  
                  <img
                    :src="list.image"
                    :alt="list.name"
                    class="w-full h-full object-contain transition-all duration-[1500ms] group-hover:scale-110 group-hover:rotate-2"
                    @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/f8fafc/6366f1?text=Preview'"
                  />
                  
                  <!-- Hover Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>

              <!-- Content Section -->
              <div class="p-10 md:p-12 flex-grow flex flex-col text-left">
                <div class="flex items-center justify-between mb-8">
                    <span class="text-[9px] font-black text-purple-600 uppercase tracking-[0.2em] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100/50">
                        {{ list.type }}
                    </span>
                    <span class="text-[10px] font-black text-slate-300 tracking-widest">{{ list.year || '2024' }}</span>
                </div>
                
                <h3 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-purple-600 transition-colors tracking-tighter leading-none">
                  {{ list.name }}
                </h3>
                
                <p class="text-slate-500 text-base md:text-lg line-clamp-3 mb-10 leading-relaxed font-medium">
                  {{ $t(list.description) }}
                </p>

                <!-- Technical Footer -->
                <div class="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 overflow-hidden">
                        <div v-for="tool in list.tools?.slice(0, 3)" :key="tool" 
                          class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors group-hover:bg-purple-50 group-hover:border-purple-100"
                        >
                            <span class="text-[8px] font-black text-slate-400 group-hover:text-purple-600 uppercase tracking-tighter">{{ tool }}</span>
                        </div>
                        <span v-if="list.tools && list.tools.length > 3" class="text-[10px] font-black text-slate-300 ml-2">+{{ list.tools.length - 3 }}</span>
                    </div>
                    
                    <div class="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-purple-600 shadow-2xl shadow-slate-900/20 group-hover:shadow-purple-500/40 transition-all duration-700 group-hover:rotate-[15deg]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects } from '@/lib/static';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const activeCategory = ref('all');

const uniqueCategories = computed(() => {
  const cats = projects.map(p => p.type);
  return [...new Set(cats)].sort();
});

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(p => p.type === activeCategory.value);
});

function navigateToProject(link: string) {
	useRouter().push(`/project/${link}`);
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

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
</style>

