<template>
    <header class="fixed top-0 z-50 w-full transition-all duration-300 border-b border-white/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <nav data-aos="fade-down" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative flex h-20 items-center justify-between">
                <div class="flex-shrink-0 cursor-pointer" @click="$router.push('/')">
                    <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                        Mahardika
                    </span>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <ul class="flex gap-6">
                        <li v-for="(list, index) in lists" :key="index" class="relative group">
                            <span
                                :class="{
                                    'text-purple-600 font-semibold': $route.path === list?.link || ($route.path.includes(list?.link) && list.link !== '/'),
                                    'text-slate-600': $route.path !== list.link,
                                }"
                                class="text-sm cursor-pointer transition-colors duration-200 group-hover:text-purple-600"
                                @click="$router.push(list?.link)"
                            >
                                {{ list?.label }}
                            </span>
                            <span 
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"
                                :class="$route.path === list?.link ? 'w-full' : ''"
                            ></span>
                        </li>
                    </ul>
                    <button class="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5" @click="$router.push('/contact')">
                        Hire Me
                    </button>
                </div>

                <div class="flex md:hidden">
                    <button @click="toggleMobileMenu" class="text-slate-700 hover:text-purple-600 focus:outline-none p-2 rounded-md transition-colors">
                        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform -translate-y-4 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform -translate-y-4 opacity-0"
            >
                <div v-if="isMobileMenuOpen" class="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl">
                    <ul class="px-4 py-6 space-y-4">
                        <li v-for="(list, index) in lists" :key="index">
                            <span
                                :class="{
                                    'text-purple-600 font-bold bg-purple-50': $route.path === list?.link,
                                    'text-slate-600': $route.path !== list.link,
                                }"
                                class="block px-4 py-3 text-base rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                                @click="handleMobileLinkClick(list?.link)"
                            >
                                {{ list?.label }}
                            </span>
                        </li>
                        <li class="pt-4 border-t border-slate-100">
                             <button class="w-full px-5 py-3 text-center text-sm font-bold text-white bg-purple-600 rounded-lg shadow-md active:scale-95 transition-transform" @click="handleMobileLinkClick('/contact')">
                                Hire Me
                            </button>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav>
        
        <div class="h-[2px] bg-slate-100 w-full">
            <div class="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150 ease-out" :style="{ width: scrollProgress + '%' }"></div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

interface Navigator {
    label: string
    link: string
}

const router = useRouter()
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const lists = ref<Array<Navigator>>([
    { label: 'About', link: '/' },
    { label: 'Skills', link: '/skills' },
    { label: 'Experience', link: '/experiences' },
    { label: 'Education', link: '/educations' },
    { label: 'Projects', link: '/project' },
])

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileLinkClick = (link: string) => {
    router.push(link)
    isMobileMenuOpen.value = false
}

const updateScrollProgress = () => {
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
    window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
})
</script>
