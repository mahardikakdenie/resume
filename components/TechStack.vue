<template>
  <div class="relative py-24 overflow-hidden -mt-20 z-30 pointer-events-none">
    <div class="transform -rotate-3 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 py-10 shadow-2xl shadow-purple-900/50 mx-[-50px] border-y border-white/20">
      
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div class="relative flex animate-marquee whitespace-nowrap hover:pause">
        <div v-for="i in 3" :key="i" class="flex gap-16 mx-8 items-center">
          
          <div 
            v-for="(skill, index) in skills" 
            :key="index"
            class="flex items-center gap-4 group"
          >
            <div class="relative p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 flex items-center justify-center w-[70px] h-[70px]">
                 
                 <img 
                    :src="getSkillImage(skill)" 
                    :alt="skill.title" 
                    class="w-full h-full object-contain drop-shadow-md transition-all filter group-hover:brightness-110" 
                    @error="handleImageError"
                 />

                 <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            <span class="text-2xl font-bold text-white drop-shadow-md tracking-wide group-hover:text-purple-100 transition-colors">
                {{ skill.title }}
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { skillDatas } from '@/lib/static';

// ==========================================
// 1. DATABASE URL EKSTERNAL (COPY DARI SKILLS)
// ==========================================
// Kita gunakan URL CDN yang sama persis agar konsisten dan pasti muncul.
const skillIconMap: Record<string, string> = {
    // Frontend
    'react': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'vue': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
    'html5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    'css3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    'javascript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'typescript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'tailwind-css': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    'bootstrap': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
    'sass': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    
    // Backend
    'nodejs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'expressjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'go-lang': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    'php': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    'laravel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
    'codeIgniter': 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-3-1175229.png',
    
    // Database & Tools
    'mysql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'pgsql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'mongoodb': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'vercell': 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
};

// ==========================================
// 2. FUNGSI RESOLVER GAMBAR (SAMA DENGAN SKILLS)
// ==========================================
const getSkillImage = (item: any) => {
    // A. Prioritas Utama: Cek Map Eksternal
    if (item.key && skillIconMap[item.key]) {
        return skillIconMap[item.key];
    }

    // B. Prioritas Kedua: Path dari static.ts (jika URL valid)
    if (item.thumb && item.thumb.startsWith('http')) {
        return item.thumb;
    }

    // C. Fallback Terakhir: Icon Generic
    return 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

const handleImageError = (e: Event) => {
    // Jika gambar gagal load, ganti ke icon generic code
    (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

// Mengambil data dari lib/static.ts
const skills = skillDatas && skillDatas.length > 0 ? skillDatas : [];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 50s linear infinite;
}
/* Pause animasi saat user hover mouse di atasnya agar bisa lihat detail */
.hover\:pause:hover {
    animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
</style>
