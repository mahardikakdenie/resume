<template>
    <div class="flex p-3 justify-center mt-3 w-full">
        <div class="border rounded-md flex gap-4 px-10 py-2 justify-center">
            <div v-for="(list, index) in lists" :key="index" class="cursor-pointer hover:text-purple-600">
                <span :class="{ 'text-purple-600 font-bold': $route.path === list?.link }" class="text-[13px]" @click="$router.push(list?.link)">{{list?.label}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';

interface Navigator {
    label: string;
    link: string;
}

const lists = ref<Array<Navigator>>([
    {
        label: 'About Me',
        link: '/'
    },
    {
        label: 'Work Experience',
        link: '/project',
    },
    {
        label: 'Project',
        link: '/project',
    },
    {
        label: 'Contact',
        link: '/contact',
    }
])

</script>
