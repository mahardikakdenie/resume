<template>
  <div class="min-h-screen py-24 relative overflow-hidden bg-slate-50">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-down">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm mb-6">
            <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span class="text-xs font-bold text-slate-600 uppercase tracking-widest">Portfolio Archives</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Selected <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Works</span>
        </h1>
        <p class="text-slate-500 text-lg">
            A collection of projects tailored to business needs, ranging from SaaS platforms to high-performance mobile applications.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          
          <div class="flex flex-wrap justify-center gap-2 bg-white/60 p-1.5 rounded-xl backdrop-blur-sm border border-slate-200">
              <button 
                v-for="cat in categories" 
                :key="cat"
                @click="selectedCategory = cat"
                class="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300"
                :class="selectedCategory === cat ? 'bg-white text-purple-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'"
              >
                  {{ cat }}
              </button>
          </div>

          <div class="relative w-full md:w-72">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search projects..." 
                class="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all shadow-sm text-sm"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
      </div>

      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="index"
            class="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col h-full"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
              <div class="relative h-60 overflow-hidden bg-slate-100 group">
                  <img 
                    v-if="project.image"
                    :src="project.image" 
                    :alt="project.name" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    @error="handleImageError"
                  />
                  <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button 
                        @click="navigateToDetail(project.link)"
                        class="px-6 py-3 bg-white/90 backdrop-blur text-slate-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white"
                      >
                          View Case Study
                      </button>
                  </div>
                  
                  <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-lg text-slate-800 shadow-sm">
                      {{ project.type }}
                  </div>
              </div>

              <div class="p-6 flex flex-col flex-grow">
                  <div class="flex justify-between items-start mb-3">
                      <h3 class="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors cursor-pointer" @click="navigateToDetail(project.link)">
                          {{ project.name }}
                      </h3>
                  </div>
                  
                  <p class="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {{ project.description }}
                  </p>

                  <div v-if="project.tools" class="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                      <span 
                        v-for="tool in project.tools.slice(0, 4)" 
                        :key="tool"
                        class="px-2.5 py-1 bg-slate-50 text-slate-500 text-[11px] font-bold uppercase rounded-md border border-slate-100"
                      >
                          {{ tool }}
                      </span>
                      <span v-if="project.tools.length > 4" class="px-2 py-1 text-slate-400 text-[10px] font-bold">
                          +{{ project.tools.length - 4 }}
                      </span>
                  </div>
              </div>
          </div>
      </div>

      <div v-else class="text-center py-24">
          <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">No projects found</h3>
          <p class="text-slate-500">Try adjusting your search or category filter.</p>
          <button @click="resetFilter" class="mt-6 px-6 py-2 bg-purple-100 text-purple-700 font-bold rounded-lg hover:bg-purple-200 transition-colors">
              Clear Filters
          </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '@/lib/static';

const router = useRouter();
const searchQuery = ref('');
const selectedCategory = ref('All');

// Ambil semua kategori unik dari data projects + 'All'
const categories = computed(() => {
    const cats = new Set(projects.map(p => p.type ? p.type.split(' ')[0] : 'Web')); // Ambil kata pertama (Web, Mobile, dll)
    return ['All', ...Array.from(cats)];
});

const filteredProjects = computed(() => {
    return projects.filter(project => {
        // Filter by Category
        const matchCategory = selectedCategory.value === 'All' || (project.type && project.type.includes(selectedCategory.value));
        
        // Filter by Search
        const matchSearch = project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                            (project.description && project.description.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
                            project.tools?.some(t => t.toLowerCase().includes(searchQuery.value.toLowerCase()));

        return matchCategory && matchSearch;
    });
});

const navigateToDetail = (slug: string) => {
    if (slug) router.push(`/project/${slug}`);
};

const handleImageError = (e: Event) => {
    // Fallback to placeholder
    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f1f5f9/cbd5e1?text=No+Image';
};

const resetFilter = () => {
    searchQuery.value = '';
    selectedCategory.value = 'All';
};
</script>
