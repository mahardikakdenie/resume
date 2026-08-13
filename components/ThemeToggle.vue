<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Toggle Icon Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center rounded-full transition-all duration-300 pointer-events-auto shadow-xs border group"
      :class="[
        isScrolled ? 'w-8 h-8' : 'w-9 h-9 md:w-10 md:h-10',
        currentTheme === 'dark'
          ? 'bg-slate-900 border-slate-700/80 text-amber-400 hover:border-amber-400/50 hover:bg-slate-800'
          : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:text-purple-600 hover:border-purple-300 hover:bg-white'
      ]"
      :title="`Current theme: ${themeMode} (${currentTheme}). Click to change.`"
      aria-label="Toggle Theme"
    >
      <!-- Sun Icon (Light Mode) -->
      <svg
        v-if="currentTheme === 'light' && themeMode !== 'system'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500 group-hover:rotate-45"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <!-- Moon Icon (Dark Mode) -->
      <svg
        v-else-if="currentTheme === 'dark' && themeMode !== 'system'"
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500 group-hover:-rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      <!-- System/Monitor Icon (System Mode) -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-40 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl border transition-all z-50"
        :class="[
          currentTheme === 'dark'
            ? 'bg-slate-900/95 border-slate-800 text-slate-200'
            : 'bg-white/95 border-slate-200/80 text-slate-700'
        ]"
      >
        <div class="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
          Theme Mode
        </div>

        <button
          @click="selectTheme('light')"
          class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all"
          :class="[
            themeMode === 'light'
              ? 'bg-purple-500/10 text-purple-500 font-bold'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          ]"
        >
          <span class="flex items-center gap-2">
            <span>☀️</span> Light
          </span>
          <svg v-if="themeMode === 'light'" class="w-3.5 h-3.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>

        <button
          @click="selectTheme('dark')"
          class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all"
          :class="[
            themeMode === 'dark'
              ? 'bg-purple-500/10 text-purple-400 font-bold'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          ]"
        >
          <span class="flex items-center gap-2">
            <span>🌙</span> Dark
          </span>
          <svg v-if="themeMode === 'dark'" class="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>

        <button
          @click="selectTheme('system')"
          class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all"
          :class="[
            themeMode === 'system'
              ? 'bg-purple-500/10 text-purple-500 dark:text-purple-400 font-bold'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800'
          ]"
        >
          <span class="flex items-center gap-2">
            <span>💻</span> System
          </span>
          <svg v-if="themeMode === 'system'" class="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme, type ThemeMode } from '~/composables/useTheme'

defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
})

const { themeMode, currentTheme, setTheme } = useTheme()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectTheme = (mode: ThemeMode) => {
  setTheme(mode)
  isOpen.value = false
}

const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
