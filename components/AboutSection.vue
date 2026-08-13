<template>
  <section class="py-24 lg:py-36 relative z-10 overflow-hidden text-left bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
    <!-- Ambient Background Light Orbs -->
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
    <div class="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Side: Interactive 3D Card & Floating Badges Image Showcase -->
        <div class="lg:col-span-5 relative group/card" data-aos="fade-right" data-aos-duration="1000">
          <!-- Animated Background Aura Glow -->
          <div class="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-25 blur-2xl group-hover/card:opacity-45 transition-opacity duration-700 animate-spin-slow pointer-events-none"></div>

          <!-- Main Image Frame Container -->
          <div class="relative z-10 rounded-[3rem] p-3 bg-gradient-to-b from-white/90 via-white/50 to-white/20 dark:from-slate-800/90 dark:to-slate-900/50 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 shadow-2xl shadow-purple-950/10 transform lg:-rotate-2 group-hover/card:rotate-0 group-hover/card:scale-[1.02] transition-all duration-700">
            <div class="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-900">
              <!-- Background Profile Image -->
              <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Engineering Environment" 
                class="w-full h-full object-cover transform scale-100 group-hover/card:scale-108 transition-all duration-700 grayscale contrast-125 group-hover/card:grayscale-0"
              />
              
              <!-- Subtle Dark Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-500"></div>

              <!-- Bottom Glassmorphic Overlay Badge -->
              <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0">
                    💻
                  </div>
                  <div>
                    <h5 class="text-xs font-black text-white uppercase tracking-wider mb-0.5">Software Architect</h5>
                    <p class="text-[11px] font-medium text-slate-300">Scalable Web & Mobile Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Badge 1: Top Right Status Indicator -->
          <div class="absolute -top-5 -right-5 z-20 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-purple-200/80 dark:border-slate-700 shadow-xl shadow-purple-500/10 flex items-center gap-3 animate-float-slow">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <p class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Status</p>
              <p class="text-xs font-black text-slate-800 dark:text-slate-100 leading-none">{{ $t('about.status_available', 'Open for Opportunities') }}</p>
            </div>
          </div>

          <!-- Floating Badge 2: Bottom Left Stat Accent -->
          <div class="absolute -bottom-6 -left-6 z-20 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-blue-200/80 dark:border-slate-700 shadow-xl shadow-blue-500/10 flex items-center gap-3 animate-float-delayed">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white text-xs font-black shadow-md">
              ⚡
            </div>
            <div>
              <p class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Impact</p>
              <p class="text-xs font-black text-purple-600 dark:text-purple-400 leading-none">50% Speed Boost</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Content & Modern Interactive Features -->
        <div class="lg:col-span-7 relative z-20 lg:-ml-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
          <div class="p-8 sm:p-10 lg:p-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-900/5 relative overflow-hidden">
            <!-- Glass Decorative Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

            <!-- Top Pill Badge -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span class="text-[11px] font-black uppercase tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {{ $t('about.badge') }}
              </span>
            </div>

            <!-- Main Headline -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              {{ $t('about.title_1') }}<br>
              <span class="text-slate-400 dark:text-slate-500 font-bold">
                {{ $t('about.title_2') }}
                <span class="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                  {{ $t('about.title_italic') }}
                </span>
              </span>
            </h2>
            
            <!-- Description Paragraphs -->
            <div class="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-8">
              <p>
                {{ $t('about.description_1', { name: 'Mahardika Kessuma Denie', years: '5+' }) }}
              </p>
              <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                {{ $t('about.description_2', { percent: '40%' }) }}
              </p>
            </div>

            <!-- Key Feature Highlight Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <!-- Feature 1 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 group/feat flex items-start gap-3.5">
                <div class="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover/feat:bg-purple-600 group-hover/feat:text-white transition-colors duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1">
                    {{ $t('about.highlight_1_title', 'Scalable Architecture') }}
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-normal">
                    {{ $t('about.highlight_1_desc', 'Multi-tenant SaaS & high-performance APIs') }}
                  </p>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-pink-300 dark:hover:border-pink-500/50 transition-all duration-300 group/feat flex items-start gap-3.5">
                <div class="p-2.5 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover/feat:bg-pink-600 group-hover/feat:text-white transition-colors duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1">
                    {{ $t('about.highlight_2_title', 'Productivity Driven') }}
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-normal">
                    {{ $t('about.highlight_2_desc', '50% real-time system speed optimization') }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Redesigned Metric Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Stat Card 1 -->
              <div class="relative p-5 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/40 transform hover:-translate-y-1.5 transition-all duration-300 group/stat overflow-hidden">
                <div class="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover/stat:scale-150 transition-transform duration-500"></div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-3xl font-black tracking-tight">5+</span>
                  <span class="text-lg opacity-80">⏳</span>
                </div>
                <p class="text-[10px] font-black uppercase tracking-widest text-purple-100/90 leading-tight">
                  {{ $t('about.stats_years') }}
                </p>
              </div>

              <!-- Stat Card 2 -->
              <div class="relative p-5 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-600 to-pink-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transform hover:-translate-y-1.5 transition-all duration-300 group/stat overflow-hidden">
                <div class="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover/stat:scale-150 transition-transform duration-500"></div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-3xl font-black tracking-tight">{{ projects.length }}+</span>
                  <span class="text-lg opacity-80">🚀</span>
                </div>
                <p class="text-[10px] font-black uppercase tracking-widest text-pink-100/90 leading-tight">
                  {{ $t('about.stats_projects') }}
                </p>
              </div>

              <!-- Stat Card 3 -->
              <div class="relative p-5 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-1.5 transition-all duration-300 group/stat overflow-hidden">
                <div class="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover/stat:scale-150 transition-transform duration-500"></div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-3xl font-black tracking-tight">3.84</span>
                  <span class="text-lg opacity-80">🎓</span>
                </div>
                <p class="text-[10px] font-black uppercase tracking-widest text-blue-100/90 leading-tight">
                  {{ $t('about.stats_gpa') }}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '~/lib/static'
const { t } = useI18n()
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 25s linear infinite;
}

.animate-float-slow { 
  animation: float 6s ease-in-out infinite; 
}

.animate-float-delayed { 
  animation: float 6s ease-in-out 3s infinite; 
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-12px); 
  }
}
</style>
