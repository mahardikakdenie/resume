<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
    <div class="flex items-center gap-1.5 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-purple-500/10 text-slate-700 dark:text-slate-200">
      <!-- Command Palette Trigger -->
      <button 
        @click="handleOpenPalette"
        class="group flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400"
        title="Search Commands (Ctrl+K)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span class="hidden sm:inline">Search</span>
        <kbd class="px-1.5 py-0.5 text-[9px] font-extrabold bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 rounded-md">⌘K</kbd>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- Architecture Playground Button -->
      <button 
        @click="handleOpenArchitecture"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group"
        title="Explore System Architecture & Load Benchmarks"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 00-2 2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <span class="hidden sm:inline">Architecture</span>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- AI Recruiter Button -->
      <button 
        @click="handleOpenAiRecruiter"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group relative"
        title="Open Recruiter AI & Candidate Fast-Track"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span class="hidden sm:inline">AI Recruiter</span>
        <span class="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></span>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- Theme Switcher Direct Action -->
      <button 
        @click="handleToggleTheme"
        class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group"
        :title="`Current theme: ${themeMode} (${currentTheme}). Click to cycle.`"
      >
        <span class="text-sm group-hover:scale-110 transition-transform">
          {{ currentTheme === 'dark' ? '🌙' : '☀️' }}
        </span>
        <span class="hidden md:inline capitalize">{{ themeMode }}</span>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- Developer Console Button -->
      <button 
        @click="handleToggleConsole"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group"
        title="Toggle Developer CLI & API Playground"
      >
        <svg class="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="hidden sm:inline">Console</span>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- Sound Effects Toggle Button -->
      <button 
        @click="handleToggleSound"
        class="flex items-center gap-1.5 px-2.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group"
        :title="isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'"
      >
        <svg v-if="!isMuted" class="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <svg v-else class="h-4 w-4 text-slate-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      </button>

      <div class="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>

      <!-- Resume Button -->
      <button 
        @click="handleOpenCv"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-slate-800 transition-all text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 group"
        title="Preview Resume CV"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span class="hidden sm:inline">CV</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCommandPalette } from '~/composables/useCommandPalette'
import { useCvModal } from '~/composables/useCvModal'
import { useDeveloperConsole } from '~/composables/useDeveloperConsole'
import { useSoundEffects } from '~/composables/useSoundEffects'
import { useAiRecruiter } from '~/composables/useAiRecruiter'
import { useArchitectureModal } from '~/composables/useArchitectureModal'
import { useTheme } from '~/composables/useTheme'

const router = useRouter()
const { openPalette } = useCommandPalette()
const { openCvModal } = useCvModal()
const { toggleConsole } = useDeveloperConsole()
const { isMuted, toggleMute, playClick } = useSoundEffects()
const { openRecruiterModal } = useAiRecruiter()
const { openModal: openArchitectureModal } = useArchitectureModal()
const { themeMode, currentTheme, toggleTheme } = useTheme()

const handleOpenPalette = () => {
  playClick()
  openPalette()
}

const handleOpenArchitecture = () => {
  playClick()
  openArchitectureModal()
}

const handleOpenAiRecruiter = () => {
  playClick()
  openRecruiterModal()
}

const handleToggleTheme = () => {
  playClick()
  toggleTheme()
}

const handleToggleConsole = () => {
  playClick()
  toggleConsole()
}

const handleToggleSound = () => {
  toggleMute()
  playClick()
}

const handleOpenCv = () => {
  playClick()
  openCvModal('/cv_mahardikakdenie.pdf')
}
</script>

