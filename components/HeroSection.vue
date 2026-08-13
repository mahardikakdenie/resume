<template>
  <section class="relative min-h-screen flex items-center overflow-hidden py-32 text-left">
    <!-- Ambient Background Light Orbs -->
    <div class="absolute inset-0 bg-slate-50/60 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-[65vw] h-[65vw] bg-gradient-to-bl from-purple-300/30 via-indigo-200/30 to-blue-200/20 rounded-full blur-[140px] translate-x-1/4 -translate-y-1/4 animate-pulse-slow pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-[45vw] h-[45vw] bg-gradient-to-tr from-purple-200/20 via-blue-200/30 to-transparent rounded-full blur-[120px] pointer-events-none animate-float-slow"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <!-- Left Content Column -->
        <div class="lg:col-span-7" data-aos="fade-right" data-aos-duration="1200">
          <!-- Status Badge with Dynamic Auto-Typing Role -->
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-purple-100/80 shadow-md shadow-purple-500/5 mb-8 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-0.5 min-h-[40px]">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>
            <span class="text-[11px] font-extrabold text-slate-800 tracking-widest uppercase flex items-center">
              <span>{{ typedRoleText }}</span>
              <span class="inline-block w-1.5 h-3.5 bg-purple-600 ml-1 animate-cursor-blink"></span>
            </span>
          </div>

          <!-- Hero Headline -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.02] tracking-tighter mb-8">
            {{ $t('hero.title_1') }}<br>
            <span class="relative z-10 inline-block my-1 px-3 py-1">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 font-black">
                {{ $t('hero.title_2') }}
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-purple-100/90 to-blue-100/90 -z-10 transform -rotate-1 rounded-2xl scale-105 shadow-inner border border-purple-200/50 block"></span>
            </span><br>
            {{ $t('hero.title_3') }}.
          </h1>

          <!-- Description with Typewriter Animation & Cursor -->
          <div class="min-h-[110px] sm:min-h-[90px] md:min-h-[100px] mb-10">
            <p class="text-lg md:text-xl text-slate-600 md:max-w-xl leading-relaxed font-medium">
              <span>{{ typedDescText }}</span>
              <span class="inline-block w-2 h-5 bg-gradient-to-b from-purple-600 to-indigo-600 ml-1 rounded-sm align-middle animate-cursor-blink shadow-sm shadow-purple-500/50"></span>
            </p>
          </div>
          
          <!-- CTA Action Buttons -->
          <div class="flex flex-wrap gap-6 items-center">
            <!-- Primary Action Button -->
            <button 
              @click="$router.push('/project')" 
              class="group relative px-9 py-4 sm:px-10 sm:py-5 bg-slate-900 text-white text-[11px] font-black rounded-2xl overflow-hidden shadow-xl shadow-purple-950/20 hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-500 active:scale-95 uppercase tracking-[0.2em]"
            >
               <!-- Shimmer Light Sweep Effect -->
               <div class="absolute -inset-full top-0 w-1/2 h-full z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
               <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span class="relative z-10 flex items-center gap-3">
                 {{ $t('hero.view_portfolio') }}
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </span>
            </button>
            
            <!-- Secondary Download CV Button -->
            <button 
              @click="openCvModal('/cv_mahardikakdenie.pdf')" 
              type="button"
              class="text-[11px] font-extrabold text-slate-600 hover:text-purple-600 transition-colors duration-300 flex items-center gap-3 group uppercase tracking-[0.2em] py-3 px-2 cursor-pointer"
            >
              {{ $t('hero.download_cv') }}
              <div class="w-8 h-[2px] bg-slate-300 group-hover:bg-purple-600 group-hover:w-12 transition-all duration-300"></div>
            </button>
          </div>
        </div>

        <!-- Right Visual Showcase Column -->
        <div class="lg:col-span-5 relative hidden lg:block" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
           <!-- Slow-Spinning Background Gradient Aura Frame -->
           <div class="absolute inset-0 w-full h-full rounded-[3.5rem] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-2xl animate-spin-slow pointer-events-none"></div>
           
           <!-- Main Image Container Frame with Simulated Parallax -->
           <div class="relative z-10 w-full aspect-square rounded-[3rem] bg-gradient-to-br from-white/80 via-white/40 to-white/10 backdrop-blur-3xl border border-white/60 shadow-2xl shadow-purple-950/10 rotate-2 transform hover:rotate-0 hover:scale-[1.03] transition-all duration-700 overflow-hidden p-3 text-left group/card">
              <div class="w-full h-full rounded-[2.5rem] bg-slate-200 overflow-hidden relative">
                   <!-- Profile Image with Opposite Translation for Parallax Depth -->
                   <img 
                    src="https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg" 
                    alt="Mahardika Kessuma Denie" 
                    class="w-full h-full object-cover transform scale-100 group-hover/card:scale-105 group-hover/card:-translate-y-2 group-hover/card:translate-x-1 transition-transform duration-700" 
                   />
                   <!-- Ambient shadow layer -->
                   <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-500"></div>
                   
                   <!-- Premium Console/Status Floating Widget -->
                   <div class="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-2xl transition-transform duration-500">
                       <div class="flex items-center gap-2 mb-1.5">
                         <span class="relative flex h-2 w-2">
                           <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                           <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                         </span>
                         <span class="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">system active</span>
                       </div>
                       <p class="font-extrabold text-white text-xs uppercase tracking-widest mb-0.5">{{ $t('hero.badge_1') }}</p>
                       <p class="text-purple-400 font-extrabold text-[10px] uppercase tracking-widest">{{ $t('hero.badge_2') }}</p>
                   </div>
              </div>
           </div>

           <!-- Floating Accent Badge 1: Top-Right -->
           <div class="absolute -top-6 -right-6 z-20 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-purple-100 shadow-xl animate-float-slow hidden sm:flex items-center gap-3">
             <span class="text-lg">⚡</span>
             <div>
               <p class="text-[9px] font-black text-slate-400 uppercase tracking-wider">Experience</p>
               <p class="text-xs font-black text-slate-800">{{ yearsFormatted }} Years</p>
             </div>
           </div>

           <!-- Floating Accent Badge 2: Bottom-Left -->
           <div class="absolute -bottom-6 -left-8 z-20 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl animate-float-delayed hidden sm:flex items-center gap-3">
             <span class="text-lg">🚀</span>
             <div>
               <p class="text-[9px] font-black text-slate-400 uppercase tracking-wider">Success Rate</p>
               <p class="text-xs font-black text-slate-800">100% Delivery</p>
             </div>
           </div>

           <!-- Ambient Glow Backdrops -->
           <div class="absolute top-1/4 -left-12 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-40 animate-float-slow -z-10"></div>
           <div class="absolute bottom-1/4 -right-12 w-36 h-36 bg-blue-400 rounded-full blur-2xl opacity-40 animate-float-delayed -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCvModal } from '~/composables/useCvModal'
