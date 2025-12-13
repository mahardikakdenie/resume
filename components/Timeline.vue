<template>
  <section class="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="max-w-7xl mx-auto">

      <div class="relative">
        <!-- Garis tengah elegan -->
        <div class="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent -translate-x-1/2 z-0"></div>

        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="relative mb-16 sm:mb-20 z-10"
          :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
          data-aos-once="true"
          :data-aos-delay="i * 150"
        >
          <div class="flex flex-col sm:flex-row items-center" :class="i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'">
            <!-- Card -->
            <div
              class="w-full sm:w-5/12 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              :class="i % 2 === 0 ? 'sm:mr-8 sm:text-left' : 'sm:ml-8 sm:text-left'"
            >
              <div class="inline-block px-3 py-1 mb-3 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
                {{ exp.type }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">{{ exp.name }}</h3>
              <p class="text-sm font-medium text-indigo-600 mb-2">{{ exp.job }}</p>
              <p class="text-xs text-gray-500 mb-4">{{ exp.since }} – {{ exp.until }}</p>
              <div class="text-gray-700 text-sm leading-relaxed opacity-90" v-html="exp.description"></div>
            </div>

            <!-- Icon connector -->
            <div class="mt-4 sm:mt-0 w-10 h-10 flex items-center justify-center z-10"
                 :class="i % 2 === 0 ? 'sm:ml-0' : 'sm:mr-0'">
              <div class="w-10 h-10 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center shadow-md">
                <img :src="calenderChecked" alt="Timeline point" class="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import calenderChecked from '@/assets/calender-check.svg';

interface ExperienceData {
  name: string;
  job: string;
  type: string;
  since: string;
  until: string;
  description: string;
}

defineProps<{
  experiences: ExperienceData[];
}>();
</script>
