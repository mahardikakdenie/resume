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
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xl"
        @click.self="handleClose"
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
            class="relative w-full max-w-6xl bg-gradient-to-br from-slate-50 via-white to-purple-50/40 border border-slate-200/80 rounded-3xl shadow-2xl shadow-purple-900/10 overflow-hidden flex flex-col max-h-[92vh] text-slate-800"
          >
            <!-- Modal Header -->
            <div class="px-6 py-5 border-b border-slate-200/80 flex items-center justify-between bg-white/80 backdrop-blur-md">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    System Architecture & Benchmark Playground
                    <span class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200 rounded-full">Interactive Sandbox</span>
                  </h2>
                  <p class="text-xs text-slate-500 font-medium">Explore high-throughput topology blueprints, dynamic latency benchmarks, and production backend code patterns.</p>
                </div>
              </div>

              <!-- Close Button -->
              <button 
                @click="handleClose"
                class="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all"
                title="Close Modal (Esc)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Content Area -->
            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              <!-- Top Controls: Preset Selection & RPS Load Test Simulator -->
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <!-- Preset Switcher -->
                <div class="lg:col-span-2 p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div class="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Select Architecture Blueprint</div>
                  <div class="flex flex-wrap gap-2">
                    <button
                      v-for="preset in presets"
                      :key="preset.id"
                      @click="selectPreset(preset.id)"
                      :class="[
                        'px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border',
                        selectedPresetId === preset.id
                          ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/20'
                          : 'bg-slate-100/80 text-slate-600 border-slate-200 hover:bg-slate-200/60 hover:text-slate-900'
                      ]"
                    >
                      <span class="w-2 h-2 rounded-full" :class="selectedPresetId === preset.id ? 'bg-white animate-pulse' : 'bg-slate-400'"></span>
                      {{ preset.title }}
                    </button>
                  </div>
                  <p class="text-xs text-slate-500 italic font-medium mt-3">{{ currentPreset.tagline }}</p>
                </div>

                <!-- Live Traffic Load Simulator -->
                <div class="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Simulated Traffic Load</span>
                    <span class="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{{ currentRpsLoad.toLocaleString() }} RPS</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2 my-2">
                    <button
                      v-for="load in [1000, 50000, 200000]"
                      :key="load"
                      @click="setLoad(load)"
                      :class="[
                        'py-1.5 px-2 rounded-lg text-xs font-bold transition-all border',
                        currentRpsLoad === load 
                          ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                          : 'bg-slate-100/80 text-slate-600 border-slate-200 hover:bg-slate-200/60 hover:text-slate-900'
                      ]"
                    >
                      {{ load >= 1000 ? load / 1000 + 'k' : load }} RPS
                    </button>
                  </div>
                  <div class="text-[11px] text-slate-600 font-medium flex items-center justify-between pt-1">
                    <span>p99 Latency: <strong class="text-emerald-700 font-extrabold">{{ simulatedMetrics.latencyMs }}ms</strong></span>
                    <span>Cache Hit: <strong class="text-purple-700 font-extrabold">{{ simulatedMetrics.cacheHitRatio }}%</strong></span>
                  </div>
                </div>
              </div>

              <!-- Interactive Architecture Canvas & Telemetry Grid -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Topology Nodes Interactive Canvas (Left Column) -->
                <div class="lg:col-span-7 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md min-h-[380px] flex flex-col justify-between">
                  <div class="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Interactive Topology Flow (Click Node to Inspect)
                    </span>
                    <span class="text-[11px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-bold">
                      {{ currentPreset.nodes.length }} Microservices Linked
                    </span>
                  </div>

                  <!-- Topology Nodes List -->
                  <div class="relative space-y-4 z-10">
                    <div
                      v-for="(node, idx) in currentPreset.nodes"
                      :key="node.id"
                      @click="selectNode(node.id)"
                      :class="[
                        'p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group',
                        activeNodeId === node.id 
                          ? 'bg-purple-50 border-purple-300 shadow-md shadow-purple-500/10 translate-x-1' 
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-purple-300 hover:bg-slate-100/80'
                      ]"
                    >
                      <div class="flex items-center gap-3">
                        <div 
                          :class="[
                            'w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border transition-transform group-hover:scale-105',
                            activeNodeId === node.id 
                              ? 'bg-purple-600 text-white border-purple-500' 
                              : 'bg-slate-200 text-purple-700 border-slate-300'
                          ]"
                        >
                          0{{ idx + 1 }}
                        </div>
                        <div>
                          <div class="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-2">
                            {{ node.name }}
                            <span v-if="activeNodeId === node.id" class="text-[10px] px-1.5 py-0.2 rounded bg-purple-200 text-purple-800 font-bold">Active</span>
                          </div>
                          <div class="text-xs text-slate-500 font-medium">{{ node.technology }}</div>
                        </div>
                      </div>

                      <div class="flex items-center gap-4">
                        <div class="text-right">
                          <div class="text-xs font-bold text-emerald-600">{{ node.latencyMs }}ms avg</div>
                          <div class="text-[10px] text-slate-400 font-semibold">{{ node.role }}</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Inspector & Code Panel (Right Column) -->
                <div class="lg:col-span-5 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md flex flex-col justify-between space-y-4">
                  <div v-if="currentNode">
                    <div class="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-3">
                      <span class="text-xs font-extrabold text-purple-700 uppercase tracking-wider">Node Details & Code Inspector</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold uppercase">
                        {{ currentNode.status }}
                      </span>
                    </div>

                    <!-- Active Node Info -->
                    <div class="space-y-2 mb-4">
                      <h3 class="text-base font-extrabold text-slate-900">{{ currentNode.name }}</h3>
                      <p class="text-xs text-slate-600 leading-relaxed font-medium">{{ currentNode.description }}</p>
                    </div>

                    <!-- Code Snippet Container -->
                    <div class="relative rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-inner">
                      <div class="px-3 py-1.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                        <span>Production Implementation</span>
                        <button 
                          @click="copyCode(currentNode.codeSnippet)" 
                          class="hover:text-purple-300 transition-colors flex items-center gap-1 font-bold"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>{{ copied ? 'Copied!' : 'Copy Code' }}</span>
                        </button>
                      </div>
                      <pre class="p-3 text-[11px] font-mono text-purple-200 overflow-x-auto custom-scrollbar max-h-48"><code>{{ currentNode.codeSnippet }}</code></pre>
                    </div>
                  </div>

                  <!-- Quick Telemetry Stats -->
                  <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/80">
                    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                      <div class="text-[10px] text-slate-500 uppercase font-bold">Node Latency</div>
                      <div class="text-sm font-black text-emerald-600 mt-0.5" v-if="currentNode">{{ currentNode.latencyMs }} ms</div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                      <div class="text-[10px] text-slate-500 uppercase font-bold">System Health</div>
                      <div class="text-sm font-black text-purple-600 mt-0.5">{{ simulatedMetrics.healthScore }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="px-6 py-4 bg-slate-100/80 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="font-semibold">System Architecture Simulator Ready</span>
              </div>
              <div class="text-[11px] text-slate-400 font-mono font-semibold">
                Press ESC to exit playground
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useArchitectureModal } from '~/composables/useArchitectureModal'
import { useSoundEffects } from '~/composables/useSoundEffects'

const { 
  isOpen, 
  presets, 
  selectedPresetId, 
  activeNodeId, 
  currentRpsLoad, 
  currentPreset, 
  currentNode, 
  simulatedMetrics, 
  closeModal 
} = useArchitectureModal()

const { playClick, playSuccess, playHover } = useSoundEffects()
const copied = ref(false)

const handleClose = () => {
  playClick()
  closeModal()
}

const selectPreset = (presetId: string) => {
  playClick()
  selectedPresetId.value = presetId
  const firstNode = presets.find(p => p.id === presetId)?.nodes[0]
  if (firstNode) {
    activeNodeId.value = firstNode.id
  }
}

const selectNode = (nodeId: string) => {
  playHover()
  activeNodeId.value = nodeId
}

const setLoad = (load: number) => {
  playClick()
  currentRpsLoad.value = load
}

const copyCode = (code: string) => {
  if (!code) return
  navigator.clipboard.writeText(code)
  copied.value = true
  playSuccess()
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
</style>
