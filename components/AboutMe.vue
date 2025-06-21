<template>
  <div class="flex pt-[50px] pb-[150px] flex-col md:flex-row justify-center items-center bg-white rounded-lg">
    <!-- Left: Text Section -->
    <div data-aos="fade-right" class="sm:w-1/2 w-[400px] px-[40px] sm:p-12">
      <h2 class="text-2xl font-extrabold text-gray-900 mb-4">
        About
        <span class="text-purple-600">Mahardika Kessuma Denie</span>
      </h2>
      <p class="text-gray-600 leading-relaxed mb-6 text-sm text-justify">
        Hello, my name is Mahardika Kessuma Denie. I am a software engineer with over {{ calculateYear }} years of experience in web application development, both on the frontend and backend. Currently, I am actively developing various projects, ranging from Vue.js, Laravel, to Next.js-based applications.
        <br />
        I also have experience in building systems such as analytics dashboards, data validation, and API integration. I always strive to apply clean, structured, and efficient code principles. In addition, I have a strong passion for learning new technologies and constantly innovating, particularly in creating user-friendly and scalable systems. At the moment, I am working on several startup projects, such as EnsikloTari, and a SaaS-based application for the education sector.
      </p>

      <div class="flex justify-start mb-6">
        <ul class="flex space-x-5">
          <li v-for="(social, index) in socialMedia" :key="index" data-aos="flip-left"
            class="flex items-center opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out"
            @mouseover="onImageHover(social.key, 'hover')" @mouseleave="onImageHover(social.key, 'blur')">
            <img :src="social.image" width="20" :alt="social.title" />
            <span class="text-gray-600 text-sm whitespace-nowrap flex hover:text-purple-600">
              {{ social.title }}
            </span>
          </li>
        </ul>
      </div>

      <div class="mt-6 grid grid-cols-1 space-x-4">
        <nuxt-link to="/experiences"
          class="bg-purple-600 text-center text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          See My Experiences
        </nuxt-link>
      </div>
    </div>

    <!-- Right: Image Section -->
    <div data-aos="fade-left" class="md:w-1/3 md:mt-0 flex justify-center items-center p-6 md:p-0">
      <img src="https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg" 
        alt="Mahardika Kessuma Denie" width="410"
        class="shadow-lg object-cover hover:scale-105 transition-transform duration-300 rounded-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/linkedin.svg'
import linkedinImageActive from '@/assets/linkedin-active.svg'
import githubImage from '@/assets/github.svg'
import githubImageActive from '@/assets/github-active.svg'
import emailImage from '@/assets/email.svg'
import emailImageActive from '@/assets/email-active.svg'
import { ref } from 'vue'
import { computed } from 'vue'

const socialMedia = ref([
  {
    key: 'linkedin',
    title: 'Mahardika Kessuma Denie',
    image: linkedinImage,
    imageActive: linkedinImageActive,
  },
  {
    key: 'github',
    title: '@mahardikakdenie',
    image: githubImage,
    imageActive: githubImageActive,
  },
  {
    key: 'email',
    title: 'dikamahar884@gmail.com',
    image: emailImage,
    imageActive: emailImageActive,
  },
])

const calculateYear = computed(() => new Date().getFullYear() - 2021)

const onImageHover = (key: string, type: string): void => {
  const index = socialMedia.value.findIndex(curr => curr?.key === key)
  if (type === 'hover') {
    socialMedia.value[index].image = socialMedia.value[index].imageActive
  } else {
    // Jika ingin reset ke gambar awal saat blur
    socialMedia.value[index].image = socialMedia.value[index].image.replace('-active', '')
  }
}
</script>

<style scoped lang="scss">
/* Tambahkan style tambahan jika diperlukan */
</style>
