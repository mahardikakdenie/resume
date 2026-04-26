<template>
  <div class="prose-pre-wrapper my-8 relative group">
    <!-- Language Badge (Minimalist) -->
    <div v-if="language" class="absolute top-3 right-4 px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest z-10">
      {{ language }}
    </div>

    <!-- Code Container -->
    <div class="relative bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden hover:border-purple-300 transition-colors duration-300">
      <!-- Subtle Gradient Accent -->
      <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400 opacity-20"></div>
      
      <!-- Pre Tag -->
      <pre :class="$props.class" class="!m-0 !p-6 !bg-transparent overflow-x-auto custom-scrollbar relative z-10"><slot /></pre>
      
      <!-- Copy Button -->
      <button 
        @click="copyCode"
        class="absolute bottom-3 right-3 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-purple-600 hover:border-purple-200 hover:shadow-sm active:scale-95"
      >
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  class: { type: String, default: null }
})

const copied = ref(false)

const copyCode = () => {
  if (props.code) {
    navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<style>
/* Reset Prose Styles */
.prose pre {
  background-color: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

/* Typography */
.prose-pre-wrapper pre code {
  @apply block font-mono text-[14px] leading-[1.6] text-slate-700;
  font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
}

/* Syntax Highlighting overrides for Soft Look */
.shiki {
  background-color: transparent !important;
}

/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-200 rounded-full hover:bg-slate-300;
}
</style>
