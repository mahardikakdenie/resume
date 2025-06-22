<template>
    <header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
        <nav data-aos="flip-up" class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between lg:justify-center py-[2.125rem]">
                <!-- Logo / Title -->
                <div class="text-lg font-bold text-purple-600 lg:hidden">Mahardika</div>

                <!-- Desktop Menu -->
                <ul class="hidden lg:flex gap-5 bg-slate-200 px-4 py-1 rounded-3xl">
                    <li v-for="(list, index) in lists" :key="index" class="cursor-pointer">
                        <span
                            :class="{
                                'text-purple-600 font-bold':
                                    $route.path === list?.link || ($route.path.includes(list?.link) && list.link !== '/'),
                                'text-neutral-700': $route.path !== list.link,
                            }"
                            class="text-[13px] hover:text-purple-600"
                            @click="$router.push(list?.link)"
                        >{{ list?.label }}</span
                        >
                    </li>
                </ul>

                <!-- Mobile Hamburger Button -->
                <button @click="toggleMobileMenu" class="lg:hidden focus:outline-none">
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
            >
                <ul v-show="isMobileMenuOpen" class="lg:hidden bg-slate-200 mt-2 p-4 rounded-xl space-y-3">
                    <li v-for="(list, index) in lists" :key="index" class="cursor-pointer">
                        <span
                            :class="{
                                'text-purple-600 font-bold':
                                    $route.path === list?.link || ($route.path.includes(list?.link) && list.link !== '/'),
                                'text-neutral-700': $route.path !== list.link,
                            }"
                            class="block text-sm hover:text-purple-600"
                            @click="handleMobileLinkClick(list?.link)"
                        >{{ list?.label }}</span>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Navigator {
    label: string
    link: string
}

const router = useRouter()

const lists = ref<Array<Navigator>>([
    {
        label: 'About Me',
        link: '/',
    },
    {
        label: 'Skills',
        link: '/skills',
    },
    {
        label: 'Experiences',
        link: '/experiences',
    },
    {
        label: 'Educations',
        link: '/educations',
    },
    {
        label: 'Project',
        link: '/project',
    },
])

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileLinkClick = (link: string) => {
    router.push(link)
    isMobileMenuOpen.value = false // Tutup menu setelah klik
}
</script>
