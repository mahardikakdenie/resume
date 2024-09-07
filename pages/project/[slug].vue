<template>
	<!-- Render content only when data is loaded to prevent hydration mismatches -->
	<div v-if="isLoaded" class="mt-4">
		<div class="flex sm:justify-start justify-center">
			<span class="sm:text-[20px] text-xl font-bold">{{
		projectDetailName
	}}</span>
		</div>

		<div class="grid grid-cols-1 mt-4 gap-4">
			<div class="border p-4 rounded-md overflow-x-hidden">
				<div class="flex gap-4 min-w-full max-w-full">
					<img :src="currentSlider" alt="" class="max-w-full object-cover rounded-md" />
				</div>
			</div>
			<div v-if="projectDetail?.images?.length" class="flex justify-end gap-2">
				<div v-for="(image, i) in projectDetail.images" :key="i"
					class="border border-blue-500 px-8 py-[2px] rounded-md cursor-pointer"
					:class="[{ 'bg-blue-500': currentSlider === image }]" @click="currentSlider = image || ''" />
			</div>
			<div class="flex items-center">
				<span v-if="projectDetail?.description">{{
		projectDetail.description
					}}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Import route for accessing URL parameters
import { useFetch } from '#app'; // Import useFetch from Nuxt 3
import type { IProjects } from '@/lib/staticInterface';

// Initialize reactive state variables
const projectDetail = ref<IProjects | null>(null);
const currentSlider = ref<string>('');
const isLoaded = ref(false); // Flag to check if data is loaded

// Fetch data using useFetch, which is SSR-friendly
const route = useRoute();

// Correctly typing the useFetch request and options
const { data, error } = await useFetch(
	`/api/projects?slug=${route.params.slug}`,
	{
		method: 'GET', // Ensure that you specify the correct HTTP method
		transform: (response) => response.data as IProjects | null, // Safely cast the response
	}
);

// Handle data once available
onMounted(() => {
	if (data.value) {
		projectDetail.value = data.value;
		// Set the currentSlider to the first image if available
		if (projectDetail.value?.images?.length) {
			currentSlider.value = projectDetail.value.images[0];
		}
	} else if (error.value) {
		console.error('Error fetching project details:', error.value);
	}
	isLoaded.value = true; // Mark as loaded to enable rendering
});

// Compute the project name, defaulting if not available
const projectDetailName = computed(
	() => projectDetail.value?.name
);

// Watch for changes in projectDetail and update SEO meta tags
watch(projectDetail, (newValue) => {
	if (newValue) {
		useSeoMeta({
			title: newValue.name || '',
			ogTitle: newValue.name || '',
			description: newValue.description || '',
			ogDescription: newValue.description || '',
			ogImage: newValue.image || '',
		});
	}
});
</script>
