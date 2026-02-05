<template>
  <section class="relative py-32 bg-slate-50 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] animate-pulse-slow delay-1000 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        data-aos="zoom-in-up" 
        class="relative overflow-hidden rounded-[3rem] border border-white/50 bg-white/40 backdrop-blur-xl shadow-2xl shadow-purple-500/10 p-12 md:p-20 text-center"
      >
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none"></div>
        
        <div class="relative z-10 max-w-3xl mx-auto">
           <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm mb-8 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span class="text-xs font-bold text-slate-600 tracking-wider uppercase">Open for Opportunities</span>
           </div>

           <h2 class="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Have a project in mind? <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Let's build it together.
              </span>
           </h2>

           <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              I'm currently available for freelance projects and full-time roles. 
              Let's turn your abstract ideas into <span class="text-slate-900 font-bold decoration-wavy underline decoration-purple-400">digital reality.</span>
           </p>

           <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                @click="$router.push('/contact')" 
                class="group relative px-10 py-5 bg-slate-900 text-white text-lg font-bold rounded-full overflow-hidden shadow-xl hover:shadow-purple-600/40 hover:-translate-y-1 transition-all duration-300"
              >
                  <div class="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                  
                  <span class="relative flex items-center gap-3">
                    Start a Conversation
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
              </button>
              
              <a href="mailto:dikamahar884@gmail.com" class="px-10 py-5 text-slate-600 font-bold hover:text-purple-600 transition-colors flex items-center gap-2">
                 Or email me directly
              </a>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes shine {
    0% { left: -100%; }
    100% { left: 200%; }
}
.group-hover\:animate-shine:hover {
    animation: shine 1.5s;
}
</style>
