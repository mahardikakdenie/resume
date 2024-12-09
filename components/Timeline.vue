<template>
    <section class="px-8 bg-neutral-100 flex items-center justify-center">
        <!-- Main container -->
        <div class="w-full max-w-6xl flex flex-col items-center mt-5">

            <!-- Timeline Section -->
            <div class="relative max-w-[1200px] my-0 mx-auto direction">
                <!-- Experience 1 -->
                <div v-for="(experience, i) in experiences" :key="i" class="experience-wrapper"
                    :class="{ 'pos-left': i % 2 !== 0, 'pos-right': i % 2 === 0 }">
                    <!-- Timeline indicator -->
                    <div
                        :class="{ 'experience-icon-steps-left': i % 2 !== 0, 'experience-icon-steps-right': i % 2 === 0 }">
                        <img class="" :src="calenderChecked" alt="">
                    </div>

                    <!-- Experience Card -->
                    <div class="experience-card">
                        <h3 class="text-lg font-bold text-white">{{ experience.name }}</h3>
                        <p class="text-sm text-white font-semibold ">{{ experience.job }} • {{ experience.type }}</p>
                        <p class="text-sm text-white ">{{ experience.since }} - {{ experience.until }}</p>
                        <div class="mt-4 experience-description" v-html="experience.description" />
                        <span :class="{ 'row-card-left': i % 2 !== 0, 'row-card-right': i % 2 === 0 }"></span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import calenderChecked from '@/assets/calender-check.svg';
import type { DefineComponent } from 'vue';

interface ExperienceData {
    name: string;
    type: string;
    job: string;
    since: string;
    until: string;
    description: string | DefineComponent;
    icon?: string;
}

const props = defineProps<{
    experiences: ExperienceData[];
}>();
</script>

<style lang="scss">
/* Styling for flex reverse in even rows */
div.flex-row-reverse {
    flex-direction: row-reverse;
}

/* Timeline line */
.relative.w-4::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: gray;
    top: 100%;
}

/* General spacing and positioning */
.mb-12 {
    margin-bottom: 3rem;
}

/* Hover effect and transform */
.border-2 {
    transition: transform 0.3s ease;
}

.direction::after {
    content: '';
    position: absolute;
    width: 0;
    /* Set width to 0 */
    height: 100%;
    /* Full height */
    top: 0;
    left: 50%;
    margin-left: -1px;
    /* Centering adjustment */
    z-index: 1;
    border-left: 2px solid;
    @apply border-purple-400 bg-red-200 hidden sm:block;
    /* Dashed border color */
}

.experience-wrapper {
    @apply py-[10px] px-0 sm:px-[50px] relative w-full sm:w-[50%];
}

.experience-icon-steps {
    @apply absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid flex justify-center -right-[20px] text-purple-600 bg-white;
}

/* Class untuk posisi di kanan */
.experience-icon-steps-right {
    @apply relative sm:absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid hidden sm:flex justify-center -right-[20px] text-purple-600 bg-white;
}

/* Class untuk posisi di kiri */
.experience-icon-steps-left {
    @apply relative sm:absolute w-[40px] h-[40px] top-[32px] p-[10px] z-[100] border border-purple-600 rounded-full border-solid hidden sm:flex justify-center -left-[20px] text-purple-600 bg-white;
}


.experience-card {
    @apply py-[20px] px-[30px] text-sm text-neutral-700 border rounded-lg bg-white hover:bg-white cursor-pointer shadow-xl;

    h3,
    p {
        @apply text-neutral-600;
    }

    &:hover {

        h3,
        p {
            @apply text-purple-700;
        }

        .experience-description {
            @apply text-purple-600;
        }
    }
}

/* Untuk runcingan di sebelah kanan */
.row-card-right {
    border-top: 15px solid transparent;
    /* Batas atas dibuat transparan */
    border-bottom: 15px solid transparent;
    /* Batas bawah dibuat transparan */
    border-left: 17px solid;
    /* Runcingan di sebelah kiri */
    border-right: none;
    /* Tidak ada border di kanan */
    right: 34px;
    /* Posisi dari kanan */
    transition: 0.2s ease-in-out;
    @apply h-0 w-0 absolute top-[37px] z-[1] border-l-white;
}

/* Untuk runcingan di sebelah kiri */
.row-card-left {
    border-top: 15px solid transparent;
    /* Batas atas dibuat transparan */
    border-bottom: 15px solid transparent;
    /* Batas bawah dibuat transparan */
    border-right: 17px solid;
    /* Runcingan di sebelah kanan */
    border-left: none;
    /* Tidak ada border di kiri */
    left: 34px;
    /* Posisi dari kiri */
    transition: 0.2s ease-in-out;
    @apply h-0 w-0 absolute top-[37px] z-[1] border-r-white hidden sm:flex;
}


.pos-right {
    @apply sm:left-0;
}

.pos-left {
    @apply sm:left-1/2;
}

.experience-description {
    ul {
        li {
            font-size: 13px;
        }
    }
}
</style>
