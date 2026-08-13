<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xl"
        @click.self="closeRecruiterModal"
      >
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div 
            v-if="isOpen"
            class="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <!-- Header Bar -->
            <div class="px-6 py-5 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-black tracking-tight text-white">Recruiter AI & Architecture Explorer</h3>
                    <span class="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-purple-500/20 text-purple-300 border border-purple-400/30 rounded-full">v2.4</span>
                  </div>
                  <p class="text-xs text-slate-300 font-medium">Instant technical insights & architecture breakdown for hiring leads</p>
                </div>
              </div>

              <button 
                @click="closeRecruiterModal"
                class="w-9 h-9 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Tab Switcher Navigation -->
            <div class="px-6 py-3 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2 overflow-x-auto">
              <div class="flex items-center gap-2">
                <button 
                  @click="activeTab = 'assistant'"
                  :class="[
                    'px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap',
                    activeTab === 'assistant' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Recruiter Fast-Track
                </button>

                <button 
                  @click="activeTab = 'architecture'"
                  :class="[
                    'px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap',
                    activeTab === 'architecture' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  System Architecture
                </button>

                <button 
                  @click="activeTab = 'matcher'"
                  :class="[
                    'px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap',
                    activeTab === 'matcher' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Role Matchmaker
                </button>
              </div>

              <div class="hidden md:flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Available for Senior Roles
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50">
              
              <!-- TAB 1: RECRUITER FAST-TRACK -->
              <div v-if="activeTab === 'assistant'" class="space-y-6">
                <!-- Preset Question Chips -->
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">Select Recruiter Inquiry Preset:</label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      v-for="query in recruiterQueries"
                      :key="query.id"
                      @click="currentQueryId = query.id"
                      :class="[
                        'p-3.5 rounded-2xl text-left transition-all border text-xs font-bold flex items-center justify-between',
                        currentQueryId === query.id 
                          ? 'bg-purple-50 text-purple-900 border-purple-200 shadow-xs ring-1 ring-purple-400' 
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                      ]"
                    >
                      <span class="pr-2">{{ query.question }}</span>
                      <span class="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md bg-purple-100 text-purple-700 flex-shrink-0">
                        {{ query.category }}
                      </span>
                    </button>
                  </div>
                </div>

                <!-- Answer Display Card -->
                <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs">
                      AI
                    </div>
                    <h4 class="text-sm font-black text-slate-900 tracking-tight">{{ activeQuery.question }}</h4>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {{ activeQuery.answer }}
                  </p>

                  <div>
                    <span class="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Verified Skill Highlights:</span>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="(hl, idx) in activeQuery.highlights" 
                        :key="idx"
                        class="px-3 py-1 text-xs font-bold rounded-full bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1.5"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        {{ hl }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- TAB 2: SYSTEM ARCHITECTURE -->
              <div v-else-if="activeTab === 'architecture'" class="space-y-6">
                <!-- Topology Nodes Row -->
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Interactive Infrastructure Topology (Click to Inspect):</label>
                  <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    <button
                      v-for="node in architectureNodes"
                      :key="node.id"
                      @click="selectedNodeId = node.id"
                      :class="[
                        'p-3 rounded-2xl text-center transition-all border flex flex-col items-center justify-center gap-1',
                        selectedNodeId === node.id 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105' 
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                      ]"
                    >
                      <span class="text-xs font-extrabold truncate w-full">{{ node.name }}</span>
                      <span class="text-[9px] font-bold opacity-75 truncate w-full">{{ node.tech }}</span>
                    </button>
                  </div>
                </div>

                <!-- Node Details Panel -->
                <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span class="text-xs font-extrabold text-purple-600 uppercase tracking-widest">{{ activeNode.role }}</span>
                      <h4 class="text-lg font-black text-slate-900">{{ activeNode.name }} ({{ activeNode.tech }})</h4>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-black">
                        Latency: <span class="text-purple-600">{{ activeNode.latency }}</span>
                      </div>
                      <div class="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black">
                        {{ activeNode.throughput }}
                      </div>
                    </div>
                  </div>

                  <p class="text-xs text-slate-600 font-medium leading-relaxed">
                    {{ activeNode.description }}
                  </p>

                  <div>
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Sample Architectural Code Implementation:</span>
                    <pre class="p-4 rounded-2xl bg-slate-900 text-purple-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed"><code>{{ activeNode.codeSnippet }}</code></pre>
                  </div>
                </div>
              </div>

              <!-- TAB 3: ROLE MATCHMAKER -->
              <div v-else-if="activeTab === 'matcher'" class="space-y-6">
                <!-- Score Banner -->
                <div class="p-6 rounded-3xl bg-gradient-to-br from-purple-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-widest text-purple-300">Candidate Role Fit</span>
                    <h4 class="text-xl font-black">Tech Stack Compatibility Score</h4>
                    <p class="text-xs text-slate-300 mt-1 font-medium">Toggle your job requirements below to see compatibility</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-20 h-20 rounded-full border-4 border-purple-400 flex items-center justify-center font-black text-2xl bg-purple-900/60 shadow-inner">
                      {{ compatibilityScore }}%
                    </div>
                  </div>
                </div>

                <!-- Skill Checklist Grid -->
                <div class="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md">
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Select Job Description Requirements:</label>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button
                      v-for="skill in skillOptions"
                      :key="skill.id"
                      @click="toggleSkillRequirement(skill.id)"
                      :class="[
                        'p-3 rounded-2xl text-xs font-extrabold border transition-all flex items-center justify-between',
                        skill.required 
                          ? 'bg-purple-50 text-purple-900 border-purple-300 shadow-xs' 
                          : 'bg-slate-50 text-slate-400 border-slate-200 line-through opacity-60'
                      ]"
                    >
                      <span>{{ skill.name }}</span>
                      <svg v-if="skill.required" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Modal Footer Actions -->
            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="text-xs text-slate-500 font-medium text-center sm:text-left">
                Looking for tailored tech assessment? <span class="font-bold text-slate-900">Mahardika Kessuma Denie</span>
              </div>
              <div class="flex items-center gap-2.5 w-full sm:w-auto">
                <button 
                  @click="handleDownloadCv"
                  class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-extrabold text-xs transition-all shadow-xs"
                >
                  Download CV (PDF)
                </button>
                <button 
                  @click="handleScheduleContact"
                  class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs transition-all shadow-md shadow-purple-600/30"
                >
                  Schedule Interview
                </button>
              </div>
            </div>

          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAiRecruiter } from '~/composables/useAiRecruiter'
import { useCvModal } from '~/composables/useCvModal'
import { useSoundEffects } from '~/composables/useSoundEffects'

const router = useRouter()
const { playClick } = useSoundEffects()
const { openCvModal } = useCvModal()

const {
  isOpen,
  activeTab,
  selectedNodeId,
  currentQueryId,
  recruiterQueries,
  architectureNodes,
  skillOptions,
  activeQuery,
  activeNode,
  compatibilityScore,
  closeRecruiterModal,
  toggleSkillRequirement
} = useAiRecruiter()

const handleDownloadCv = () => {
  playClick()
  closeRecruiterModal()
  openCvModal('/cv_mahardikakdenie.pdf')
}

const handleScheduleContact = () => {
  playClick()
  closeRecruiterModal()
  router.push('/contact')
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
</style>
