<template>
	<section class="relative py-20 overflow-hidden">
		<!-- Background Gradient -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-100 -z-10"></div>

		<div
			class="mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Left Side: Text -->
			<div
				data-aos="fade-right"
				class="backdrop-blur-sm md:col-span-2 bg-white/80 p-8 rounded-2xl shadow-xl border border-purple-100 flex flex-col h-full">
				<div>
					<!-- Judul & Badge -->
					<h2 class="text-3xl font-extrabold text-gray-900 mb-4">
						About
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
							>Mahardika Kessuma Denie</span
						>
					</h2>

					<!-- Badge Pengalaman -->
					<div class="flex flex-wrap gap-2 mb-4">
						<span
							class="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
							Fullstack Developer
						</span>
						<span
							class="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
							Startup Enthusiast
						</span>
						<span
							class="px-3 py-1 text-xs font-medium bg-pink-100 text-pink-700 rounded-full">
							{{ calculateYear }} Years Experience
						</span>
					</div>

					<!-- Paragraf -->
					<p class="text-gray-600 leading-relaxed mb-6 text-justify">
						Hello, my name is Mahardika Kessuma Denie. I am a
						software engineer with over {{ calculateYear }} years of
						experience in web application development, both on the
						frontend and backend. Currently, I am actively
						developing various projects, ranging from Vue.js,
						Laravel, to Next.js-based applications.
						<br />
						I also have experience in building systems such as
						analytics dashboards, data validation, and API
						integration. I always strive to apply clean, structured,
						and efficient code principles. In addition, I have a
						strong passion for learning new technologies and
						constantly innovating, particularly in creating
						user-friendly and scalable systems. At the moment, I am
						working on several startup projects, such as
						EnsikloTari, and a SaaS-based application for the
						education sector.
					</p>

					<!-- Skill Tags -->
					<div class="mb-6">
						<h3 class="text-sm font-semibold text-gray-700 mb-2">
							Mastering Tech Stack
						</h3>
						<div class="flex flex-wrap gap-2">
							<span
								v-for="(tech, i) in masteringTechStach"
								:key="i"
								class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
								>{{ tech }}</span
							>
						</div>
					</div>

					<!-- Mini Stats -->
					<!-- Mini Stats -->
					<div
						class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center mt-0 sm:mt-8">
						<!-- Single Stat Card -->
						<div
							class="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100">
							<div class="text-2xl font-bold text-purple-600">
								{{ `${calculateYear}+` }}
							</div>
							<div class="text-xs text-gray-500">
								Years of Experience
							</div>
						</div>

						<div
							class="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100">
							<div class="text-2xl font-bold text-indigo-600">
								15+
							</div>
							<div class="text-xs text-gray-500">
								Projects Completed
							</div>
						</div>

						<div
							class="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-100">
							<div class="text-2xl font-bold text-pink-600">
								1
							</div>
							<div class="text-xs text-gray-500">
								Startups Founder
							</div>
						</div>
					</div>
				</div>

				<!-- Social Media Icons + Button -->
				<div class="mt-auto">
					<!-- Social Media Icons -->
					<div class="flex flex-col sm:flex-row gap-3 mb-6">
						<a
							v-for="(social, index) in socialMedia"
							:key="index"
							:href="getSocialLink(social.key)"
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center space-x-2 justify-start p-2 rounded-lg hover:bg-purple-100 transition-all duration-300"
							@mouseover="onImageHover(social.key, 'hover')"
							@mouseleave="onImageHover(social.key, 'blur')">
							<img
								:src="social.image"
								width="20"
								:alt="social.title"
								class="transition-transform group-hover:scale-110" />
							<span
								class="text-gray-600 group-hover:text-purple-600 transition-colors text-sm">
								{{ social.title }}
							</span>
						</a>
					</div>

					<!-- Button -->
					<nuxt-link
						to="/experiences"
						class="inline-block w-full md:w-auto text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
						See My Experiences
					</nuxt-link>
				</div>
			</div>

			<!-- Right Side: Image -->
			<div data-aos="fade-left" class="flex justify-center mt-8 md:mt-0">
				<div class="relative group max-w-xs sm:max-w-sm md:max-w-none">
					<img
						src="https://i.ibb.co.com/WyyBVHy/348734275-972459347224795-3893992442184013147-n.jpg"
						alt="Mahardika Kessuma Denie"
						class="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" />
					<div
						class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/linkedin.svg';
import linkedinImageActive from '@/assets/linkedin-active.svg';
import githubImage from '@/assets/github.svg';
import githubImageActive from '@/assets/github-active.svg';
import emailImage from '@/assets/email.svg';
import emailImageActive from '@/assets/email-active.svg';
import { ref } from 'vue';
import { computed } from 'vue';

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
]);

const masteringTechStach = computed<string[]>(() => [
	'Javascript',
	'Typescript',
	'Vuejs',
	'Nuxtjs',
	'React',
	'Nextjs',
	'PHP',
	'Laravel',
	'Node Express',
	'Nestjs'
])

const calculateYear = computed(() => new Date().getFullYear() - 2021);

const onImageHover = (key: string, type: string): void => {
	const index = socialMedia.value.findIndex((curr) => curr?.key === key);
	if (type === 'hover') {
		socialMedia.value[index].image = socialMedia.value[index].imageActive;
	} else {
		// Jika ingin reset ke gambar awal saat blur
		socialMedia.value[index].image = socialMedia.value[index].image.replace(
			'-active',
			''
		);
	}
};

const getSocialLink = (key: string): string => {
	switch (key) {
		case 'linkedin':
			return 'https://www.linkedin.com/in/mahardikakdenie/';
		case 'github':
			return 'https://github.com/mahardikakdenie';
		case 'email':
			return 'mailto:dikamahar884@gmail.com';
		default:
			return '#';
	}
};
</script>

<style scoped lang="scss">
section {
	font-family: 'Inter', sans-serif;
}

.bg-gradient-to-br {
	background-image: linear-gradient(
		to bottom right,
		#f3e8ff,
		#ffffff,
		#e0ccff
	);
}

.glow-button:hover::after {
	content: '';
	position: absolute;
	inset: -2px;
	border-radius: 9999px;
	background: linear-gradient(45deg, #a855f7, #6366f1, #8b5cf6);
	z-index: -1;
	animation: pulse 1.5s infinite;
}

@keyframes pulse {
	0%,
	100% {
		box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
	}
}
</style>
