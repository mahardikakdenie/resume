<template>
  <section class="py-24 lg:py-36 relative z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 text-left transition-colors duration-500">
    <!-- Ambient Background Lighting Orbs -->
    <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none translate-x-1/3"></div>
    <div class="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-600/10 dark:bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -translate-x-1/3"></div>
    
    <!-- Subtle Grid Pattern Background Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-20 text-left" data-aos="fade-up">
        <!-- Top Pill Tag -->
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></span>
          <span class="text-[11px] font-black uppercase tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
            {{ $t('projects.selected_works') }}
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          {{ $t('projects.featured_projects') }}
        </h2>
        <p class="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl">
          Exploration of recent production-grade applications, custom SaaS platforms, and interactive digital experiences.
        </p>
      </div>

      <!-- Featured Projects List -->
      <div class="flex flex-col gap-20 md:gap-28">
        <div 
          v-for="(project, index) in featuredProjects" 
          :key="project.link || index"
          class="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center text-left"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Project Image Showcase (Alternating Grid Order) -->
          <div :class="`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : 'order-1'}`">
            <div class="relative p-2.5 sm:p-3 rounded-[2.8rem] bg-gradient-to-br from-white/90 via-purple-500/10 to-white/40 dark:from-slate-800/90 dark:via-purple-500/20 dark:to-slate-900/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/60 shadow-2xl shadow-purple-950/10 transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-purple-500/20">
              
              <!-- Image Container -->
              <div class="relative rounded-[2.2rem] overflow-hidden bg-slate-900 aspect-[16/10]">
                <!-- Dark Overlay Gradient on Hover -->
                <div class="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors duration-500 z-10"></div>
                
                <img 
                  :src="project.image" 
                  :alt="project.name" 
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/800x500/png?text=Project+Preview'"
                />
                
                <!-- Category Badge -->
                <div :class="`absolute top-5 ${index % 2 === 1 ? 'right-5' : 'left-5'} z-20 px-4 py-2 bg-slate-950/80 backdrop-blur-xl border border-white/20 rounded-full text-white font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2`">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>{{ project.type }}</span>
                </div>

                <!-- Year & Role Badge (Bottom Overlay Reveal on Hover) -->
                <div v-if="project.role || project.year" class="absolute bottom-5 left-5 right-5 z-20 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-between text-white text-xs">
                  <span class="font-bold text-slate-300">{{ project.role || 'Fullstack Developer' }}</span>
                  <span class="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 font-mono text-[11px] border border-purple-500/30">{{ project.year || '2024' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Details (Alternating Text Alignment & Order) -->
          <div :class="`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : 'order-2 text-left'}`">
            
            <!-- Index Pill / Tag -->
            <div :class="`inline-flex items-center gap-2 mb-3 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`">
              <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">0{{ index + 1 }}</span>
              <span class="w-8 h-[1px] bg-purple-300 dark:bg-purple-700"></span>
            </div>

            <!-- Project Title -->
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
              {{ project.name }}
            </h3>

            <!-- Project Description -->
            <p class="text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-medium">
              {{ $t(project.description) }}
            </p>
            
            <!-- Tech Stack Tools Pills -->
            <div :class="`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'md:justify-end' : 'justify-start'}`">
              <span 
                v-for="tool in project.tools" 
                :key="tool"
                class="px-3.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-xl shadow-sm hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
              >
                {{ tool }}
              </span>
            </div>

            <!-- Action Link Buttons -->
            <div :class="`flex items-center gap-4 ${index % 2 === 1 ? 'md:justify-end' : 'justify-start'}`">
              <NuxtLink 
                :to="`/project/${project.link}`" 
                class="inline-flex items-center gap-3 text-xs font-black text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-all group/link uppercase tracking-widest"
              >
                <span>{{ $t('common.view_project') }}</span>
                <div class="w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover/link:bg-gradient-to-r group-hover/link:from-purple-600 group-hover/link:to-indigo-600 group-hover/link:text-white group-hover/link:border-transparent transition-all duration-300 transform group-hover/link:rotate-45 shadow-purple-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </NuxtLink>

              <!-- Live Demo External Link (If available) -->
              <a 
                v-if="project.url" 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-11 h-11 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40 rounded-xl hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 shadow-sm"
                title="Live Preview"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
      
      <!-- Bottom CTA Archive Button -->
      <div class="mt-24 text-center" data-aos="fade-up">
        <button 
          @click="$router.push('/project')" 
          class="px-10 py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-2xl shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] transition-all duration-300 active:scale-95 border border-purple-400/30"
        >
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
