<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 backdrop-blur-none"
    enter-to-class="opacity-100 backdrop-blur-md"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 backdrop-blur-md"
    leave-to-class="opacity-0 backdrop-blur-none"
  >
    <div
      v-if="isCaseStudyOpen && activeCaseStudy"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-md"
      @click.self="handleClose"
    >
      <div
        class="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl shadow-purple-950/10 overflow-hidden my-8 text-slate-800"
      >
        <!-- Top Action Bar -->
        <div class="absolute top-4 right-4 z-10">
          <button
            @click="handleClose"
            class="p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors backdrop-blur-sm border border-slate-200 shadow-sm"
            aria-label="Close Case Study"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Banner Header -->
        <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            :src="activeCaseStudy.bannerImage"
            :alt="activeCaseStudy.title"
            class="w-full h-full object-cover opacity-75"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white shadow-sm uppercase tracking-wider">
              {{ activeCaseStudy.category }}
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              {{ activeCaseStudy.title }}
            </h2>
            <p class="text-sm sm:text-base text-slate-700 font-medium mt-1">
              {{ activeCaseStudy.subtitle }}
            </p>
          </div>
        </div>

        <!-- Content Body -->
        <div class="p-6 sm:p-8 space-y-8 bg-white/80">
          <!-- Overview Section -->
          <div>
            <h3 class="text-lg font-extrabold text-purple-700 mb-2 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Executive Summary
            </h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {{ activeCaseStudy.overview }}
            </p>
          </div>

          <!-- Impact Metrics Grid -->
          <div v-if="activeCaseStudy.metrics?.length" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="metric in activeCaseStudy.metrics"
              :key="metric.label"
              class="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-center shadow-sm"
            >
              <div class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {{ metric.value }}
              </div>
              <div class="text-xs text-slate-600 font-bold mt-1">{{ metric.label }}</div>
              <div class="text-[11px] text-emerald-600 font-bold mt-0.5">{{ metric.change }}</div>
            </div>
          </div>

          <!-- Architecture & Stack Grid -->
          <div class="bg-slate-50/90 p-6 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
            <h3 class="text-lg font-extrabold text-indigo-700 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Architecture & Tech Stack Breakdown
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <span class="text-slate-500 block font-extrabold uppercase tracking-wider mb-2 text-[11px]">Frontend Layer</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="item in activeCaseStudy.architecture.frontend" :key="item" class="px-2 py-1 rounded-md bg-purple-100 text-purple-800 border border-purple-200/60 font-medium">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div>
                <span class="text-slate-500 block font-extrabold uppercase tracking-wider mb-2 text-[11px]">Backend & APIs</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="item in activeCaseStudy.architecture.backend" :key="item" class="px-2 py-1 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200/60 font-medium">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div>
                <span class="text-slate-500 block font-extrabold uppercase tracking-wider mb-2 text-[11px]">Data & Cache</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="item in activeCaseStudy.architecture.database" :key="item" class="px-2 py-1 rounded-md bg-blue-100 text-blue-800 border border-blue-200/60 font-medium">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div>
                <span class="text-slate-500 block font-extrabold uppercase tracking-wider mb-2 text-[11px]">DevOps & Cloud</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="item in activeCaseStudy.architecture.infrastructure" :key="item" class="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200/60 font-medium">
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Engineering Challenges & Solutions -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/70">
              <h4 class="text-sm font-extrabold text-rose-800 mb-3 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                Key Engineering Challenges
              </h4>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-700 font-medium list-disc list-inside">
                <li v-for="challenge in activeCaseStudy.challenges" :key="challenge">
                  {{ challenge }}
                </li>
              </ul>
            </div>

            <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
              <h4 class="text-sm font-extrabold text-emerald-800 mb-3 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Implemented Solutions
              </h4>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-700 font-medium list-disc list-inside">
                <li v-for="solution in activeCaseStudy.solutions" :key="solution">
                  {{ solution }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer Action CTA -->
        <div class="px-6 py-4 bg-slate-100/90 border-t border-slate-200 flex items-center justify-between">
          <span class="text-xs text-slate-500 font-mono font-semibold">Case Study Technical Report</span>
          <div class="flex items-center gap-3">
            <a
              v-if="activeCaseStudy.liveUrl"
              :href="activeCaseStudy.liveUrl"
              target="_blank"
              class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-purple-600/20"
            >
              Live Demo
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useCaseStudy } from '~/composables/useCaseStudy'
import { useSoundEffects } from '~/composables/useSoundEffects'

const { isCaseStudyOpen, activeCaseStudy, closeCaseStudy } = useCaseStudy()
const { playClick } = useSoundEffects()

const handleClose = () => {
  playClick()
  closeCaseStudy()
}
</script>
