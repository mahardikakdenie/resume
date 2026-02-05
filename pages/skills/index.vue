<template>
  <div class="min-h-screen py-20 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-6">
      <div data-aos="fade-down" class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/60 px-6 py-2 rounded-full shadow-sm mb-4">
             <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span class="text-sm font-bold text-slate-600 tracking-wider uppercase">My Technical Arsenal</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
           Skills & <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Abilities</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div
          v-for="(ability, index) in abilities"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          @click="$router.push(`/skills/${ability.key}`)"
          class="group relative bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:border-purple-200"
        >
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                <img
                  :src="getSkillImage(ability)"
                  class="w-10 h-10 object-contain transition-transform duration-300"
                  :alt="ability.title" 
                  @error="handleImageError"
                />
            </div>

            <div class="text-center relative z-10">
                <h3 class="font-bold text-slate-700 group-hover:text-purple-600 transition-colors">
                    {{ ability.title }}
                </h3>
                <span class="inline-block mt-2 px-2 py-1 bg-slate-100 text-xs text-slate-500 rounded-md font-medium group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                    {{ ability.experienceSkill || 'Skill' }}
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
import { type ISkillDatas } from '@/lib/staticInterface';

const abilities = ref<Array<ISkillDatas>>(skillDatas);

// === INTEGRASI FIX GAMBAR (SAMA SEPERTI TECHSTACK) ===
const skillIconMap: Record<string, string> = {
    'react': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'vue': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
    'html5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    'css3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    'javascript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'typescript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'tailwind-css': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    'bootstrap': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
    'sass': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    'nodejs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'expressjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'go-lang': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    'php': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    'laravel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
    'codeIgniter': 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-3-1175229.png',
    'mysql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'pgsql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'mongoodb': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'vercell': 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
};

const getSkillImage = (item: ISkillDatas) => {
    if (item.key && skillIconMap[item.key]) return skillIconMap[item.key];
    if (item.thumb && item.thumb.startsWith('http')) return item.thumb;
    return 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

const handleImageError = (e: Event) => {
    (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};
</script>
