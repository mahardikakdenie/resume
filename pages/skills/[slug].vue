<template>
  <div class="min-h-screen py-20 bg-slate-50">
    <div class="container mx-auto px-6">
      
      <button 
        @click="$router.back()" 
        class="mb-8 flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Skills
      </button>

      <div v-if="currentSkill">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div class="lg:col-span-4" data-aos="fade-right">
                <div class="bg-white rounded-3xl shadow-xl shadow-purple-900/5 overflow-hidden sticky top-24 border border-slate-100">
                    <div class="h-32 bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden">
                        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>
                    
                    <div class="px-8 pb-8 -mt-16 text-center">
                        <div class="w-32 h-32 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center p-6 border-4 border-white mb-6">
                            <img 
                                :src="getSkillImage(currentSkill)" 
                                :alt="currentSkill.title" 
                                class="w-full h-full object-contain"
                            />
                        </div>
                        
                        <h1 class="text-3xl font-black text-slate-900 mb-2">{{ currentSkill.title }}</h1>
                        <div class="flex items-center justify-center gap-2 mb-6">
                            <span class="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                {{ currentSkill.experienceSkill }}
                            </span>
                        </div>

                        <p class="text-slate-600 leading-relaxed text-sm mb-8">
                            {{ currentSkill.description }}
                        </p>

                        <div class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                            <div>
                                <p class="text-xs text-slate-400 uppercase font-bold">Years Exp</p>
                                <p class="text-xl font-black text-slate-900">{{ currentSkill.yearExperience }} Yrs</p>
                            </div>
                            <div>
                                <p class="text-xs text-slate-400 uppercase font-bold">Projects</p>
                                <p class="text-xl font-black text-slate-900">{{ currentSkill.projectRelated?.length || 0 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-8" data-aos="fade-up" data-aos-delay="100">
                <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-2 h-8 bg-purple-600 rounded-full"></span>
                    Built with {{ currentSkill.title }}
                </h3>

                <div v-if="currentSkill.projectRelated && currentSkill.projectRelated.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div 
                        v-for="(project, i) in currentSkill.projectRelated" 
                        :key="i"
                        class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full group"
                    >
                        <div class="h-48 bg-slate-100 rounded-xl overflow-hidden relative mb-4">
                             <img 
                                v-if="project.image && !project.image.startsWith('http://localhost')" 
                                :src="project.image" 
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                alt="" 
                                @error="handleProjectImageError"
                             />
                             <div v-else class="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-300">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                 <span class="text-xs font-bold uppercase">No Preview</span>
                             </div>
                        </div>

                        <div class="flex-grow">
                            <h4 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{{ project.title }}</h4>
                            <p class="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                                {{ project.description }}
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-50">
                             <a 
                                :href="project.cta?.previewLink" 
                                target="_blank"
                                class="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-purple-600 transition-colors"
                                v-if="project.cta?.previewLink"
                             >
                                Live Demo
                             </a>
                             <a 
                                :href="project.cta?.githubLink" 
                                target="_blank"
                                class="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                                v-if="project.cta?.githubLink"
                             >
                                View Code
                             </a>
                             <span v-if="!project.cta?.previewLink && !project.cta?.githubLink" class="col-span-2 text-center text-xs text-slate-400 py-2 italic">
                                 Private Project
                             </span>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200">
                     <p class="text-slate-400">No specific projects listed for this skill yet.</p>
                </div>
            </div>

        </div>
      </div>

      <div v-else class="min-h-[50vh] flex flex-col items-center justify-center">
         <h2 class="text-2xl font-bold text-slate-300">Skill Not Found</h2>
         <button @click="$router.push('/skills')" class="mt-4 text-purple-600 font-bold hover:underline">Browse all skills</button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { skillDatas } from '@/lib/static';

const route = useRoute();

const currentSkill = computed(() =>
	skillDatas.find((curr) => curr?.key === route?.params.slug)
);

// Reuse Mapping agar konsisten
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

const getSkillImage = (item: any) => {
    if (item?.key && skillIconMap[item.key]) return skillIconMap[item.key];
    if (item?.thumb && item.thumb.startsWith('http')) return item.thumb;
    return 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

const handleProjectImageError = (e: Event) => {
    // Hide image if broken, shows fallback div underneath
    (e.target as HTMLElement).style.display = 'none';
}
</script>