import { useExperienceYears } from '~/composables/useExperienceYears'

const { openCvModal } = useCvModal()
const { yearsFormatted } = useExperienceYears(2021)

// --- Role Typewriter State & Config ---
const rolesList = [
  'Software Engineer | Building Scalable Web & Mobile Apps',
  'Full Stack Web & Mobile Specialist',
  'Scalable Backend Architecture Architect',
  'React, Next.js, Flutter & NestJS Developer'
]
const typedRoleText = ref('')
let roleIndex = 0
let roleCharIndex = 0
let isRoleDeleting = false
let roleTimer = null

// --- Description Typewriter State & Config ---
const fullDescriptionText = `I'm Mahardika. Versatile Software Engineer with ${yearsFormatted.value} of experience building high-performance web and mobile applications using React, Next.js, Flutter, NestJS, and scalable backend architectures.`
const typedDescText = ref('')
let descCharIndex = 0
let isDescDeleting = false
let descTimer = null

// Function to handle looping typewriter for roles
const typeRoleEffect = () => {
  const currentRole = rolesList[roleIndex]
  
  if (isRoleDeleting) {
    typedRoleText.value = currentRole.substring(0, roleCharIndex - 1)
    roleCharIndex--
  } else {
    typedRoleText.value = currentRole.substring(0, roleCharIndex + 1)
    roleCharIndex++
  }

  let typingSpeed = isRoleDeleting ? 30 : 60

  if (!isRoleDeleting && roleCharIndex === currentRole.length) {
    typingSpeed = 2500 // Hold role text for 2.5 seconds when typing completes
    isRoleDeleting = true
  } else if (isRoleDeleting && roleCharIndex === 0) {
    isRoleDeleting = false
    roleIndex = (roleIndex + 1) % rolesList.length
    typingSpeed = 500 // Short pause before typing next role title
  }

  roleTimer = setTimeout(typeRoleEffect, typingSpeed)
}

// Function to handle looping typewriter for description
const typeDescEffect = () => {
  if (isDescDeleting) {
    typedDescText.value = fullDescriptionText.substring(0, descCharIndex - 1)
    descCharIndex--
  } else {
    typedDescText.value = fullDescriptionText.substring(0, descCharIndex + 1)
    descCharIndex++
  }

  let typingSpeed = isDescDeleting ? 15 : 30

  if (!isDescDeleting && descCharIndex === fullDescriptionText.length) {
    typingSpeed = 5000 // Hold full description for 5 seconds when completed
    isDescDeleting = true
  } else if (isDescDeleting && descCharIndex === 0) {
    isDescDeleting = false
    typingSpeed = 500 // Pause before restarting description loop
  }

  descTimer = setTimeout(typeDescEffect, typingSpeed)
}

onMounted(() => {
  typeRoleEffect()
  typeDescEffect()
})

onUnmounted(() => {
  if (roleTimer) clearTimeout(roleTimer)
  if (descTimer) clearTimeout(descTimer)
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-pulse-slow { 
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
}
.animate-float-slow { 
  animation: float 6s ease-in-out infinite; 
}
.animate-float-delayed { 
  animation: float 6s ease-in-out 3s infinite; 
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-16px); 
  }
}

@keyframes shine {
  100% {
    left: 200%;
  }
}

.animate-shine {
  animation: shine 1.5s ease-in-out infinite;
}

/* Custom Caret / Cursor Blinking Animation */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor-blink {
  animation: blink 0.9s infinite;
}
</style>
