<template>
  <section class="py-20 md:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
    <!-- Premium Tech Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

    <!-- Soft Glass Blur Orbs -->
    <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-emerald-200/30 dark:from-emerald-950/20 to-teal-200/30 dark:to-teal-950/20 blur-[120px] pointer-events-none -z-0"></div>
    <div class="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-indigo-100/30 dark:from-indigo-950/20 to-emerald-100/20 dark:to-emerald-950/20 blur-[120px] pointer-events-none -z-0"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {{ $t('github.badge') }}
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          {{ $t('github.title_prefix') }}
          <span class="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            {{ $t('github.title_highlight') }}
          </span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          {{ $t('github.subtitle') }}
        </p>
      </div>

      <!-- Loading State Skeleton -->
      <div v-if="pending && !stats" class="space-y-6 animate-pulse">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="i in 4" :key="i" class="h-32 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl"></div>
        </div>
        <div class="h-64 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl"></div>
      </div>

      <template v-else-if="stats">
        <!-- Key stats cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <!-- Public Repos -->
          <div class="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] hover:border-emerald-400/50 dark:hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{{ $t('github.metrics.repos') }}</span>
              <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950 transition-colors duration-300 border border-emerald-100/50 dark:border-emerald-800/40">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-1">{{ stats.totalRepos }}</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ $t('github.metrics.repos_desc') }}</p>
          </div>

          <!-- Total Stars -->
          <div class="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{{ $t('github.metrics.stars') }}</span>
              <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white dark:group-hover:bg-amber-400 dark:group-hover:text-slate-950 transition-colors duration-300 border border-amber-100/50 dark:border-amber-800/40">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-1">{{ stats.totalStars }}</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ $t('github.metrics.stars_desc') }}</p>
          </div>

          <!-- Followers -->
          <div class="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{{ $t('github.metrics.followers') }}</span>
              <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-slate-950 transition-colors duration-300 border border-indigo-100/50 dark:border-indigo-800/40">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-1">{{ stats.followers }}</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ $t('github.metrics.followers_desc') }}</p>
          </div>

          <!-- Forks Received -->
          <div class="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.08)] hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{{ $t('github.metrics.forks') }}</span>
              <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950 transition-colors duration-300 border border-teal-100/50 dark:border-teal-800/40">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-1">{{ stats.totalForks }}</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ $t('github.metrics.forks_desc') }}</p>
          </div>
        </div>

        <!-- GRAPHICS GRID: Weekly Activity Flow & Contribution Heatmap Calendar -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          
          <!-- 1. Weekly Activity SVG Line Graph (Modern & Interactive) -->
          <div class="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-emerald-500/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  Weekly Activity Flow
                </h3>

                <!-- Dynamic Peak Indicator Badge -->
                <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-wider">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Peak: {{ peakDay.day }} ({{ peakDay.count }} commits)</span>
                </div>
              </div>

              <!-- Pure Interactive SVG Line Chart -->
              <div class="relative w-full h-44 sm:h-52 my-2">
                <svg class="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="line-grad-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#10b981" stop-opacity="0.35" />
                      <stop offset="60%" stop-color="#14b8a6" stop-opacity="0.10" />
                      <stop offset="100%" stop-color="#10b981" stop-opacity="0.00" />
                    </linearGradient>
                    <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <!-- Horizontal Subtle Grid Lines -->
                  <line x1="0" y1="30" x2="500" y2="30" class="stroke-slate-200/60 dark:stroke-slate-800/80" stroke-dasharray="4 4" stroke-width="1" />
                  <line x1="0" y1="90" x2="500" y2="90" class="stroke-slate-200/60 dark:stroke-slate-800/80" stroke-dasharray="4 4" stroke-width="1" />
                  <line x1="0" y1="150" x2="500" y2="150" class="stroke-slate-200/60 dark:stroke-slate-800/80" stroke-dasharray="4 4" stroke-width="1" />

                  <!-- Bezier Area Fill -->
                  <path :d="linePath" fill="url(#line-grad-glow)" stroke="none" />

                  <!-- Glowing Line Stroke -->
                  <path :d="linePathStroke" fill="none" stroke="#10b981" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow-line)" />

                  <!-- Data Markers with Interactive Hover State -->
                  <g v-for="(pt, idx) in chartPoints" :key="idx" class="cursor-pointer group/node" @mouseenter="hoveredPointIndex = idx" @mouseleave="hoveredPointIndex = null">
                    <!-- Invisible large hit target for touch/hover -->
                    <circle :cx="pt.x" :cy="pt.y" r="16" fill="transparent" />

                    <!-- Outer pulse ring on hover or peak -->
                    <circle
                      :cx="pt.x"
                      :cy="pt.y"
                      :r="hoveredPointIndex === idx ? 10 : 7"
                      class="transition-all duration-300"
                      :fill="pt.day === peakDay.day ? '#10b981' : '#34d399'"
                      :fill-opacity="hoveredPointIndex === idx ? '0.4' : '0.15'"
                    />

                    <!-- Main Data Node -->
                    <circle
                      :cx="pt.x"
                      :cy="pt.y"
                      :r="hoveredPointIndex === idx ? 6 : 4.5"
                      class="transition-all duration-200"
                      :fill="hoveredPointIndex === idx ? '#10b981' : '#ffffff'"
                      :stroke="hoveredPointIndex === idx ? '#ffffff' : '#059669'"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>

                <!-- Floating Tooltip overlay on hover -->
                <Transition name="fade">
                  <div
                    v-if="hoveredPointIndex !== null && chartPoints[hoveredPointIndex]"
                    class="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white shadow-xl text-xs font-bold whitespace-nowrap border border-slate-700 flex items-center gap-2"
                    :style="{
                      left: `${(hoveredPointIndex / (chartPoints.length - 1)) * 100}%`,
                      top: `${(chartPoints[hoveredPointIndex].y / 200) * 100}%`
                    }"
                  >
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{{ stats.weeklyActivity[hoveredPointIndex].day }}: {{ stats.weeklyActivity[hoveredPointIndex].count }} commits</span>
                  </div>
                </Transition>
              </div>

              <!-- Modern X-Axis Pill Selector -->
              <div class="grid grid-cols-7 gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="(pt, idx) in stats.weeklyActivity"
                  :key="pt.day"
                  @mouseenter="hoveredPointIndex = idx"
                  @mouseleave="hoveredPointIndex = null"
                  class="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl transition-all duration-200 cursor-pointer"
                  :class="[
                    hoveredPointIndex === idx || pt.day === peakDay.day
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105 font-black'
                      : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold'
                  ]"
                >
                  <span class="text-[10px] uppercase tracking-wider">{{ pt.day }}</span>
                  <span class="text-xs font-black mt-0.5">{{ pt.count }}</span>
                </div>
              </div>
            </div>
          </div>


          <!-- 2. Contribution Heatmap Calendar (1-Year Dynamic Month Filter & Clean Grid UI) -->
          <div class="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-emerald-500/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  Contribution Heatmap Calendar
                </h3>
                <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">
                  {{ totalGridContributions }} Total Commits
                </span>
              </div>

              <!-- Responsive Calendar Grid Container with Custom Scrollbar -->
              <div class="overflow-x-auto custom-heatmap-scrollbar pb-3 pt-1">
                <div class="min-w-[580px] flex flex-col gap-1.5">
                  
                  <!-- Dynamic 12 Month Header Sequence (Current Month last year -> Current Month this year) -->
                  <div class="grid grid-cols-12 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider pl-6">
                    <span v-for="m in dynamicMonthsList" :key="m">{{ m }}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <!-- Day Labels (Mon, Wed, Fri) -->
                    <div class="flex flex-col justify-between text-[9px] font-bold text-slate-400 dark:text-slate-500 h-20 select-none shrink-0 pr-1">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>

                    <!-- 53 Column Grid x 7 Rows -->
                    <div class="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[2.5px] flex-1">
                      <div
                        v-for="(cell, index) in stats.contributionGrid"
                        :key="index"
                        class="aspect-square rounded-[2px] sm:rounded-[3px] transition-all duration-200 hover:scale-125 hover:z-10 hover:shadow-md cursor-pointer"
                        :class="getCellColor(cell.level)"
                        @mouseenter="activeCellIndex = index"
                        @mouseleave="activeCellIndex = null"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Interactive Hover Info / Details Bar -->
              <div class="h-6 flex items-center justify-between mt-3 text-xs font-bold">
                <div class="text-slate-600 dark:text-slate-400">
                  <span v-if="activeCellIndex !== null && stats.contributionGrid[activeCellIndex]" class="text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <template v-if="stats.contributionGrid[activeCellIndex].date">
                      {{ formatDate(stats.contributionGrid[activeCellIndex].date) }}: {{ stats.contributionGrid[activeCellIndex].count || (stats.contributionGrid[activeCellIndex].level * 3) }} contributions
                    </template>
                    <template v-else>
                      Day #{{ activeCellIndex + 1 }}: Level {{ stats.contributionGrid[activeCellIndex].level }} Activity
                    </template>
                  </span>
                  <span v-else class="text-slate-400 dark:text-slate-500 text-[11px] font-semibold">
                    Hover over cells for activity details
                  </span>
                </div>

                <!-- Modern Map Legend -->
                <div class="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                  <span>Less</span>
                  <span class="w-3 h-3 rounded-[2px] bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50"></span>
                  <span class="w-3 h-3 rounded-[2px] bg-emerald-200 dark:bg-emerald-950"></span>
                  <span class="w-3 h-3 rounded-[2px] bg-emerald-400 dark:bg-emerald-700"></span>
                  <span class="w-3 h-3 rounded-[2px] bg-emerald-500 dark:bg-emerald-500"></span>
                  <span class="w-3 h-3 rounded-[2px] bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]"></span>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Languages breakdown + Recent Event Log -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <!-- Languages Breakdown Card -->
          <div class="lg:col-span-2 p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-emerald-500/5 dark:shadow-emerald-950/20">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                {{ $t('github.languages.title') }}
              </h3>
              <span class="text-xs font-bold text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase">
                {{ $t('github.languages.based_on') }}
              </span>
            </div>

            <!-- Composite bar -->
            <div class="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800 mb-6 shadow-inner p-0.5">
              <div
                v-for="lang in stats.topLanguages"
                :key="lang.name"
                :style="{ width: `${lang.percentage}%`, backgroundColor: lang.color }"
                class="h-full transition-all duration-500 relative group first:rounded-l-full last:rounded-r-full"
                :title="`${lang.name}: ${lang.percentage}%`"
              ></div>
            </div>

            <!-- List of Languages -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div
                v-for="lang in stats.topLanguages"
                :key="lang.name"
                class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
              >
                <span class="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm" :style="{ backgroundColor: lang.color }"></span>
                <div class="truncate">
                  <div class="text-sm font-extrabold text-slate-800 dark:text-slate-100 truncate">{{ lang.name }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ lang.percentage }}% ({{ lang.count }} repos)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity Log feed -->
          <div class="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-emerald-500/5 dark:shadow-emerald-950/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <h3 class="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  {{ $t('github.activity.title') }}
                </h3>
                <span class="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 px-2 py-0.5 rounded-md font-black uppercase">Live</span>
              </div>

              <div class="space-y-4">
                <div
                  v-for="act in stats.recentActivities"
                  :key="act.id"
                  class="flex items-start gap-3 text-sm pb-3 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 last:pb-0"
                >
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0 shadow-sm shadow-emerald-400"></div>
                  <div class="flex-1 min-w-0">
                    <a
                      :href="act.repoUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block truncate"
                    >
                      {{ act.repoName }}
                    </a>
                    <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{{ act.title }}</p>
                    <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500 block mt-1 uppercase">{{ formatRelativeTime(act.timestamp) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Repos Showcase Grid -->
        <div class="mb-12">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path>
              </svg>
              {{ $t('github.repos.title') }}
            </h3>
            <a
              :href="stats.user.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 hover:underline uppercase tracking-wide"
            >
              {{ $t('github.repos.view_all') }} &rarr;
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="repo in stats.featuredRepos"
              :key="repo.id"
              class="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-emerald-400/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <a
                    :href="repo.html_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-base font-extrabold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 truncate"
                  >
                    <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                    <span class="truncate">{{ repo.name }}</span>
                  </a>
                  <span
                    v-if="repo.language"
                    class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-655 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0"
                  >
                    {{ repo.language }}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {{ repo.description || 'No description available for this repository.' }}
                </p>
              </div>

              <div class="flex items-center justify-between pt-3.5 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500">
                <div class="flex items-center gap-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {{ repo.stargazers_count }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                    {{ repo.forks_count }}
                  </span>
                </div>
                <a
                  :href="repo.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-0.5"
                >
                  Code &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA footer card -->
        <div class="p-8 sm:p-10 rounded-3xl bg-slate-900 dark:bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-slate-800">
          <!-- Decorative interior elements -->
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-2xl"></div>

          <div class="flex items-center gap-4 text-center sm:text-left z-10">
            <img
              :src="stats.user.avatar_url"
              :alt="stats.user.name"
              class="w-16 h-16 rounded-full border-2 border-emerald-400 shadow-md shrink-0 mx-auto sm:mx-0"
            />
            <div>
              <h4 class="text-lg font-bold text-white leading-snug">{{ stats.user.name }} (@{{ stats.user.login }})</h4>
              <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{{ stats.user.bio || 'Exploring software engineering & performance optimization.' }}</p>
            </div>
          </div>

          <a
            :href="stats.user.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg shadow-emerald-500/20 whitespace-nowrap flex items-center gap-2 shrink-0 z-10"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
            {{ $t('github.cta_button') }}
          </a>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGithubStats } from '~/composables/useGithubStats';

