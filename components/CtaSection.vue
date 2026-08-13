<template>
  <section class="relative py-28 md:py-36 bg-slate-50/70 overflow-hidden text-left">
    <!-- Ambient Background Light Orbs & Grid Accent -->
    <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/20 via-pink-500/15 to-transparent rounded-full blur-[130px] animate-pulse-slow pointer-events-none"></div>
    <div class="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/20 via-indigo-500/15 to-transparent rounded-full blur-[120px] animate-float-slow pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Outer Glassmorphism Card Frame with Gradient Border Aura -->
      <div 
        data-aos="zoom-in-up" 
        data-aos-duration="1000"
        class="relative overflow-hidden rounded-[3rem] sm:rounded-[3.5rem] p-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 shadow-2xl shadow-purple-950/10 group"
      >
        <!-- Inner Card Content Container -->
        <div class="relative overflow-hidden rounded-[3.4rem] bg-gradient-to-br from-white/90 via-white/70 to-slate-50/80 backdrop-blur-2xl p-8 sm:p-14 md:p-20 text-center md:text-left border border-white/80">
          <!-- Subtle Grainy Texture Overlay -->
          <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay pointer-events-none"></div>

          <div class="relative z-10 max-w-4xl mx-auto md:mx-0">
             <!-- Availability Status Badge -->
             <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-emerald-200/80 shadow-sm mb-8 backdrop-blur-md">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span class="text-[10px] sm:text-[11px] font-black text-slate-700 tracking-widest uppercase">
                  {{ $t('cta.badge') }}
                </span>
             </div>

             <!-- Main CTA Headline -->
             <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.08] tracking-tight text-center md:text-left">
                {{ $t('cta.title_1') }} <br class="hidden md:block">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 font-black">
                  {{ $t('cta.title_2') }}
                </span>
             </h2>

             <!-- Supporting Description -->
             <p class="text-base sm:text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium text-center md:text-left max-w-2xl">
                {{ $t('cta.description_1') }} <br class="hidden md:block">
                {{ $t('cta.description_2', { reality: '' }) }} 
                <span class="text-slate-900 font-black decoration-wavy decoration-2 underline decoration-purple-500/80 underline-offset-4">
                  {{ $t('cta.reality') }}
                </span>
             </p>

             <!-- Interactive CTA Action Buttons -->
             <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mb-12">
                <!-- Primary Action Button -->
                <button 
                  @click="$router.push('/contact')" 
                  class="group relative w-full sm:w-auto px-9 py-4 sm:px-10 sm:py-5 bg-slate-900 text-white text-[11px] font-black rounded-2xl overflow-hidden shadow-xl shadow-purple-950/20 hover:shadow-2xl hover:shadow-purple-600/30 hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-[0.2em]"
                >
                    <!-- Shimmer Sweep Effect -->
                    <div class="absolute -inset-full top-0 w-1/2 h-full z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine"></div>
                    <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <span class="relative z-10 flex items-center justify-center gap-3">
                      {{ $t('cta.start_conversation') }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                </button>
                
                <!-- Direct Email Pill & Quick Copy Interaction -->
                <div class="relative w-full sm:w-auto">
                  <button 
                    @click="copyEmail" 
                    type="button"
                    class="w-full sm:w-auto px-7 py-4 sm:py-5 rounded-2xl bg-white/80 hover:bg-white border border-purple-100/80 hover:border-purple-300 shadow-md hover:shadow-xl text-[11px] font-black text-slate-700 hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest group cursor-pointer"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     <span>{{ $t('cta.email_directly') }}</span>
                     <span class="text-xs text-slate-400 group-hover:text-purple-500 transition-colors font-mono">dikamahar884@gmail.com</span>
                  </button>

                  <!-- Copied Toast Feedback Badge -->
                  <Transition name="fade">
                    <div 
                      v-if="copied" 
                      class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-[10px] font-mono font-bold rounded-lg shadow-lg flex items-center gap-1.5 border border-slate-700 pointer-events-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied to clipboard!
                    </div>
                  </Transition>
                </div>
             </div>

             <!-- Trust & Quality Micro Indicators -->
             <div class="pt-8 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                <div class="flex items-center gap-2.5 text-slate-500 justify-center md:justify-start">
                  <span class="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span class="text-xs font-semibold tracking-wide">Fast Response (&lt; 24h)</span>
                </div>

                <div class="flex items-center gap-2.5 text-slate-500 justify-center md:justify-start">
                  <span class="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </span>
                  <span class="text-xs font-semibold tracking-wide">Remote & Hybrid Ready</span>
                </div>

                <div class="flex items-center gap-2.5 text-slate-500 justify-center md:justify-start">
                  <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span class="text-xs font-semibold tracking-wide">100% Quality Driven</span>
                </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('dikamahar884@gmail.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    window.location.href = 'mailto:dikamahar884@gmail.com'
  }
}
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes floatSlow {
  0%, 100% { transform: translate(50%, -50%) translateY(0px); }
  50% { transform: translate(50%, -50%) translateY(-15px); }
}

.animate-float-slow {
  animation: floatSlow 7s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 200%; }
}

.animate-shine {
  animation: shine 1.5s infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 6px);
}
</style>
