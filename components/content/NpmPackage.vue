<template>
  <div class="my-10 p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 rounded-[2rem] shadow-xl shadow-purple-500/20">
    <div class="bg-white rounded-[1.8rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-6">
        <div class="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/20">
          <svg viewBox="0 0 24 24" class="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.666H5.334v-4H4v4H1.334v-5.332h5.332v5.332zm4 0H9.334v-4H8v4H6.666v-5.332h4v5.332zm12 0h-1.332v-4h-1.334v4h-1.334v-4h-1.332v4H13.334v-5.332h9.332v5.332z"/>
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-black text-slate-900 mb-1">{{ name }}</h3>
          <p class="text-sm text-slate-500 font-medium">Available on NPM Registry</p>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <div class="flex-1 md:flex-none bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-mono text-sm text-slate-600 flex items-center gap-3">
          <span class="text-purple-600 font-bold">$</span>
          <code>npm i {{ name }}</code>
          <button @click="copyCommand" class="ml-2 p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-400 hover:text-slate-600">
            <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
        <a :href="url" target="_blank" class="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-purple-600 transition-all duration-300 shadow-lg shadow-slate-900/10 text-center">
          View on NPM
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const copyCommand = () => {
  navigator.clipboard.writeText(`npm i ${props.name}`)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
