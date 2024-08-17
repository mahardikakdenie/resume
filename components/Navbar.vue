<template>
    <div class="flex p-3 justify-between mt-3">
        <div>
            <span class="text-xl">Mahardikakdenie DEV</span>
        </div>
        <div class="flex gap-3">
            <div v-for="(list, index) in lists" :key="index" class="cursor-pointer hover:text-purple-600">
                <span :class="{ 'text-purple-600 font-bold': $route.path === list?.link }" class="text-[20px]" @click="$router.push(list?.link)">{{list?.label}}</span>
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
        label: 'Home',
        link: '/'
    },
    {
        label: 'Project',
        link: '/project',
    },
    // {
    //     label: 'Contact',
    //     link: '/contact',
    // }
])

</script>
