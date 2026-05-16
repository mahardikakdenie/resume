<template>
    <div class="min-h-screen pb-20 bg-slate-50/50 transition-all duration-700">
        <!-- Main Content (Only show if data exists and loaded) -->
        <div v-if="projectDetail && isLoaded">
            <!-- Hero Section -->
            <div class="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-100 text-left">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
                    <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s;"></div>
                </div>

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <div class="max-w-5xl mx-auto">
                        <NuxtLink 
                            to="/project" 
                            class="inline-flex items-center text-sm font-black text-slate-400 hover:text-purple-600 transition-all mb-12 group uppercase tracking-widest"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            {{ $t('common.back') }}
                        </NuxtLink>

                        <div class="space-y-6 text-left">
                            <div class="flex items-center gap-3">
                                <span class="px-4 py-1.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                                    {{ projectDetail.type }}
                                </span>
                                <span v-if="projectDetail.badge" class="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                                    {{ projectDetail.badge }}
                                </span>
                            </div>
                            <h1 class="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter text-left">
                                {{ projectDetail.name }}
                            </h1>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-100 text-left">
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 text-nowrap">Role</p>
                                <p class="text-sm font-bold text-slate-900">{{ projectDetail.role || 'Software Engineer' }}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Timeline</p>
                                <p class="text-sm font-bold text-slate-900">{{ projectDetail.year || '2024' }}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Service</p>
                                <p class="text-sm font-bold text-slate-900">{{ projectDetail.type }}</p>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tech Stack</p>
                                <p class="text-sm font-bold text-purple-600 line-clamp-1">{{ projectDetail.tools?.slice(0, 2).join(', ') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Section -->
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 text-left">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div class="lg:col-span-8 space-y-20 text-left">
                            <div class="relative group">
                                <div class="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                                <div class="relative bg-white p-3 rounded-[3rem] shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
                                    <img :src="currentSlider" alt="Project Preview" class="w-full aspect-video object-cover rounded-[2.5rem]" />
                                </div>
                            </div>

                            <div v-if="projectDetail.features?.length" class="space-y-10 text-left">
                                <h2 class="text-3xl font-black text-slate-900 tracking-tight">{{ $t('common.key_features') }}</h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                    <div v-for="(feature, i) in projectDetail.features" :key="i" 
                                        class="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                                        <div class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600 mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 class="text-lg font-black text-slate-900 leading-tight">{{ $t(feature) }}</h4>
                                    </div>
                                </div>
                            </div>

                            <div v-if="projectDetail.challenges" class="relative group text-left">
                                <div class="relative p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden shadow-2xl shadow-purple-900/20 text-left">
                                    <h3 class="text-3xl font-black mb-8">{{ $t('common.technical_challenges') }}</h3>
                                    <p class="text-xl text-slate-400 leading-relaxed italic text-left">"{{ $t(projectDetail.challenges) }}"</p>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-4 text-left">
                            <div class="sticky top-32 space-y-8">
                                <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-900/5 border border-slate-100 text-left">
                                    <h3 class="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em] mb-6">{{ $t('common.briefing') }}</h3>
                                    <h2 class="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{{ $t('common.about_this_work') }}</h2>
                                    <p class="text-slate-500 leading-relaxed mb-10 font-medium">{{ $t(projectDetail.description) }}</p>
                                    <div class="space-y-8 text-left">
                                        <div>
                                            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 uppercase">{{ $t('common.technologies') }}</h4>
                                            <div class="flex flex-wrap gap-2 text-left">
                                                <span v-for="tool in projectDetail.tools" :key="tool" class="px-4 py-2 text-[11px] font-black bg-slate-900 text-white rounded-xl uppercase tracking-widest">{{ tool }}</span>
                                            </div>
                                        </div>
                                        <div class="pt-8 border-t border-slate-50 space-y-4">
                                            <a v-if="projectDetail.url" :href="projectDetail.url" target="_blank" class="flex items-center justify-center gap-3 w-full py-5 bg-purple-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all uppercase tracking-widest text-[10px]">{{ $t('common.live_preview') }}</a>
                                            <NuxtLink v-if="projectDetail.documentationLink" :to="projectDetail.documentationLink" class="flex items-center justify-center gap-3 w-full py-5 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-900 uppercase tracking-widest text-[10px]">{{ $t('common.case_study') }}</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Not Found -->
        <div v-else-if="isLoaded && !projectDetail" class="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 class="text-9xl font-black text-slate-100">404</h1>
            <p class="text-xl font-bold text-slate-600 mt-4 uppercase tracking-widest">Project Not Found</p>
            <NuxtLink to="/project" class="mt-8 px-10 py-5 bg-purple-600 text-white font-black rounded-2xl shadow-xl">Back to Archive</NuxtLink>
        </div>

        <!-- Loading -->
        <div v-else class="flex flex-col items-center justify-center h-screen gap-4">
            <div class="w-16 h-16 border-4 border-slate-100 border-t-purple-600 rounded-full animate-spin"></div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">{{ $t('common.initializing') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '#app'
import type { IProjects } from '@/lib/staticInterface'

const { t } = useI18n()
const projectDetail = ref<IProjects | null>(null)
const currentSlider = ref('')
const isLoaded = ref(false)
const route = useRoute()

// Fetch data dari API kita
const { data: response, refresh } = await useFetch(`/api/projects?slug=${route.params.slug}`, {
    key: `project-${route.params.slug}`,
})

const updateData = () => {
    if (response.value && response.value.data) {
        projectDetail.value = response.value.data as IProjects
        currentSlider.value = projectDetail.value.images?.[0] || projectDetail.value.image
    } else {
        projectDetail.value = null
    }
}

updateData()

watch(() => route.params.slug, () => {
    refresh()
    updateData()
})

onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true
    }, 500)
})

const getAbsoluteImageUrl = (url?: string) => {
    if (!url) return 'https://i.ibb.co.com/8mSD7K6/og-image-mahardika.png' // Default fallback
    if (url.startsWith('http')) return url
    return `https://mahardikakdenie.my.id${url.startsWith('/') ? '' : '/'}${url}`
}

useSeoMeta({
    title: () => `${projectDetail.value?.name || 'Project'} | Mahardika Portfolio`,
    ogTitle: () => `${projectDetail.value?.name || 'Project'} | Mahardika Portfolio`,
    description: () => projectDetail.value?.description ? t(projectDetail.value.description) : '',
    ogDescription: () => projectDetail.value?.description ? t(projectDetail.value.description) : '',
    ogImage: () => getAbsoluteImageUrl(projectDetail.value?.image),
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { height: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { @apply bg-slate-200 rounded-full; }
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
