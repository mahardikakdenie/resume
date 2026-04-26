<template>
    <header 
        class="fixed top-0 z-50 w-full transition-all duration-500 px-4 pt-6"
        :class="isScrolled ? 'pt-4' : 'pt-8'"
    >
        <nav 
            data-aos="fade-down" 
            class="mx-auto max-w-5xl transition-all duration-500"
        >
            <div 
                class="relative px-6 py-3 flex items-center justify-between border border-white/20 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem]"
                :class="isScrolled ? 'py-3 shadow-purple-500/5' : 'py-4'"
            >
                <!-- Logo -->
                <div class="flex-shrink-0 cursor-pointer group" @click="$router.push('/')">
                    <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
                        Mahardika
                    </span>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-1">
                    <ul class="flex items-center p-1 bg-slate-900/5 rounded-2xl">
                        <li v-for="(list, index) in lists" :key="index">
                            <span
                                :class="[
                                    isActive(list.link) 
                                        ? 'bg-white text-purple-600 shadow-sm' 
                                        : 'text-slate-600 hover:text-purple-600 hover:bg-white/50',
                                    'px-4 py-2 text-sm font-bold cursor-pointer rounded-xl transition-all duration-300 block'
                                ]"
                                @click="$router.push(list.link)"
                            >
                                {{ list.label }}
                            </span>
                        </li>
                    </ul>
                    
                    <div class="w-[1px] h-6 bg-slate-200 mx-4"></div>

                    <button 
                        class="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-300 bg-slate-900 rounded-xl hover:bg-purple-600 shadow-lg shadow-slate-900/10 hover:shadow-purple-500/30 overflow-hidden"
                        @click="$router.push('/contact')"
                    >
                        <span class="relative z-10 text-sm">Hire Me</span>
                        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-transform duration-500"></div>
                    </button>
                </div>

                <!-- Mobile Toggle -->
                <div class="flex md:hidden">
                    <button @click="toggleMobileMenu" class="w-10 h-10 flex items-center justify-center bg-slate-900/5 text-slate-700 hover:text-purple-600 rounded-xl transition-all">
                        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Progress Bar Integrated -->
                <div class="absolute bottom-0 left-6 right-6 h-[2px] bg-slate-100/50 rounded-full overflow-hidden">
                    <div 
                        class="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-out" 
                        :style="{ width: scrollProgress + '%' }"
                    ></div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform -translate-y-8 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-8 opacity-0"
            >
                <div v-if="isMobileMenuOpen" class="md:hidden mt-4 mx-2">
                    <div class="bg-white/90 backdrop-blur-2xl rounded-[2rem] border border-slate-100 p-4 shadow-2xl shadow-purple-500/10">
                        <ul class="space-y-2">
                            <li v-for="(list, index) in lists" :key="index">
                                <span
                                    :class="[
                                        isActive(list.link) 
                                            ? 'bg-purple-50 text-purple-600 font-black' 
                                            : 'text-slate-600 hover:bg-slate-50',
                                        'block px-6 py-4 text-base rounded-2xl transition-all'
                                    ]"
                                    @click="handleMobileLinkClick(list.link)"
                                >
                                    {{ list.label }}
                                </span>
                            </li>
                            <li class="pt-4 mt-2 border-t border-slate-100">
                                <button 
                                    class="w-full px-6 py-4 text-center font-black text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg active:scale-95 transition-all"
                                    @click="handleMobileLinkClick('/contact')"
                                >
                                    Hire Me
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Navigator {
    label: string
    link: string
}

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const isScrolled = ref(false)

const lists = ref<Array<Navigator>>([
    { label: 'About', link: '/' },
    { label: 'Skills', link: '/skills' },
    { label: 'Experience', link: '/experiences' },
    { label: 'Projects', link: '/project' },
    { label: 'Documentation', link: '/documentation' },
])

const isActive = (link: string) => {
    if (link === '/') return route.path === '/'
    return route.path.startsWith(link)
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileLinkClick = (link: string) => {
    router.push(link)
    isMobileMenuOpen.value = false
}

const handleScroll = () => {
    // Update isScrolled
    isScrolled.value = window.scrollY > 20

    // Update progress
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollHeight - clientHeight === 0) {
        scrollProgress.value = 0
        return
    }
    const windowHeight = scrollHeight - clientHeight
    const percent = (scrollTop / windowHeight) * 100
    scrollProgress.value = percent
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
