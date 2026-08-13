<template>
    <header 
        class="fixed top-0 z-50 w-full flex flex-col items-center transition-all duration-700 pointer-events-none"
        :class="[isScrolled ? 'pt-3 md:pt-4' : 'pt-0']"
    >
        <!-- Top Scroll Progress Indicator Bar -->
        <div 
            class="w-full h-0.5 bg-slate-200/20 dark:bg-slate-800/40 absolute top-0 left-0 right-0 overflow-hidden pointer-events-none"
            :class="{ 'opacity-100': isScrolled, 'opacity-0': !isScrolled }"
        >
            <div 
                class="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 transition-all duration-150 ease-out"
                :style="{ width: `${scrollProgress}%` }"
            ></div>
        </div>

        <nav 
            data-aos="zoom-out" 
            data-aos-duration="1200"
            class="relative flex items-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] pointer-events-auto"
            :class="[
                isScrolled 
                ? 'w-[95%] md:w-[92%] max-w-[840px] px-3.5 md:px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/60 dark:border-slate-800/80 shadow-[0_10px_30px_-5px_rgba(147,51,234,0.08),0_20px_40px_-15px_rgba(15,23,42,0.1)] saturate-[1.8] ring-1 ring-slate-900/5 dark:ring-white/10' 
                : 'w-full max-w-7xl px-4 md:px-8 py-6 md:py-8 bg-transparent'
            ]"
        >
            <div class="flex w-full items-center justify-between relative z-20">
                <!-- Brand Logo & Badge -->
                <div 
                    class="flex-shrink-0 cursor-pointer group flex items-center transition-all duration-300 gap-2.5"
                    :class="[isScrolled ? 'pl-1' : 'pl-2']"
                    @click="$router.push('/')"
                >
                    <div 
                        class="relative flex items-center justify-center transition-all duration-500 group-hover:scale-105 active:scale-95"
                        :class="[isScrolled ? 'w-8 h-8' : 'w-9 h-9 md:w-10 md:h-10']"
                    >
                        <img 
                            src="/logo.svg" 
                            alt="Mahardika Logo" 
                            class="w-full h-full object-contain rounded-xl shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500" 
                        />
                    </div>
                    
                    <!-- Animated Brand Label -->
                    <div class="flex items-center gap-2 overflow-hidden">
                        <span 
                            class="font-black tracking-tighter transition-all duration-500 whitespace-nowrap text-slate-900 dark:text-white"
                            :class="[isScrolled ? 'text-sm md:text-base' : 'text-xl md:text-2xl']"
                        >
                            Mahardika
                        </span>
                        <span 
                            v-if="!isScrolled"
                            class="hidden lg:inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest bg-purple-100/80 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/50 dark:border-purple-800/50"
                        >
                            Dev
                        </span>
                    </div>
                </div>

                <!-- Desktop Menu & Controls -->
                <div class="hidden md:flex items-center">
                    <!-- Navigation Pills -->
                    <ul class="flex items-center gap-0.5 relative px-1 py-1 rounded-full bg-slate-900/[0.03] dark:bg-white/[0.05] border border-slate-900/[0.02] dark:border-white/[0.05]">
                        <div 
                            class="absolute h-[85%] bg-slate-900 dark:bg-purple-600 shadow-[0_8px_16px_rgba(15,23,42,0.25)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-full z-0"
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
                                    activeHighlightIndex === index ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
                                    isScrolled ? 'px-3 md:px-3.5 py-1.5' : 'px-4 md:px-5 py-2',
                                    'text-[10px] font-extrabold cursor-pointer transition-all duration-500 uppercase tracking-[0.18em] block relative'
                                ]"
                                @click="handleLinkClick(list.link)"
                            >
                                {{ $t(list.label) }}
                            </span>
                        </li>
                    </ul>

                    <div 
                        class="w-px bg-slate-200/70 dark:bg-slate-800 transition-all duration-500" 
                        :class="[isScrolled ? 'h-4 mx-2.5 md:mx-3' : 'h-5 mx-4 md:mx-5']"
                    ></div>

                    <!-- Command Palette Search Button -->
                    <button 
                        @click="openPalette"
                        class="flex items-center gap-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 hover:bg-white dark:hover:bg-slate-800 transition-all text-xs font-semibold pointer-events-auto shadow-xs group/search"
                        :class="[isScrolled ? 'px-2.5 py-1 mr-2' : 'px-3.5 py-1.5 mr-3']"
                        title="Search Commands (Ctrl+K)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 group-hover/search:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span class="text-[10px] font-extrabold uppercase tracking-wider hidden lg:inline">Search</span>
                        <kbd class="px-1.5 py-0.5 text-[9px] font-black bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">⌘K</kbd>
                    </button>

                    <!-- Language Switcher -->
                    <button 
                        @click="toggleLocale"
                        class="flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:border-purple-300 transition-all pointer-events-auto group/lang shadow-xs mr-2 md:mr-3"
                        :class="[isScrolled ? 'w-8 h-8' : 'w-9 h-9 md:w-10 md:h-10']"
                        :title="locale === 'en' ? 'Switch to Indonesia' : 'Switch to English'"
                    >
                        <div class="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden transition-transform duration-300 group-hover/lang:scale-110 shadow-2xs">
                            <template v-if="locale === 'en'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#00247d" d="M0 0h512v512H0z"/>
                                    <path fill="#fff" d="m512 0-192 192h192V0zM0 0l192 192H0V0zm0 512 192-192H0v192zm512 0-192-192h192v192z"/>
                                    <path fill="#cf142b" d="m512 0-128 128h128V0zM0 0l128 128H0V0zm0 512 128-128H0v128zm512 0-128-128h128v128z"/>
                                    <path fill="#fff" d="M213 0v213H0v86h213v213h86V299h213v-86H299V0h-86z"/>
                                    <path fill="#cf142b" d="M235 0v235H0v42h235v235h42V277h235v-42H277V0h-42z"/>
                                </svg>
                            </template>
                            <template v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#f0f0f0" d="M0 256h512v256H0z"/>
                                    <path fill="#d80027" d="M0 0h512v256H0z"/>
                                </svg>
                            </template>
                        </div>
                    </button>

                    <!-- Theme Switcher -->
                    <div class="mr-3">
                        <ThemeToggle :is-scrolled="isScrolled" />
                    </div>

                    <!-- Hire Me Button -->
                    <button 
                        class="group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 active:scale-95 shadow-md hover:shadow-purple-500/30"
                        :class="[isScrolled ? 'px-4 py-1.5' : 'px-5 md:px-6 py-2.5']"
                        @click="$router.push('/contact')"
                    >
                        <div class="absolute inset-0 bg-slate-900 dark:bg-purple-600 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-colors duration-500"></div>
                        <span class="relative z-10 text-[10px] font-black text-white uppercase tracking-[0.2em]">{{ $t('nav.hire_me') }}</span>
                    </button>
                </div>

                <!-- Mobile Toggle Button -->
                <div class="flex items-center gap-2 md:hidden">
                    <ThemeToggle :is-scrolled="isScrolled" />

                    <button 
                        @click="isMobileMenuOpen = true" 
                        class="flex items-center justify-center rounded-full transition-all bg-slate-900 dark:bg-slate-800 text-white shadow-md active:scale-95"
                        :class="[isScrolled ? 'w-8 h-8' : 'w-10 h-10']"
                        aria-label="Toggle Navigation Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Bottom Sheet Menu -->
        <div 
            v-if="isMobileMenuOpen"
            class="fixed inset-0 z-[100] md:hidden pointer-events-auto"
        >
            <!-- Backdrop -->
            <div 
                class="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm transition-opacity duration-500"
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
                <div class="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 rounded-t-[3rem] p-8 pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] border-t border-slate-100 dark:border-slate-800">
                    <div class="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-8" @click="isMobileMenuOpen = false"></div>
                    
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Navigation Menu</h3>
                        <button @click="isMobileMenuOpen = false" class="w-9 h-9 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul class="space-y-1">
                        <li v-for="(list, index) in lists" :key="index">
                            <span
                                class="text-lg font-bold transition-all duration-300 flex px-4 py-3.5 rounded-2xl items-center justify-between group cursor-pointer"
                                :class="isActive(list.link) ? 'text-purple-600 dark:text-purple-400 bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100/80 dark:border-purple-900/50 font-black' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'"
                                @click="handleMobileLinkClick(list.link)"
                            >
                                <span class="tracking-tight">{{ $t(list.label) }}</span>
                                <svg v-if="isActive(list.link)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </li>
                    </ul>

                    <div class="grid grid-cols-2 gap-3 mt-6">
                        <button 
                            v-for="loc in locales" :key="loc.code"
                            @click="setLocale(loc.code)"
                            :class="[
                                locale === loc.code ? 'bg-slate-900 dark:bg-purple-600 text-white border-slate-900 dark:border-purple-600 shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200/80 dark:border-slate-700',
                                'py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex flex-col items-center gap-2 border group/mobile-lang'
                            ]"
                        >
                            <div class="w-5 h-5 rounded-full overflow-hidden transition-transform duration-300 group-hover/mobile-lang:scale-110">
                                <template v-if="loc.code === 'en'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#00247d" d="M0 0h512v512H0z"/>
                                        <path fill="#fff" d="m512 0-192 192h192V0zM0 0l192 192H0V0zm0 512 192-192H0v192zm512 0-192-192h192v192z"/>
                                        <path fill="#cf142b" d="m512 0-128 128h128V0zM0 0l128 128H0V0zm0 512 128-128H0v128zm512 0-128-128h128v128z"/>
                                        <path fill="#fff" d="M213 0v213H0v86h213v213h86V299h213v-86H299V0h-86z"/>
                                        <path fill="#cf142b" d="M235 0v235H0v42h235v235h42V277h235v-42H277V0h-42z"/>
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#f0f0f0" d="M0 256h512v256H0z"/>
                                        <path fill="#d80027" d="M0 0h512v256H0z"/>
                                    </svg>
                                </template>
                            </div>
                            {{ loc.name }}
                        </button>
                    </div>

                    <div class="mt-5">
                        <button 
                            class="w-full py-4 bg-purple-600 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-purple-600/30 active:scale-95 transition-all"
                            @click="handleMobileLinkClick('/contact')"
                        >
                            {{ $t('nav.hire_me') }}
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
import { useCommandPalette } from '~/composables/useCommandPalette'

interface Navigator {
    label: string
    link: string
}

const router = useRouter()
const route = useRoute()
const { locale, locales, setLocale } = useI18n()
const { openPalette } = useCommandPalette()

const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const isScrolled = ref(false)

const lists = ref<Array<Navigator>>([
    { label: 'nav.about', link: '/' },
    { label: 'nav.skills', link: '/skills' },
    { label: 'nav.experience', link: '/experiences' },
    { label: 'nav.projects', link: '/project' },
    { label: 'nav.docs', link: '/documentation' },
])

const toggleLocale = async () => {
    const nextLocale = locale.value === 'en' ? 'id' : 'en'
    await setLocale(nextLocale)
}

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
    isScrolled.value = window.scrollY > 20
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
