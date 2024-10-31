<template>
    <div class="flex fixed flex-col left-5 bottom-52 z-10">
        <div v-for="(item, i) in personalItem" :key="i" class="rounded-full shadow-lg p-4 border text-purple-600 mt-2 cursor-pointer bg-white">
            <img :src="item" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import linkedin from '@/assets/linkedin-active.svg';
import github from '@/assets/github-active.svg';
import email from '@/assets/email-active.svg';
const personalItem = ref<string[]>(
    [
        linkedin,
        github,
        email,
    ]
)
</script>
