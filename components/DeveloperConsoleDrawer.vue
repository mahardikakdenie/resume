<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-8 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-8 scale-95"
  >
    <div
      v-if="isConsoleOpen"
      class="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[580px] max-h-[520px] bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-2xl shadow-purple-950/10 overflow-hidden font-mono flex flex-col text-slate-800 text-xs sm:text-sm"
    >
      <!-- Header Bar -->
      <div class="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span class="ml-2 font-semibold text-slate-800 flex items-center gap-1.5 font-sans">
            <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Developer Console & Playground
          </span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Tab Buttons -->
          <div class="bg-slate-200/80 rounded-lg p-1 border border-slate-300/60 flex text-xs">
            <button
              @click="switchTab('cli')"
              :class="activeTab === 'cli' ? 'bg-purple-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'"
              class="px-2.5 py-1 rounded-md transition-colors font-sans font-semibold"
            >
              CLI Terminal
            </button>
            <button
              @click="switchTab('api')"
              :class="activeTab === 'api' ? 'bg-purple-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'"
              class="px-2.5 py-1 rounded-md transition-colors font-sans font-semibold"
            >
              REST API
            </button>
          </div>

          <!-- Close Button -->
          <button
            @click="handleClose"
            class="text-slate-500 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Tab Content: CLI Terminal -->
      <div v-if="activeTab === 'cli'" class="flex-1 flex flex-col overflow-hidden bg-slate-950 text-slate-200">
        <!-- Terminal Body Output -->
        <div ref="outputContainer" class="flex-1 p-4 overflow-y-auto space-y-2 max-h-[360px] scrollbar-thin scrollbar-thumb-slate-700">
          <div
            v-for="log in commandLogs"
            :key="log.id"
            class="leading-relaxed"
          >
            <div v-if="log.type === 'system'" class="text-purple-400 font-semibold mb-1">
              {{ log.text }}
            </div>
            <div v-else-if="log.type === 'command'" class="text-emerald-400 font-medium">
              {{ log.text }}
            </div>
            <div v-else-if="log.type === 'error'" class="text-rose-400 whitespace-pre-wrap">
              {{ log.text }}
            </div>
            <div v-else class="text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-slate-700">
              {{ log.text }}
            </div>
          </div>
        </div>

        <!-- CLI Quick Chips -->
        <div class="px-4 py-2 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center gap-1.5 text-xs font-sans">
          <span class="text-slate-400 font-mono text-[10px]">Quick:</span>
          <button
            v-for="chip in quickChips"
            :key="chip"
            @click="runChipCommand(chip)"
            class="px-2 py-0.5 rounded bg-slate-800 hover:bg-purple-900/50 text-slate-300 hover:text-purple-300 border border-slate-700 transition-colors text-[11px]"
          >
            {{ chip }}
          </button>
        </div>

        <!-- Input Line -->
        <form @submit.prevent="handleCommandSubmit" class="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <span class="text-emerald-400 font-bold text-base">&gt;</span>
          <input
            v-model="inputCommand"
            @input="playKeypress"
            type="text"
            placeholder="Type command (e.g. 'help', 'skills', 'cv')..."
            class="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-500 focus:outline-none text-xs sm:text-sm font-mono"
            ref="inputEl"
          />
          <button
            type="submit"
            class="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-sans font-medium transition-colors"
          >
            Run
          </button>
        </form>
      </div>

      <!-- Tab Content: REST API Tester -->
      <div v-else class="flex-1 p-4 overflow-y-auto space-y-4 max-h-[420px] font-sans bg-slate-50/80">
        <div class="text-xs text-slate-600 font-medium">
          Simulated live API playground. Select an endpoint to test request & response payload in real-time.
        </div>

        <!-- Endpoint Selectors -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            v-for="ep in apiEndpoints"
            :key="ep.url"
            @click="selectedApiEndpoint = ep"
            :class="selectedApiEndpoint.url === ep.url ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'"
            class="p-2.5 rounded-xl border text-left transition-all flex items-center justify-between"
          >
            <div>
              <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold mr-1.5" :class="ep.method === 'GET' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'">
                {{ ep.method }}
              </span>
              <span class="font-mono text-xs">{{ ep.url }}</span>
            </div>
            <span class="text-[10px] text-slate-500">{{ ep.time }}ms</span>
          </button>
        </div>

        <!-- Selected Endpoint Response Card -->
        <div class="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-600 font-mono">Status: <strong class="text-emerald-600">200 OK</strong></span>
            <span class="text-slate-500 font-mono">Response Time: {{ selectedApiEndpoint.time }}ms</span>
          </div>

          <pre class="p-3 bg-slate-950 rounded-lg text-emerald-400 font-mono text-[11px] overflow-x-auto border border-slate-800">
{{ JSON.stringify(selectedApiEndpoint.response, null, 2) }}
          </pre>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useDeveloperConsole } from '~/composables/useDeveloperConsole'
import { useSoundEffects } from '~/composables/useSoundEffects'

const { isConsoleOpen, activeTab, commandLogs, closeConsole, executeCommand } = useDeveloperConsole()
const { playClick, playKeypress, playSuccess } = useSoundEffects()

const inputCommand = ref('')
const inputEl = ref<HTMLInputElement | null>(null)
const outputContainer = ref<HTMLDivElement | null>(null)

const quickChips = ['help', 'skills', 'projects', 'cv', 'curl /api/v1/profile', 'clear']

const apiEndpoints = [
  {
    method: 'GET',
    url: '/api/v1/profile',
    time: 14,
    response: {
      success: true,
      data: {
        name: 'Mahardika Kessuma Denie',
        role: 'Senior Software Engineer',
        specialization: ['Full-Stack SaaS', 'Cloud Infrastructure', 'Real-Time Systems'],
        status: 'Available for Hire / Consulting'
      }
    }
  },
  {
    method: 'GET',
    url: '/api/v1/skills',
    time: 22,
    response: {
      success: true,
      data: {
        languages: ['TypeScript', 'JavaScript', 'Go', 'PHP', 'Dart'],
        frameworks: ['Vue 3', 'Nuxt 3', 'React', 'Next.js', 'NestJS', 'Laravel', 'Flutter'],
        devops: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS']
      }
    }
  },
  {
    method: 'GET',
    url: '/api/v1/metrics',
    time: 18,
    response: {
      success: true,
      data: {
        uptime: '99.98%',
        years_experience: 5,
        projects_completed: 30,
        satisfied_clients: 25
      }
    }
  }
]

const selectedApiEndpoint = ref(apiEndpoints[0])

const switchTab = (tab: 'cli' | 'api') => {
  playClick()
  activeTab.value = tab
}

const handleClose = () => {
  playClick()
  closeConsole()
}

const runChipCommand = (chip: string) => {
  playClick()
  executeCommand(chip)
  scrollToBottom()
}

const handleCommandSubmit = () => {
  if (!inputCommand.value.trim()) return
  playSuccess()
  executeCommand(inputCommand.value)
  inputCommand.value = ''
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    if (outputContainer.value) {
      outputContainer.value.scrollTop = outputContainer.value.scrollHeight
    }
  })
}

watch(isConsoleOpen, (open) => {
  if (open) {
    playClick()
    nextTick(() => {
      inputEl.value?.focus()
      scrollToBottom()
    })
  }
})
</script>
