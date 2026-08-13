<template>
  <div class="min-h-screen py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <!-- Ambient Dynamic Background Glowing Orbs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Back Navigation Button -->
      <NuxtLink
        to="/skills"
        data-aos="fade-down"
        class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/50 shadow-sm hover:shadow-md transition-all text-xs font-bold uppercase tracking-wider mb-10 group"
      >
        <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{{ $t('common.back') }}</span>
      </NuxtLink>

      <div v-if="currentSkill">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Sidebar Detail Card -->
          <div class="lg:col-span-4" data-aos="fade-right">
            <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 overflow-hidden sticky top-28 text-left">
              <!-- Gradient Header Ribbon -->
              <div class="h-36 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay"></div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              </div>
              
              <div class="px-8 pb-8 -mt-16 text-center">
                <!-- Skill Icon Badge Container -->
                <div class="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-4 border-white dark:border-slate-900 flex items-center justify-center p-6 mb-6 transform hover:scale-105 hover:rotate-3 transition-all duration-500">
                  <img
                    :src="getSkillImage(currentSkill)"
                    :alt="currentSkill.title"
                    class="w-full h-full object-contain"
                  />
                </div>
                
                <!-- Skill Title & Mastery Tag -->
                <h1 class="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase">
                  {{ currentSkill.title }}
                </h1>

                <div class="flex items-center justify-center gap-2 mb-6">
                  <span class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-200/50 dark:border-purple-800/50">
                    <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                    {{ currentSkill.experienceSkill || 'Expert' }}
                  </span>
                </div>

                <!-- Description -->
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-8 font-medium text-center">
                  {{ $t(currentSkill.description) }}
                </p>

                <!-- Statistics Grid -->
                <div class="grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800/80 pt-6 text-center">
                  <div class="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p class="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-1">
                      {{ $t('about.stats_years') }}
                    </p>
                    <p class="text-2xl font-black text-purple-600 dark:text-purple-400">
                      {{ currentSkill.yearExperience || '5+' }}
                    </p>
                  </div>
                  <div class="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p class="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-1">
                      {{ $t('about.stats_projects') }}
                    </p>
                    <p class="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                      {{ currentSkill.projectRelated?.length || 0 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Content: Projects showcase -->
          <div class="lg:col-span-8 text-left" data-aos="fade-up" data-aos-delay="100">
            <!-- Header Title for Related Projects -->
            <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {{ $t('skills.built_with', { title: currentSkill.title }) }}
                  </h2>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Real-world applications built leveraging {{ currentSkill.title }}
                  </p>
                </div>
              </div>

              <span class="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                {{ currentSkill.projectRelated?.length || 0 }} Projects
              </span>
            </div>

            <!-- Projects Grid -->
            <div v-if="currentSkill.projectRelated && currentSkill.projectRelated.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div
                v-for="(project, i) in currentSkill.projectRelated"
                :key="i"
                class="group bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full text-left overflow-hidden relative"
              >
                <!-- Ambient hover glow -->
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <!-- Project Preview Image -->
                <div class="h-52 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative mb-6 border border-slate-200/60 dark:border-slate-800">
                  <img
                    v-if="project.image && !project.image.startsWith('http://localhost')"
                    :src="project.image"
                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    :alt="project.title"
                    @error="handleProjectImageError"
                  />
                  <div v-else class="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                    <svg class="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-[10px] font-black uppercase tracking-widest">{{ $t('common.no_preview') }}</span>
                  </div>
                </div>

                <!-- Project Content -->
                <div class="flex-grow text-left relative z-10">
                  <h3 class="font-black text-xl text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                    {{ project.title }}
                  </h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed font-medium">
                    {{ $t(project.description) }}
                  </p>
                </div>

                <!-- Action Buttons CTA -->
                <div class="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
                  <a
                    v-if="project.cta?.previewLink"
                    :href="project.cta?.previewLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-white transition-all active:scale-95 shadow-md"
                  >
                    <span>{{ $t('common.live_demo') }}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <NuxtLink
                    v-if="project.cta?.detailLink"
                    :to="project.cta?.detailLink"
                    :class="[
                      'flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95',
                      project.cta?.previewLink
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        : 'col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-purple-500/25'
                    ]"
                  >
                    <span>{{ $t('common.detail_project') }}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                  <span v-if="!project.cta?.previewLink && !project.cta?.detailLink" class="col-span-2 text-center text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 py-2">
                    {{ $t('common.private_project') }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Empty State for Related Projects -->
            <div v-else class="text-center py-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-lg">
              <div class="w-14 h-14 bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p class="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs italic">
                {{ $t('skills.no_projects') }}
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Skill Not Found State -->
      <div v-else class="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-12 shadow-xl max-w-md">
          <div class="w-16 h-16 bg-purple-100 dark:bg-purple-950/60 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 dark:text-purple-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-4">
            {{ $t('skills.not_found') }}
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
            The requested skill technology page could not be located in our library.
          </p>
          <NuxtLink
            to="/skills"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
          >
            <span>{{ $t('skills.browse_all') }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { skillDatas, projects } from '@/lib/static';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();

const currentSkill = computed(() => {
  const skill = skillDatas.find((curr) => curr?.key === route?.params.slug);
  if (!skill) return null;

  // Relational lookup: filter projects that use this skill
  const related = projects
    .filter(project => project.skillKeys?.includes(skill.key))
    .map(project => ({
      title: project.name,
      image: project.image,
      description: `skills_content.shared_project_desc.${project.link.replace(/-/g, '_')}`,
      cta: {
        detailLink: `/project/${project.link}`,
        previewLink: project.url
      }
    }));

  return {
    ...skill,
    projectRelated: related
  };
});

useSeoMeta({
  title: () => `${currentSkill.value?.title || 'Skill'} | Mahardika Portfolio`,
  ogTitle: () => `${currentSkill.value?.title || 'Skill'} | Mahardika Portfolio`,
  description: () => t(currentSkill.value?.description || ''),
  ogDescription: () => t(currentSkill.value?.description || '')
});

const skillIconMap: Record<string, string> = {
  react: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  vue: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  html5: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  css3: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  javascript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  typescript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'tailwind-css': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  bootstrap: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  sass: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  nodejs: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  expressjs: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'go-lang': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
  php: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  laravel: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
  codeIgniter: 'https://cdn.iconscout.com/icon/free/png-256/free-codeigniter-3-1175229.png',
  mysql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  pgsql: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  mongoodb: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  vercell: 'https://assets.vercel.app/image/upload/v1588805858/repositories/vercel/logo.png'
};

const getSkillImage = (item: any) => {
  if (item?.key && skillIconMap[item.key]) return skillIconMap[item.key];
  if (item?.thumb && item.thumb.startsWith('http')) return item.thumb;
  return 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png';
};

const handleProjectImageError = (e: Event) => {
  (e.target as HTMLElement).style.display = 'none';
};
</script>
