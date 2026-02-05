<template>
  <div class="min-h-screen bg-white pb-20">
    
    <div v-if="project">
        <div class="relative h-[50vh] md:h-[60vh] bg-slate-900 overflow-hidden">
            <div class="absolute inset-0">
                <img 
                    :src="project.image" 
                    class="w-full h-full object-cover opacity-30 blur-sm scale-105"
                    @error="handleImageError"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>

            <div class="container mx-auto px-6 h-full flex flex-col justify-end pb-16 relative z-10">
                <button 
                    @click="$router.back()" 
                    class="absolute top-8 left-6 md:left-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Projects
                </button>

                <div data-aos="fade-up">
                    <span class="inline-block px-3 py-1 mb-4 rounded border border-purple-400/30 bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                        {{ project.type }}
                    </span>
                    <h1 class="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{{ project.name }}</h1>
                    
                    <div class="flex flex-wrap gap-4 mt-6">
                        <a 
                            v-if="project.url" 
                            :href="project.url" 
                            target="_blank" 
                            class="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2"
                        >
                            View Live Site
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                        <button class="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                            Scroll for Details
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-6 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div class="lg:col-span-8 space-y-12">
                    
                    <div data-aos="fade-up">
                        <h2 class="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
                        <p class="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                            {{ project.description }}
                        </p>
                    </div>

                    <div v-if="project.images && project.images.length > 0" data-aos="fade-up">
                        <h2 class="text-2xl font-bold text-slate-900 mb-6">Gallery</h2>
                        <div class="space-y-8">
                            <div v-for="(img, i) in project.images" :key="i" class="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                                <img :src="img" class="w-full h-auto" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                    <div v-else-if="project.image" data-aos="fade-up">
                         <h2 class="text-2xl font-bold text-slate-900 mb-6">Preview</h2>
                         <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                             <img :src="project.image" class="w-full h-auto" />
                         </div>
                    </div>

                </div>

                <div class="lg:col-span-4">
                    <div class="sticky top-24 space-y-8">
                        
                        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100" data-aos="fade-left">
                            <h3 class="font-bold text-slate-900 mb-6 text-lg">Technologies Used</h3>
                            <div class="flex flex-wrap gap-2">
                                <span 
                                    v-for="tech in project.tools" 
                                    :key="tech"
                                    class="px-3 py-1.5 bg-white text-slate-600 text-sm font-semibold rounded-lg border border-slate-200 shadow-sm"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-500/5" data-aos="fade-left" data-aos-delay="100">
                             <h3 class="font-bold text-slate-900 mb-6 text-lg">Project Info</h3>
                             <ul class="space-y-4 text-sm">
                                 <li class="flex justify-between border-b border-slate-50 pb-3">
                                     <span class="text-slate-500">Status</span>
                                     <span class="font-bold text-slate-900">{{ project.badge || 'Completed' }}</span>
                                 </li>
                                 <li class="flex justify-between border-b border-slate-50 pb-3">
                                     <span class="text-slate-500">Platform</span>
                                     <span class="font-bold text-slate-900">{{ project.type }}</span>
                                 </li>
                                 <li class="flex justify-between border-b border-slate-50 pb-3">
                                     <span class="text-slate-500">Live URL</span>
                                     <a v-if="project.url" :href="project.url" target="_blank" class="font-bold text-purple-600 hover:underline truncate max-w-[150px]">Link &rarr;</a>
                                     <span v-else class="font-bold text-slate-400">Private</span>
                                 </li>
                             </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>

    <div v-else class="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 class="text-3xl font-bold text-slate-300 mb-4">Project Not Found</h2>
        <button @click="$router.push('/project')" class="px-6 py-3 bg-purple-600 text-white rounded-full font-bold">Back to Gallery</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/lib/static';

const route = useRoute();
const slug = route.params.slug as string;

// Cari project berdasarkan 'link' (yang berfungsi sebagai slug di data static)
const project = computed(() => projects.find((p) => p.link === slug));

const handleImageError = (e: Event) => {
    (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/1e293b/475569?text=No+Preview';
};
</script>
