<template>
  <section class="relative min-h-screen flex items-center overflow-hidden py-32">
    <div class="absolute inset-0 bg-slate-50"></div>
    <div class="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-purple-200/40 via-blue-200/40 to-transparent rounded-full blur-[150px] translate-x-1/4 -translate-y-1/4 animate-pulse-slow"></div>
    
    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-7" data-aos="fade-right" data-aos-duration="1200">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-8">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span class="text-sm font-bold text-slate-700 tracking-wide uppercase">Software Engineer (5+ Years Exp)</span>
          </div>

          <h1 class="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
            Building<br>
            <span class="relative z-10 inline-block px-2">
              Scalable
               <div class="absolute inset-0 bg-gradient-to-r from-purple-200/80 to-blue-200/80 -z-10 transform -rotate-2 rounded-lg scale-105"></div>
            </span><br>
            Solutions.
          </h1>

          <p class="text-xl text-slate-600 md:max-w-xl leading-relaxed mb-12 font-medium">
            I'm <strong class="text-slate-900">Mahardika</strong>. I engineer high-performance 
            <span class="text-purple-600 font-bold">Web & Mobile Apps</span> using Flutter, Vue.js, and Laravel. 
            Proven track record in Insurance, E-commerce, and SaaS platforms.
          </p>
          
          <div class="flex flex-wrap gap-6 items-center">
            <button @click="$router.push('/project')" class="group relative px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-900/30 transition-all duration-300 active:scale-95">
               <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span class="relative z-10 flex items-center gap-2">
                 View Portfolio
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </span>
            </button>
             <a href="/CV_MAHARDIKA_KESSUMA_DENIE_07_DESEMBER_2025.pdf" target="_blank" class="text-lg font-bold text-slate-600 hover:text-purple-600 transition-colors flex items-center gap-2 group">
              Download CV
               <div class="w-8 h-[2px] bg-slate-300 group-hover:bg-purple-600 group-hover:w-12 transition-all"></div>
             </a>
          </div>
        </div>

        <div class="lg:col-span-5 relative hidden lg:block" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
           <div class="relative z-10 w-full aspect-square rounded-[3rem] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl border border-white/50 shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-700 overflow-hidden p-3">
              <div class="w-full h-full rounded-[2.5rem] bg-slate-100 overflow-hidden relative group">
                   <img 
                    src="https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg" 
                    alt="Mahardika Kessuma Denie" 
                    class="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700" 
                   />
                   <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                   <div class="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                       <p class="font-bold text-slate-900">Clean Code &</p>
                       <p class="text-purple-600 font-semibold">Intuitive UX</p>
                   </div>
              </div>
           </div>
           <div class="absolute top-1/4 -left-12 w-24 h-24 bg-purple-500 rounded-2xl rotate-12 blur-xl opacity-60 animate-float-slow -z-10"></div>
           <div class="absolute bottom-1/4 -right-12 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50 animate-float-slow delay-700 -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-float-slow { animation: float 6s ease-in-out infinite; }
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
    50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
}
</style>
