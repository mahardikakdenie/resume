<template>
	<div class="min-h-screen relative bg-slate-50 overflow-hidden font-poppins selection:bg-purple-200 selection:text-purple-900">
        <div class="fixed inset-0 z-0 pointer-events-none">
            <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[100px] animate-pulse"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[100px] animate-pulse" style="animation-delay: 2s;"></div>
        </div>

		<Navbar />
		
        <main class="relative z-10 pt-24 min-h-[calc(100vh-300px)]">
            <PersonalInformationItem />
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nuxt-page />
            </div>
        </main>
		
        <Footer />

        <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-8"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-8"
        >
            <button 
                v-show="showBackToTop"
                @click="scrollToTop"
                class="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white text-purple-600 shadow-xl border border-purple-100 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </transition>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const checkScroll = () => {
    showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})

useSeoMeta({
	title: 'Mahardika Kessuma Denie - Software Developer',
	ogTitle: 'Mahardika Kessuma Denie - Portfolio',
	description: 'Professional Portfolio of Mahardika Kessuma Denie, a Software Developer specializing in modern web technologies.',
	ogDescription: 'Discover my projects, skills, and professional journey in software development.',
    themeColor: '#9333ea',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
