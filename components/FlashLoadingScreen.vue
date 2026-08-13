<template>
  <Transition name="splash-fade">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50/95 backdrop-blur-3xl text-slate-900 overflow-hidden select-none"
    >
      <!-- Light Smooth Ambient Background Glow Effects -->
      <div class="absolute -top-32 -left-32 w-[50vw] h-[50vw] bg-gradient-to-br from-purple-300/40 via-indigo-200/30 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div class="absolute -bottom-32 -right-32 w-[50vw] h-[50vw] bg-gradient-to-tl from-blue-300/40 via-purple-200/30 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow" style="animation-delay: 2s;"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06)_0,transparent_70%)] pointer-events-none"></div>

      <!-- Center Light Glassmorphism Card Frame -->
      <div class="relative z-10 flex flex-col items-center text-center px-8 py-10 sm:py-12 bg-white/80 backdrop-blur-2xl border border-purple-100/90 rounded-[2.5rem] shadow-2xl shadow-purple-500/10 max-w-lg w-[90%] sm:w-full">
        
        <!-- Glowing Monogram Logo Badge -->
        <div class="relative mb-8 flex items-center justify-center">
          <div class="absolute inset-0 w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-400 to-blue-400 blur-xl opacity-40 animate-pulse"></div>
          <div class="relative w-20 h-20 rounded-2xl bg-white border border-purple-200/80 shadow-lg shadow-purple-500/10 flex items-center justify-center">
            <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 tracking-tighter">
              &lt;M /&gt;
            </span>
          </div>
        </div>

        <!-- Multilingual Light Theme Header Text -->
        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          {{ $t('splash.welcome_title') }}
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 font-medium mb-10 max-w-md leading-relaxed">
          {{ $t('splash.welcome_subtitle') }}
        </p>

        <!-- Dynamic Status & Progress Bar Track -->
        <div class="w-full max-w-xs space-y-3">
          <!-- Status Indicator + Percentage -->
          <div class="flex justify-between items-center text-[11px] font-mono tracking-wider">
            <span class="text-purple-700 font-bold uppercase flex items-center gap-2">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              {{ currentStatusText }}
            </span>
            <span class="text-slate-500 font-bold">{{ progress }}%</span>
          </div>

          <!-- Progress Bar Track Container -->
          <div class="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-purple-100/80 shadow-inner">
            <div 
              class="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(147,51,234,0.4)]"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Micro Footer Tagline -->
      <div class="absolute bottom-8 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
        System Active &bull; Mahardika Kessuma Denie
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const progress = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const { t } = useI18n()

const currentStatusText = computed(() => {
  if (progress.value < 40) {
    return t('splash.status_init')
  } else if (progress.value < 85) {
    return t('splash.status_loading')
  } else {
    return t('splash.status_ready')
  }
})

onMounted(() => {
  // Check if splash screen was already displayed during this browser session
  const alreadyLoaded = sessionStorage.getItem('flash_splash_shown')
  if (alreadyLoaded) {
    isVisible.value = false
    return
  }

  // Smooth loading progress simulation
  timer = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.floor(Math.random() * 8) + 4
      if (progress.value > 100) progress.value = 100
    } else {
      if (timer) clearInterval(timer)
      setTimeout(() => {
        isVisible.value = false
        sessionStorage.setItem('flash_splash_shown', 'true')
      }, 300)
    }
  }, 40)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.splash-fade-enter-active,
.splash-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.splash-fade-enter-from,
.splash-fade-leave-to {
  opacity: 0;
  transform: scale(1.03);
}
</style>
