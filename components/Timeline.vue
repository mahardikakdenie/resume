<template>
  <div class="relative">
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2 rounded-full opacity-30"></div>
    
    <div class="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-30"></div>

    <div class="space-y-12 md:space-y-24">
      
      <!-- Who's Next Node & Premium Glassmorphism Card (At the Very Top) -->
      <div class="relative flex flex-col md:flex-row items-center justify-between group" data-aos="zoom-in">
        
        <!-- Glowing Pulse Node -->
        <div class="absolute left-8 md:left-1/2 w-6 h-6 bg-slate-900 border-4 border-purple-500 rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(168,85,247,0.8)] flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="w-2 h-2 rounded-full bg-purple-400"></span>
        </div>

        <div class="hidden md:block w-5/12 text-right pr-12">
             <span class="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-300/40 shadow-sm text-purple-700 font-black text-sm tracking-widest uppercase">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {{ $t('experience_page.whos_next_subtitle') }}
             </span>
        </div>

        <div class="md:hidden ml-16 mb-2 self-start">
             <span class="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {{ $t('experience_page.whos_next_subtitle') }}
             </span>
        </div>

        <div class="w-[calc(100%-4rem)] md:w-5/12 ml-16 md:ml-0 p-8 md:p-10 bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden text-left group">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 animate-pulse"></div>
            <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500 pointer-events-none"></div>

            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                {{ $t('experience_page.whos_next_badge') }}
            </div>

            <h3 class="text-3xl font-black text-white tracking-tight mb-3">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-300">
                    {{ $t('experience_page.whos_next_title') }}
                </span>
            </h3>

            <p class="text-slate-300 text-sm leading-relaxed font-normal mb-8">
                {{ $t('experience_page.whos_next_philosophy') }}
            </p>

            <button 
                @click="router.push('/contact')"
                class="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
                <span>{{ $t('experience_page.whos_next_cta') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>

      </div>

      <!-- Chronological Experience Timeline Items (offset index % 2 !== 0 for proper side swapping) -->
      <div 
        v-for="(exp, index) in experiences" 
        :key="index"
        class="relative flex flex-col md:flex-row items-center justify-between group"
        :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
      >
        
        <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-150 group-hover:border-purple-600 transition-all duration-300"></div>

        <div class="hidden md:block w-5/12 text-center" :class="index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'">
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
            :data-aos="index % 2 !== 0 ? 'fade-right' : 'fade-left'"
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
