<template>
  <div class="min-h-screen py-20 relative overflow-hidden bg-white text-left">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Hero Section -->
      <div data-aos="fade-right" class="max-w-4xl mb-24 text-left">
           <div class="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-2 rounded-full shadow-sm mb-8">
              <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{{ $t('common.technical_library') }}</span>
           </div>
           <h1 class="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-10">
              {{ $t('nav.projects') }}<br>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 uppercase">{{ $t('common.case_study') }}</span>
           </h1>
           <p class="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
              {{ $t('projects.hero_description') }}
           </p>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="(list, i) in lists"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
          @click="navigateToProject(list.link)"
          class="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-4 cursor-pointer flex flex-col h-full text-left"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-64 bg-slate-50 flex items-center justify-center p-8">
              <!-- Badge -->
              <div class="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md border border-white/50 rounded-full font-black text-[9px] text-slate-800 shadow-lg uppercase tracking-widest">
                {{ list?.badge ?? 'Worked' }}
              </div>
              <img
                :src="list.image"
                :alt="list.name"
                class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/f8fafc/6366f1?text=Preview'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <!-- Content -->
          <div class="p-10 flex-grow flex flex-col text-left">
            <div class="flex items-center justify-between mb-4 text-left">
                <span class="text-[9px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    {{ list.type }}
                </span>
                <span class="text-[10px] font-bold text-slate-300">{{ list.year || '2024' }}</span>
            </div>
            
            <h3 class="text-2xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors tracking-tight text-left">
              {{ list.name }}
            </h3>
            
            <p class="text-slate-500 text-base line-clamp-3 mb-10 leading-relaxed font-medium text-left">
              {{ $t(list.description) }}
            </p>

            <div class="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                <div class="flex -space-x-2">
                    <div v-for="tool in list.tools?.slice(0, 3)" :key="tool" class="w-8 h-8 rounded-lg bg-slate-50 border border-white flex items-center justify-center shadow-sm relative group/tool">
                        <span class="text-[8px] font-black text-slate-400">{{ tool.slice(0, 2) }}</span>
                    </div>
                </div>
                <div class="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-purple-600 transition-all duration-500 group-hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '@/lib/static';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const lists = ref(projects);

function navigateToProject(link: string) {
	useRouter().push(`/project/${link}`);
}

useSeoMeta({
	title: () => `${t('nav.projects')} | Mahardika Portfolio`,
	description: () => t('projects.hero_description'),
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
