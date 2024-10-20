<template>
    <div
      class="flex flex-col md:flex-row justify-center items-center dark:bg-slate-900 bg-white rounded-lg p-10">
      <!-- Left: Text Section -->
      <div data-aos="fade-right" class="md:w-1/2 p-8 md:p-12">
        <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
          About <span class="text-purple-600">Mahardika Kessuma Denie</span>
        </h2>
        <p class="text-gray-600 dark:text-white text-lg leading-relaxed mb-6">
          I am a passionate software developer with a strong drive for continuous learning and improvement. Since starting my career in 2020, I’ve worked across frontend and backend development, adapting quickly to new tools and technologies. I’m committed to writing clean, modular code, breaking down complex tasks to ensure efficient, scalable solutions.
        </p>
  
        <div class="flex gap-4 mb-6">
          <li
            data-aos="flip-left"
            class="flex items-center gap-2 opacity-75 hover:opacity-100 cursor-pointer transition-opacity">
            <img
              :src="linkedinImage"
              width="24"
              alt="LinkedIn" />
            <span class="text-gray-600 dark:text-white text-sm whitespace-nowrap">Mahardika Kessuma Denie</span>
          </li>
          <li
            data-aos="flip-right"
            class="flex items-center gap-2 opacity-75 hover:opacity-100 cursor-pointer transition-opacity">
            <img
              :src="githubImage"
              width="24"
              class="border"
              alt="Twitter" />
            <span class="text-gray-600 dark:text-white text-sm">@mahardikakdenie</span>
          </li>
          <li
            data-aos="flip-right"
            class="flex items-center gap-2 opacity-75 hover:opacity-100 cursor-pointer transition-opacity">
            <img
              :src="emailImage"
              width="24"
              class="border"
              alt="Email" />
            <span class="text-gray-600 dark:text-white text-sm">dikamahar884@gmail.com</span>
          </li>
        </div>
  
        <div class="mt-6 flex items-center space-x-4">
          <button
            class="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            See My Experiences
          </button>
          <button
            class="border border-gray-400 text-gray-600 px-6 py-3 rounded-full hover:bg-gray-100 dark:text-white transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
  
      <!-- Right: Image Section -->
      <div
        data-aos="flip-up"
        class="md:w-1/3 md:mt-0 flex justify-center items-center p-6 md:p-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3VjaW5nfGVufDB8fDB8fHww"
          alt="Mahardika Kessuma Denie"
          class="shadow-lg object-cover rounded-full w-[80%] h-[80%] hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import linkedinImage from '@/assets/linkedin.svg';
  import githubImage from '@/assets/github.svg';
  import emailImage from '@/assets/email.svg';
  // Script logic (if needed) can be added here
  </script>
  
  <style scoped lang="scss">
  /* Additional styles for smoother transitions */
  </style>
  