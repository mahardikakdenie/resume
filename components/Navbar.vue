<template>
    <header 
        class="fixed top-0 z-50 w-full flex justify-center transition-all duration-1000 pointer-events-none"
        :class="[isScrolled ? 'pt-4 md:pt-6' : 'pt-0']"
    >
        <nav 
            data-aos="zoom-out" 
            data-aos-duration="1200"
            class="relative flex items-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] pointer-events-auto"
            :class="[
                isScrolled 
                ? 'w-[95%] md:w-[92%] max-w-[750px] px-2 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] saturate-[1.8]' 
                : 'w-full max-w-7xl px-4 md:px-8 py-6 md:py-10 bg-transparent'
            ]"
        >
            <div class="flex w-full items-center justify-between relative z-20">
                <!-- Logo -->
                <div 
                    class="flex-shrink-0 cursor-pointer group flex items-center gap-3 pl-2" 
                    @click="$router.push('/')"
                >
                    <div class="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition-all duration-500 group-hover:scale-110 active:scale-90">
                        <div class="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 shadow-lg shadow-purple-500/20"></div>
                        <span class="relative text-white font-black text-xs">M</span>
                    </div>
                    <span 
                        class="font-black tracking-tighter transition-all duration-500 whitespace-nowrap text-xl md:text-2xl text-slate-900"
                        :class="[isScrolled ? 'hidden md:block' : 'block']"
                    >
                        Mahardika
                    </span>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center">
                    <ul class="flex items-center gap-1 relative px-1 py-1 rounded-full bg-slate-900/[0.03]">
                        <div 
                            class="absolute h-[85%] bg-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.3)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-full z-0"
                            :style="highlightStyle"
                        ></div>
                        <li 
                            v-for="(list, index) in lists" :key="index"
                            :id="`nav-item-${index}`"
                            class="relative z-10"
                            @mouseenter="moveHighlight(index)"
                            @mouseleave="resetHighlight"
                        >
                            <span
                                :class="[
                                    activeHighlightIndex === index ? 'text-white' : 'text-slate-500 hover:text-slate-900',
                                    'px-5 py-2 text-[10px] font-black cursor-pointer transition-colors duration-500 uppercase tracking-[0.2em] block relative'
                                ]"
                                @click="handleLinkClick(list.link)"
                            >
                                {{ list.label }}
                            </span>
                        </li>
                    </ul>
                    <div class="w-px h-5 bg-slate-200/60 mx-6 transition-all duration-500" :class="isScrolled ? 'h-3' : 'h-5'"></div>
                    <button 
                        class="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500 active:scale-95 shadow-lg hover:shadow-purple-500/30"
                        @click="$router.push('/contact')"
                    >
                        <div class="absolute inset-0 bg-slate-900 group-hover:bg-purple-600 transition-colors duration-500"></div>
                        <span class="relative z-10 text-[10px] font-black text-white uppercase tracking-[0.2em]">Hire Me</span>
                    </button>
                </div>

                <!-- Mobile Toggle -->
                <button 
                    @click="isMobileMenuOpen = true" 
                    class="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all bg-slate-900 text-white mr-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 8h16M4 16h16" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Bottom Sheet Menu -->
        <div 
            v-if="isMobileMenuOpen"
            class="fixed inset-0 z-[100] md:hidden pointer-events-auto"
        >
            <!-- Backdrop -->
            <div 
                class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500"
                @click="isMobileMenuOpen = false"
            ></div>
            
            <!-- Bottom Sheet -->
            <transition
                enter-active-class="transition duration-500 cubic-bezier(0.2,0.8,0.2,1)"
                enter-from-class="translate-y-full"
                enter-to-class="translate-y-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="translate-y-0"
                leave-to-class="translate-y-full"
            >
                <div class="absolute bottom-0 inset-x-0 bg-white rounded-t-[3rem] p-8 pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
                    <!-- Handle bar -->
                    <div class="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-10" @click="isMobileMenuOpen = false"></div>
                    
                    <div class="flex justify-between items-center mb-8">
                        <h3 class="text-xs font-black uppercase tracking-widest text-slate-400">Navigation</h3>
                        <button @click="isMobileMenuOpen = false" class="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full text-slate-900">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul class="space-y-1">
                        <li v-for="(list, index) in lists" :key="index">
                            <span
                                class="text-xl font-bold transition-all duration-300 block px-4 py-4 rounded-2xl flex items-center justify-between group"
                                :class="isActive(list.link) ? 'text-slate-900 bg-slate-50' : 'text-slate-400'"
                                @click="handleMobileLinkClick(list.link)"
                            >
                                <span class="tracking-tight">{{ list.label }}</span>
                                <svg v-if="isActive(list.link)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <div class="mt-8">
                        <button 
                            class="w-full py-5 bg-slate-900 text-white font-black rounded-2xl text-sm uppercase tracking-[0.2em] shadow-xl shadow-slate-900/20 active:scale-95 transition-all"
                            @click="handleMobileLinkClick('/contact')"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
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
    { label: 'Docs', link: '/documentation' },
])

const activeHighlightIndex = ref(-1)

const highlightStyle = ref({
    width: '0px',
    left: '0px',
    opacity: '0'
})

const moveHighlight = (index: number) => {
    const el = document.getElementById(`nav-item-${index}`)
    if (el) {
        highlightStyle.value = {
            width: `${el.offsetWidth}px`,
            left: `${el.offsetLeft}px`,
            opacity: '1'
        }
        activeHighlightIndex.value = index
    }
}

const currentActiveIndex = computed(() => {
    return lists.value.findIndex(list => {
        if (list.link === '/') return route.path === '/'
        return route.path.startsWith(list.link)
    })
})

const resetHighlight = () => {
    if (currentActiveIndex.value !== -1) {
        moveHighlight(currentActiveIndex.value)
    } else {
        highlightStyle.value.opacity = '0'
    }
}

const isActive = (link: string) => {
    if (link === '/') return route.path === '/'
    return route.path.startsWith(link)
}

const handleLinkClick = (link: string) => {
    router.push(link)
}

const handleMobileLinkClick = (link: string) => {
    router.push(link)
    isMobileMenuOpen.value = false
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 30
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const winHeight = scrollHeight - clientHeight
    scrollProgress.value = winHeight > 0 ? (scrollTop / winHeight) * 100 : 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    setTimeout(resetHighlight, 600)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
    resetHighlight()
})
</script>

<style scoped>
@keyframes shine {
    from { left: -100%; }
    to { left: 200%; }
}

nav {
    transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
}

nav::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.01;
    pointer-events: none;
    border-radius: inherit;
}
</style>
