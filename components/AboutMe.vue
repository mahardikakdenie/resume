<template>
	<div
		class="flex pt-[50px] pb-[150px] flex-col md:flex-row justify-center items-center dark:bg-slate-900 bg-white rounded-lg p-10">
		<!-- Left: Text Section -->
		<div data-aos="fade-right" class="md:w-1/2 p-8 md:p-12">
			<h2
				class="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
				About
				<span class="text-purple-600">Mahardika Kessuma Denie</span>
			</h2>
			<p
				class="text-gray-600 dark:text-white leading-relaxed mb-6 text-sm text-justify">
				Hello, my name is Mahardika Kessuma Denie. I am a software
				engineer with over 3 years of experience in web application
				development, both on the frontend and backend. Currently, I am
				actively developing various projects, ranging from Vue.js,
				Laravel, to Next.js-based applications. <br />
				I also have experience in building systems such as analytics
				dashboards, data validation, and API integration. I always
				strive to apply clean, structured, and efficient code
				principles. In addition, I have a strong passion for learning
				new technologies and constantly innovating, particularly in
				creating user-friendly and scalable systems. At the moment, I am
				working on several startup projects, such as EnsikloTari, and a
				SaaS-based application for the education sector
			</p>

			<div class="flex justify-start mb-6">
				<ul class="flex space-x-5">
					<li
						v-for="(social, index) in socialMedia"
						:key="index"
						data-aos="flip-left"
						class="flex items-center opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out"
						@mouseover="onImageHover(social.key, 'hover')"
            @mouseleave="onImageHover(social.key, 'blur')"  
          >
						<img
							:src="social.image"
							width="20"
							:alt="social.title" />
						<span
							class="text-gray-600 dark:text-white text-sm whitespace-nowrap flex hover:text-purple-600">
							{{ social.title }}
						</span>
					</li>
				</ul>
			</div>

			<div class="mt-6 flex items-center space-x-4">
				<button
					class="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
					See My Experiences
				</button>
				<button
					class="border border-gray-400 hover:border-purple-600 hover:text-white hover:bg-purple-600 text-gray-600 px-6 py-3 rounded-full dark:text-white transition-colors duration-300">
					Contact Me
				</button>
			</div>
		</div>

		<!-- Right: Image Section -->
		<div
			data-aos="flip-up"
			class="md:w-1/3 md:mt-0 flex justify-center items-center p-6 md:p-0">
			<img
				src="https://media.licdn.com/dms/image/v2/D5603AQEe8aWoeg-VyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720014478846?e=1735171200&v=beta&t=lH94TQ-nSmmqtHO2yg9jzPBa-PTRVzz1EUGQ3VGMRNQ"
				alt="Mahardika Kessuma Denie"
				class="shadow-lg object-cover rounded-full hover:scale-105 transition-transform duration-300" />
		</div>
	</div>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/linkedin.svg';
import linkedinImageActive from '@/assets/linkedin-active.svg';
import githubImage from '@/assets/github.svg';
import githubImageActive from '@/assets/github-active.svg';
import emailImage from '@/assets/email.svg';
import emailImageActive from '@/assets/email-active.svg';
import { ref } from 'vue';

const socialMedia = ref<
	{
    key: string;
		title: string;
		image: string;
		imageActive: string;
	}[]
>([
	{
    key: 'linkedin',
		title: 'Mahardika Kessuma Denie',
		image: linkedinImage,
		imageActive: linkedinImage,
	},
	{
    key: 'github',
		title: '@mahardikakdenie',
		image: githubImage,
		imageActive: githubImage,
	},
	{
    key: 'email',
		title: 'dikamahar884@gmail.com',
		image: emailImage,
		imageActive: emailImage,
	},
]);

const onImageHover = (key: string, type: string): void => {
  const index = socialMedia.value.findIndex(curr => curr?.key === key);
	if (type === 'hover') {
    const arr = [linkedinImageActive, githubImageActive, emailImageActive]
    socialMedia.value[index].image = arr[index];
  } else {
    socialMedia.value[index].image = socialMedia.value[index].imageActive;
  }
};
// Script logic (if needed) can be added here
</script>

<style scoped lang="scss">
/* Additional styles for smoother transitions */
</style>
