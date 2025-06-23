<template>
    <div v-if="isLoaded" class="container mx-auto px-4 py-8">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 class="text-3xl font-extrabold text-gray-900">{{ projectDetailName }}</h1>
            <span v-if="projectDetail?.badge"
                class="mt-2 md:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {{ projectDetail.badge }}
            </span>
        </div>

        <!-- Project Detail Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Side: Image Gallery -->
            <div class="lg:col-span-2 space-y-4">
                <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                    <img :src="currentSlider" alt="Project Image" class="w-full h-full object-cover" />
                </div>

                <!-- Thumbnail Navigation -->
                <div v-if="projectDetail?.images?.length" class="flex space-x-4 overflow-x-auto pb-2">
                    <div v-for="(image, index) in projectDetail.images" :key="index"
                        @click="currentSlider = image"
                        class="w-20 h-20 rounded-md cursor-pointer border-2 transition-all duration-300"
                        :class="[
                            currentSlider === image ? 'border-blue-500' : 'border-transparent'
                        ]">
                        <img :src="image" alt="Thumbnail" class="w-full h-full object-cover rounded-md" />
                    </div>
                </div>
            </div>

            <!-- Right Side: Info & Description -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">About This Project</h2>
                <p v-if="projectDetail?.description" class="text-gray-700 leading-relaxed mb-6">
                    {{ projectDetail.description }}
                </p>

                <!-- Tools / Tech Stack -->
                <div v-if="projectDetail && projectDetail.tools && projectDetail.tools.length" class="mb-6">
                    <h3 class="text-sm font-medium text-gray-600 mb-2">Tech Used</h3>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="(tool, i) in projectDetail.tools" :key="i"
                            class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                            {{ tool }}
                        </span>
                    </div>
                </div>

                <!-- Live Demo Link -->
                <a v-if="projectDetail && projectDetail.url" :href="projectDetail.url" target="_blank"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                    View Live Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- Loading State -->
    <div v-else class="flex justify-center items-center h-64">
        <svg class="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
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
		} else {
			currentSlider.value = projectDetail.value.image;
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

		useHead({
			title: newValue.name,
			meta: [
				{ name: 'description', content: newValue.description },
				{ name: 'twitter:image', content: newValue.image }
			],
			bodyAttrs: {
				class: newValue.description
			},
			script: [{ innerHTML: 'console.log(\'Hello world\')' }]
		})
	}
});
</script>
