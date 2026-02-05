<template>
    <div class="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col gap-4 items-center after:content-[''] after:w-[2px] after:h-24 after:bg-gradient-to-b after:from-purple-600 after:to-transparent">
        
        <a href="https://linkedin.com" target="_blank" class="group relative">
            <div class="w-12 h-12 rounded-full bg-white border border-blue-100 shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-blue-500/30 group-hover:border-blue-500">
                <img :src="linkedin" alt="LinkedIn" class="w-5 h-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span class="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                LinkedIn
                <span class="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 transform rotate-45"></span>
            </span>
        </a>

        <a href="https://github.com" target="_blank" class="group relative">
            <div class="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-purple-900/30 group-hover:border-slate-900">
                <img :src="github" alt="GitHub" class="w-5 h-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span class="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                GitHub
                <span class="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 transform rotate-45"></span>
            </span>
        </a>

        <a href="mailto:dikamahar884@gmail.com" class="group relative">
            <div class="w-12 h-12 rounded-full bg-white border border-red-100 shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-red-500/30 group-hover:border-red-500">
                <img :src="email" alt="Email" class="w-5 h-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span class="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                Email Me
                <span class="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 transform rotate-45"></span>
            </span>
        </a>

        <a href="/CV_MAHARDIKA_KESSUMA_DENIE_07_DESEMBER_2025.pdf" target="_blank" class="group relative mt-2">
             <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/40 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 animate-pulse-slow">
                <span class="font-bold text-xs">CV</span>
            </div>
             <span class="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                Download CV
                <span class="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-600 transform rotate-45"></span>
            </span>
        </a>

    </div>
</template>

<script setup lang="ts">
import linkedin from '@/assets/linkedin.svg';
import github from '@/assets/github.svg';
import email from '@/assets/email.svg';
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
