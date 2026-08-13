<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
    <div class="flex items-center gap-1.5 p-2 rounded-full bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-xl shadow-purple-500/10 text-slate-700">
      <!-- Command Palette Trigger -->
      <button 
        @click="handleOpenPalette"
        class="group flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700"
        title="Search Commands (Ctrl+K)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span class="hidden sm:inline">Search</span>
        <kbd class="px-1.5 py-0.5 text-[9px] font-extrabold bg-purple-50 text-purple-700 border border-purple-200 rounded-md">⌘K</kbd>
      </button>

      <div class="w-px h-4 bg-slate-200"></div>

      <!-- AI Recruiter Button -->
      <button 
        @click="handleOpenAiRecruiter"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700 group relative"
        title="Open AI Recruiter & Tech Architecture Explorer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span class="hidden sm:inline">AI Recruiter</span>
        <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
      </button>

      <div class="w-px h-4 bg-slate-200"></div>

      <!-- Developer Console Button -->
      <button 
        @click="handleToggleConsole"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700 group"
        title="Toggle Developer CLI & API Playground"
      >
        <svg class="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="hidden sm:inline">Console</span>
      </button>

      <div class="w-px h-4 bg-slate-200"></div>

      <!-- Sound Effects Toggle Button -->
      <button 
        @click="handleToggleSound"
        class="flex items-center gap-1.5 px-2.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700 group"
        :title="isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'"
      >
        <svg v-if="!isMuted" class="h-4 w-4 text-emerald-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <svg v-else class="h-4 w-4 text-slate-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      </button>

      <div class="w-px h-4 bg-slate-200"></div>

      <!-- Resume Button -->
      <button 
        @click="handleOpenCv"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700 group"
        title="Preview Resume CV"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span class="hidden sm:inline">CV</span>
      </button>

      <!-- Contact Quick Action -->
      <button 
        @click="handleContact"
        class="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-purple-50 transition-all text-xs font-bold text-slate-600 hover:text-purple-700 group"
        title="Contact Me"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-pink-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="hidden sm:inline">Hire</span>
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

const router = useRouter()
const { openPalette } = useCommandPalette()
const { openCvModal } = useCvModal()
const { toggleConsole } = useDeveloperConsole()
const { isMuted, toggleMute, playClick } = useSoundEffects()
const { openRecruiterModal } = useAiRecruiter()

const handleOpenPalette = () => {
  playClick()
  openPalette()
}

const handleOpenAiRecruiter = () => {
  playClick()
  openRecruiterModal()
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

const handleContact = () => {
  playClick()
  router.push('/contact')
}
</script>