const { stats, pending, formatRelativeTime } = useGithubStats();

// Reactive hover state variables
const hoveredPointIndex = ref<number | null>(null);
const activeCellIndex = ref<number | null>(null);

// Dynamic 12-Month sequence (Current Month last year -> Current Month this year)
const dynamicMonthsList = computed(() => {
  const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonthIdx = new Date().getMonth(); // 0-indexed (e.g. 7 for Aug)
  const list: string[] = [];

  for (let i = 11; i >= 0; i--) {
    const monthIdx = (currentMonthIdx - i + 12) % 12;
    list.push(allMonths[monthIdx]);
  }
  return list;
});

// Format ISO date string into human readable string: "Aug 13, 2026"
const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Cell background colors for contribution levels supporting light and dark themes
const getCellColor = (level: number): string => {
  switch (level) {
    case 1:
      return 'bg-emerald-200/90 dark:bg-emerald-950 border border-emerald-300/40 dark:border-emerald-800/40';
    case 2:
      return 'bg-emerald-400 dark:bg-emerald-700';
    case 3:
      return 'bg-emerald-500 dark:bg-emerald-500 shadow-sm shadow-emerald-500/20';
    case 4:
      return 'bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]';
    default:
      return 'bg-slate-100 dark:bg-slate-800/50 border border-slate-200/40 dark:border-slate-700/30';
  }
};

