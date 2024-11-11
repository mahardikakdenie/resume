<template>
    <div class="flex fixed flex-col left-5 bottom-52 z-10">
        <a
            v-for="(item, i) in personalItem"
            :key="item.key"
            :href="item.link"
            target="_blank"
            class="flex items-center gap-3 rounded-full shadow-lg p-4 border text-purple-600 mt-2 cursor-pointer bg-white group transition-all duration-300 ease-out w-12 hover:w-40 overflow-hidden"
        >
            <img v-if="item.image" :src="item.image" alt="" class="w-6 h-6">
            <span
                class="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300 text-gray-800 whitespace-nowrap"
            >
                {{ item.name }}
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import linkedin from '@/assets/linkedin-active.svg';
import github from '@/assets/github-active.svg';
import email from '@/assets/email-active.svg';

interface Item {
    image: string;
    name: string;
    key: string;
    link: string;
}

const personalItem = ref<Item[]>(
    [
        {
            image: linkedin,
            name: 'LinkedIn',
            key: 'linkedin',
            link: 'https://www.linkedin.com/in/username'
        },
        {
            image: github,
            name: 'GitHub',
            key: 'github',
            link: 'https://github.com/username'
        },
        {
            image: email,
            name: 'Email',
            key: 'email',
            link: 'mailto:your.email@example.com'
        },
    ]
);
</script>

<style scoped>
/* Optional: Tambahkan style tambahan jika diperlukan */
</style>
