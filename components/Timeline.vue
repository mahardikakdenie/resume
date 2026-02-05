<template>
  <div class="relative">
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2 rounded-full opacity-30"></div>
    
    <div class="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-30"></div>

    <div class="space-y-12 md:space-y-24">
      <div 
        v-for="(exp, index) in experiences" 
        :key="index"
        class="relative flex flex-col md:flex-row items-center justify-between group"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
      >
        
        <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-150 group-hover:border-purple-600 transition-all duration-300"></div>

        <div class="hidden md:block w-5/12 text-center" :class="index % 2 !== 0 ? 'text-left pl-12' : 'text-right pr-12'">
             <span class="inline-block py-2 px-6 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm text-purple-700 font-bold text-sm tracking-widest uppercase" data-aos="fade-in">
                {{ exp.since }} - {{ exp.until }}
             </span>
        </div>

        <div class="md:hidden ml-16 mb-2 self-start">
             <span class="inline-block py-1 px-4 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase">
                {{ exp.since }} - {{ exp.until }}
             </span>
        </div>

        <div 
            @click="navigateToDetail(exp.slug)"
            class="w-[calc(100%-4rem)] md:w-5/12 ml-16 md:ml-0 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-pointer"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>

            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="text-xl font-black text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">{{ exp.name }}</h3>
                    <p class="text-purple-600 font-bold text-base mt-1">{{ exp.job }}</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                     <img :src="exp.logo" alt="logo" class="w-6 h-6 object-contain opacity-80" />
                </div>
            </div>

            <div class="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {{ exp.location }}
                </span>
                <span class="px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                    {{ exp.type }}
                </span>
            </div>

            <ul class="space-y-3">
                <li 
                    v-for="(item, i) in exp.description" 
                    :key="i" 
                    class="flex gap-3 text-slate-600 text-sm leading-relaxed"
                >
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
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
</script>
