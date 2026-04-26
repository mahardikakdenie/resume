<template>
  <section class="py-32 relative z-10 overflow-hidden text-left">
    <div class="container mx-auto px-6 md:px-12 lg:px-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-5 relative" data-aos="fade-up">
            <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] transform lg:-rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coding Environment" 
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            <div class="absolute -inset-4 bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 rounded-[3.5rem] opacity-30 blur-xl -z-10 animate-pulse-slow"></div>
        </div>

        <div class="lg:col-span-7 relative z-20 lg:-ml-12" data-aos="fade-up" data-aos-delay="200">
          <div class="p-8 md:p-12 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl">
              <h4 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase tracking-[0.3em] mb-4 text-[10px]">{{ $t('about.badge') }}</h4>
              <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                {{ $t('about.title_1') }}<br>
                <span class="text-slate-400">{{ $t('about.title_2') }} <span class="italic text-purple-600">{{ $t('about.title_italic') }}</span></span>
              </h2>
              
              <div class="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
                <p>
                  {{ $t('about.description_1', { name: 'Mahardika Kessuma Denie', years: '4 years' }) }}
                </p>
                <p>
                  {{ $t('about.description_2', { percent: '35%' }) }}
                </p>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                
                <div class="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30 transform hover:-translate-y-2 transition-all duration-300">
                    <h3 class="text-4xl font-black mb-1">5+</h3>
                    <p class="text-[10px] font-black uppercase tracking-widest opacity-80">{{ $t('about.stats_years') }}</p>
                </div>

                <div class="p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 transform hover:-translate-y-2 transition-all duration-300 delay-100">
                    <h3 class="text-4xl font-black mb-1">19+</h3>
                    <p class="text-[10px] font-black uppercase tracking-widest opacity-80">{{ $t('about.stats_projects') }}</p>
                </div>

                <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 delay-200">
                    <h3 class="text-4xl font-black mb-1">3.84</h3>
                    <p class="text-[10px] font-black uppercase tracking-widest opacity-80">{{ $t('about.stats_gpa') }}</p>
                </div>

              </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
