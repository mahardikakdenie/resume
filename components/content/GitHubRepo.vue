<template>
  <div class="my-10 p-px bg-gradient-to-br from-slate-200 via-purple-400 to-blue-500 rounded-[2rem] shadow-2xl shadow-purple-500/10 group">
    <div class="bg-[#0d1117] rounded-[1.95rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
      <!-- Abstract Decor -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
      
      <div class="flex items-center gap-6 relative z-10">
        <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:border-purple-500/50 transition-colors duration-500">
          <svg viewBox="0 0 24 24" class="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.812-.26.812-.579 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-black text-white mb-1 group-hover:text-purple-400 transition-colors">{{ name }}</h3>
          <p class="text-sm text-slate-400 font-medium flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Public Repository
          </p>
        </div>
      </div>
      
      <div class="flex items-center gap-4 w-full md:w-auto relative z-10">
        <a :href="url" target="_blank" class="flex-1 md:flex-none px-8 py-4 bg-white text-slate-900 text-sm font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-xl hover:shadow-purple-500/20 text-center uppercase tracking-wider">
          Explore Source Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>
