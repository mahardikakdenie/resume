<template>
  <div class="relative min-h-screen bg-white overflow-x-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-0 left-0 w-32 h-32 md:w-96 md:h-96 bg-purple-100/40 blur-[60px] md:blur-[150px] rounded-full"></div>
      <div class="absolute bottom-20 right-0 w-48 h-48 md:w-[500px] md:h-[500px] bg-blue-100/30 blur-[60px] md:blur-[150px] rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-32 text-left">
      <!-- Hero Section -->
      <div class="relative mb-12 md:mb-32 px-2 md:px-0">
        <div data-aos="fade-down" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-4 md:mb-8 transition-transform active:scale-95">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          <span class="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">{{ $t('common.knowledge_base') }}</span>
        </div>
        
        <h1 data-aos="fade-right" class="font-black leading-[1.1] text-slate-900 tracking-tighter">
          <span class="text-3xl md:text-6xl block mb-1 opacity-20 uppercase">My</span>
          <span class="text-[11vw] sm:text-7xl md:text-9xl block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 break-words leading-none uppercase">
            {{ $t('documentation.hero_title') }}
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" class="mt-6 text-slate-500 max-w-2xl text-base md:text-2xl font-medium leading-relaxed">
          {{ $t('documentation.hero_description') }}
        </p>
      </div>

      <!-- Content List -->
      <ContentList path="/documentation" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div 
            v-for="(article, index) in list" 
            :key="article._path"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            :class="[
              'group relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 text-left',
              'rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12',
              index === 0 
                ? 'md:col-span-2 lg:col-span-2 bg-slate-900 text-white shadow-2xl shadow-purple-900/20' 
                : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'
            ]"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              :class="index === 0 ? 'bg-gradient-to-br from-purple-600/10 to-transparent' : 'bg-gradient-to-br from-purple-500/5 to-transparent'"
            ></div>

            <div class="relative z-10 text-left">
              <div class="flex items-center justify-between mb-8 md:mb-10 text-left">
                <span 
                  :class="[
                    'px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full border',
                    index === 0 ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'
                  ]"
                >
                  {{ article.category || 'Docs' }}
                </span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  {{ formatDate(article.date) }}
                </span>
              </div>

              <h2 
                :class="[
                  'font-black mb-4 md:mb-6 transition-colors duration-300 leading-tight tracking-tight text-left',
                  index === 0 ? 'text-2xl sm:text-4xl md:text-6xl text-white group-hover:text-purple-400' : 'text-xl md:text-4xl text-slate-900 group-hover:text-purple-600'
                ]"
              >
                {{ article.title }}
              </h2>
              <p 
                :class="[
                  'text-sm md:text-xl leading-relaxed mb-8 md:mb-10 line-clamp-3 text-left',
                  index === 0 ? 'text-slate-400' : 'text-slate-500 font-medium'
                ]"
              >
                {{ article.description }}
              </p>
            </div>

            <div class="relative z-10 flex items-center justify-between mt-auto pt-6 md:pt-8 border-t" :class="index === 0 ? 'border-white/10' : 'border-slate-50'">
              <span class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{{ $t('common.analysis') }}</span>
              
              <NuxtLink 
                :to="article._path"
                :class="[
                  'inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl transition-all duration-300 active:scale-90 group/btn',
                  index === 0 ? 'bg-white text-slate-900 hover:bg-purple-600 hover:text-white' : 'bg-slate-900 text-white hover:bg-purple-600'
                ]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-6 md:w-6 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
