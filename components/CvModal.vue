<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden"
        @keydown.esc="closeCvModal"
        tabindex="0"
      >
        <!-- Backdrop Blur Overlay -->
        <div 
          class="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
          @click="closeCvModal"
        ></div>

        <!-- Modal Box -->
        <div class="relative w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10">
          
          <!-- Top Header Bar -->
          <div class="px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="text-left">
                <h3 class="text-sm font-extrabold text-white uppercase tracking-wider">Mahardika Kessuma Denie</h3>
                <p class="text-xs text-purple-400 font-medium">Software Engineer • Technical Resume (PDF)</p>
              </div>
            </div>

            <!-- Action Controls -->
            <div class="flex items-center gap-2 sm:gap-3">
              <!-- Open in New Tab Button -->
              <a
                :href="cvUrl"
                target="_blank"
                class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700"
                title="Open in New Tab"
              >
                <span>Open in Tab</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <!-- Direct Download PDF Button -->
              <a
                :href="cvUrl"
                download="cv_mahardikakdenie.pdf"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/20 transition-all active:scale-95"
              >
                <span>Download PDF</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <!-- Close Button -->
              <button
                @click="closeCvModal"
                class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-slate-700 hover:border-red-500/40 flex items-center justify-center transition-all ml-1 cursor-pointer"
                aria-label="Close CV Modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- PDF Content Viewer Body -->
          <div class="flex-1 w-full h-full bg-slate-950 relative">
            <iframe
              :src="cvUrl + '#toolbar=1&navpanes=0'"
              class="w-full h-full border-0"
              title="Mahardika Kessuma Denie Resume PDF"
            ></iframe>
          </div>

        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useCvModal } from '~/composables/useCvModal'

const { isOpen, cvUrl, closeCvModal } = useCvModal()
</script>
