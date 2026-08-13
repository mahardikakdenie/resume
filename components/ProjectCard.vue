<template>
  <div
    data-aos="fade-up"
    :data-aos-delay="(index % 3) * 100"
    class="group relative flex flex-col h-full text-left"
  >
    <!-- High-End Glassmorphic Project Card Box -->
    <div 
      class="relative bg-white/75 dark:bg-slate-900/75 rounded-3xl border border-slate-200/70 dark:border-slate-800/80 overflow-hidden transition-all duration-500 group-hover:border-purple-500/40 dark:group-hover:border-purple-400/40 group-hover:shadow-[0_30px_70px_-10px_rgba(99,102,241,0.25)] group-hover:-translate-y-2.5 flex flex-col h-full backdrop-blur-md"
    >
      <!-- Card Image Header Container -->
      <div 
        @click="$emit('click-project', project.link)" 
        class="relative overflow-hidden aspect-[16/10] bg-slate-100/50 dark:bg-slate-800/30 flex items-center justify-center p-8 cursor-pointer group/img border-b border-slate-100 dark:border-slate-800"
      >
        <!-- Top Status Badge -->
        <div class="absolute top-4 left-4 z-20 px-3.5 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-xl font-bold text-[10px] text-slate-850 dark:text-slate-100 shadow-md uppercase tracking-wider flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {{ project.badge || 'Production' }}
        </div>

        <!-- Year Pill -->
        <div class="absolute top-4 right-4 z-20 px-3 py-1.5 bg-slate-900/80 dark:bg-slate-850/80 backdrop-blur-md text-white rounded-xl font-bold text-[10px] uppercase tracking-wider">
          {{ project.year || '2024' }}
        </div>

        <!-- Main Project Image -->
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-full object-contain transition-all duration-700 group-hover/img:scale-108 group-hover/img:rotate-1"
          @error="handleImageError"
        />

        <!-- Dynamic Gradient Hover Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span class="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Explore Case Study
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>

      <!-- Card Content Body -->
      <div class="p-6 md:p-8 flex-grow flex flex-col text-left">
        <!-- Category Tag & Role -->
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[10px] font-black uppercase tracking-wider text-purple-650 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/30 px-3 py-1 rounded-lg border border-purple-200/50 dark:border-purple-800/40">
            {{ project.type }}
          </span>
          <span v-if="project.role" class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider truncate max-w-[140px]">
            {{ project.role }}
          </span>
        </div>

        <!-- Title -->
        <h3 
          @click="$emit('click-project', project.link)"
          class="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight leading-snug cursor-pointer"
        >
          {{ project.name }}
        </h3>

        <!-- Description -->
        <p class="text-slate-650 dark:text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed font-normal">
          {{ $t(project.description) }}
        </p>

        <!-- Skill & Technology Stack (Kotak Badge Skill) -->
        <div class="mt-auto space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div class="flex flex-wrap items-center gap-1.5">
            <button
              v-for="tool in project.tools"
              :key="tool"
              @click.stop="$emit('select-skill', tool)"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-750/60 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:border-purple-500/40 dark:hover:border-purple-400/40 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105"
            >
              <img
                v-if="getSkillData(tool)?.image"
                :src="getSkillData(tool)?.image"
                :alt="tool"
                class="w-3.5 h-3.5 object-contain"
                @error="handleImageError"
              />
              <span>{{ tool }}</span>
            </button>
          </div>

          <!-- Footer Action Buttons -->
          <div class="flex items-center justify-between pt-2">
            <button
              @click="$emit('click-project', project.link)"
              class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <!-- Links Icons (Demo / Docs) -->
            <div class="flex items-center gap-2">
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                title="Live Preview"
                class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors text-slate-650 dark:text-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <NuxtLink
                v-if="project.documentationLink"
                :to="project.documentationLink"
                @click.stop
                title="Documentation"
                class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors text-slate-650 dark:text-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProjects } from '@/lib/staticInterface';
import { skillDatas } from '@/lib/static';

const props = withDefaults(
  defineProps<{
    project: IProjects;
    index?: number;
  }>(),
  {
    index: 0
  }
);

defineEmits<{
  (e: 'select-skill', toolName: string): void;
  (e: 'click-project', link: string): void;
}>();

function getSkillData(toolName: string) {
  return skillDatas.find(s => 
    s.title.toLowerCase() === toolName.toLowerCase() ||
    s.key.toLowerCase() === toolName.toLowerCase() ||
    toolName.toLowerCase().includes(s.title.toLowerCase())
  );
}

function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src = 'https://placehold.co/600x400/f8fafc/6366f1?text=Project+Preview';
}
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