// Compute peak day from weekly activity
const peakDay = computed(() => {
  if (!stats.value?.weeklyActivity?.length) return { day: 'N/A', count: 0 };
  return stats.value.weeklyActivity.reduce(
    (max, item) => (item.count > max.count ? item : max),
    stats.value.weeklyActivity[0]
  );
});

// Calculate total commits from contribution grid
const totalGridContributions = computed(() => {
  if (!stats.value?.contributionGrid?.length) return 0;
  return stats.value.contributionGrid.reduce((sum, cell) => sum + (cell.count || cell.level * 3), 0);
});

// Map weekly activity metrics to SVG coordinates
const chartPoints = computed(() => {
  if (!stats.value?.weeklyActivity?.length) return [];
  const list = stats.value.weeklyActivity;
  const count = list.length;
  const maxVal = Math.max(...list.map((p) => p.count), 5);

  return list.map((pt, idx) => {
    const x = (idx / (count - 1)) * 500;
    const y = 170 - (pt.count / maxVal) * 130;
    return { x, y, day: pt.day, count: pt.count };
  });
});

// Build line path (Cubic Bezier curve fill area)
const linePath = computed(() => {
  const pts = chartPoints.value;
  if (!pts.length) return '';

  let path = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cpX1 = p0.x + (p1.x - p0.x) / 2;
    const cpY1 = p0.y;
    const cpX2 = p0.x + (p1.x - p0.x) / 2;
    const cpY2 = p1.y;
    path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }

  return `${path} L ${pts[pts.length - 1].x} 200 L ${pts[0].x} 200 Z`;
});

// Bezier curve stroke path
const linePathStroke = computed(() => {
  const pts = chartPoints.value;
  if (!pts.length) return '';

  let path = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cpX1 = p0.x + (p1.x - p0.x) / 2;
    const cpY1 = p0.y;
    const cpX2 = p0.x + (p1.x - p0.x) / 2;
    const cpY2 = p1.y;
    path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }
  return path;
});
</script>

<style scoped>
/* Sleek custom scrollbar for calendar heatmap horizontal overflow */
.custom-heatmap-scrollbar::-webkit-scrollbar {
  height: 5px;
}
.custom-heatmap-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-heatmap-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.2);
  border-radius: 9999px;
}
.custom-heatmap-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -90%) scale(0.95);
}
</style>
