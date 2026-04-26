<template>
  <section class="py-32 bg-slate-50 text-left">
    <div class="container mx-auto px-6 md:px-12 lg:px-24">
      
      <div class="max-w-2xl mb-20 text-left" data-aos="fade-up">
           <h4 class="text-purple-600 font-bold uppercase tracking-widest mb-4 text-[10px] flex items-center gap-3 before:content-[''] before:w-8 before:h-[2px] before:bg-purple-600 uppercase">{{ $t('projects.selected_works') }}</h4>
           <h2 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">{{ $t('projects.featured_projects') }}</h2>
      </div>

      <div class="flex flex-col gap-24 md:gap-32">
        <div 
          v-for="(project, index) in featuredProjects" 
          :key="index"
          class="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center text-left"
          data-aos="fade-up"
        >
          <div :class="`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : 'order-1'}`">
             <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 aspect-[16/10] transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-purple-500/20 text-left">
                 <div class="absolute inset-0 bg-slate-900/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                 <img 
                   :src="project.image" 
                   :alt="project.name" 
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                   @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/800x500/png?text=Project+Preview'"
                 />
                 <div :class="`absolute top-6 ${index % 2 === 1 ? 'right-6' : 'left-6'} z-20 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full font-black text-[10px] text-slate-800 shadow-lg uppercase tracking-widest text-left` ">
                   {{ project.type }}
                 </div>
             </div>
          </div>

          <div :class="`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right text-right' : 'order-2 text-left'}`">
            <h3 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-purple-600 transition-colors tracking-tight text-left">
              {{ project.name }}
            </h3>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed font-medium text-left">
              {{ $t(project.description) }}
            </p>
            
            <div :class="`flex flex-wrap gap-3 mb-10 ${index % 2 === 1 ? 'md:justify-end justify-end' : 'justify-start'}`">
              <span 
                v-for="tool in project.tools" 
                :key="tool"
                class="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest rounded-xl"
              >
                {{ tool }}
              </span>
            </div>

            <NuxtLink 
              :to="`/project/${project.link}`" 
              :class="`inline-flex items-center gap-3 text-sm font-black text-slate-900 hover:text-purple-600 transition-all group/link uppercase tracking-widest ${index % 2 === 1 ? 'flex-row-reverse' : ''}`"
            >
              <span>{{ $t('common.view_project') }}</span>
              <div class="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover/link:bg-purple-600 group-hover/link:text-white transition-all duration-500 transform group-hover/link:rotate-45 group-hover/link:shadow-xl group-hover/link:shadow-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </NuxtLink>
          </div>
        </div>

      </div>
      
      <div class="mt-24 text-center" data-aos="fade-up">
          <button @click="$router.push('/project')" class="px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 active:scale-95">
              {{ $t('projects.view_all_archives') }}
          </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/lib/static';
const featuredProjects = projects.slice(0, 3);
</script>
