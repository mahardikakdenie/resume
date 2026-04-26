<template>
  <div class="relative min-h-screen">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-0 left-10 w-72 h-72 bg-purple-200/20 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 blur-[120px] rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Hero Section -->
      <div class="relative mb-20 text-center lg:text-left">
        <div data-aos="fade-down" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span class="text-xs font-bold text-purple-600 uppercase tracking-widest">Technical Library</span>
        </div>
        
        <h1 data-aos="fade-right" data-aos-delay="100" class="text-5xl md:text-7xl font-black mb-6 leading-tight">
          My <br class="hidden lg:block"/>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            Documentation
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" class="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed">
          Ruang arsip digital tempat saya mendokumentasikan setiap baris logika, arsitektur sistem, dan perjalanan belajar saya dalam dunia software engineering.
        </p>
      </div>

      <!-- Content List -->
      <ContentList path="/documentation" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(article, index) in list" 
            :key="article._path"
            data-aos="zoom-in-up"
            :data-aos-delay="index * 150"
            :class="[
              'group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-3',
              index === 0 ? 'md:col-span-2 lg:col-span-2 bg-slate-900 text-white shadow-2xl shadow-purple-900/20' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'
            ]"
          >
            <!-- Decorative Shape (Only for index 0) -->
            <div v-if="index === 0" class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-transparent blur-3xl pointer-events-none"></div>

            <div class="relative z-10">
              <div class="flex items-center justify-between mb-8">
                <span 
                  :class="[
                    'px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border',
                    index === 0 ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'
                  ]"
                >
                  {{ article.category || 'Docs' }}
                </span>
                <div class="flex items-center gap-2 text-[10px] font-bold" :class="index === 0 ? 'text-slate-400' : 'text-slate-400'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  5 MIN READ
                </div>
              </div>

              <h2 
                :class="[
                  'font-black mb-4 transition-colors duration-300',
                  index === 0 ? 'text-3xl md:text-4xl text-white group-hover:text-purple-400' : 'text-2xl text-slate-900 group-hover:text-purple-600'
                ]"
              >
                {{ article.title }}
              </h2>
              <p 
                :class="[
                  'text-sm leading-relaxed mb-8 line-clamp-3',
                  index === 0 ? 'text-slate-400' : 'text-slate-500'
                ]"
              >
                {{ article.description }}
              </p>
            </div>

            <div class="relative z-10 flex items-center justify-between mt-auto pt-6 border-t" :class="index === 0 ? 'border-white/10' : 'border-slate-50'">
              <div class="flex flex-col">
                <span class="text-[10px] font-bold uppercase tracking-tighter text-slate-500">Published on</span>
                <span :class="['text-xs font-bold', index === 0 ? 'text-slate-300' : 'text-slate-900']">
                  {{ formatDate(article.date) }}
                </span>
              </div>
              
              <NuxtLink 
                :to="article._path"
                :class="[
                  'inline-flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group/btn',
                  index === 0 ? 'bg-purple-600 text-white hover:bg-white hover:text-purple-600' : 'bg-slate-900 text-white hover:bg-purple-600'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>

            <!-- Hover Glow Effect -->
            <div 
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              :class="index === 0 ? 'bg-gradient-to-br from-purple-600/5 to-transparent' : 'bg-gradient-to-br from-purple-500/5 to-transparent'"
            ></div>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts">
const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

useSeoMeta({
  title: 'Documentation | Mahardika Kessuma Denie',
  description: 'Technical documentation and engineering insights by Mahardika Kessuma Denie.'
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
