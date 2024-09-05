<template>
	<div class="mt-4">
		<div class="flex sm:justify-start justify-center">
			<span class="sm:text-[20px] text-xl font-bold">{{ projectDetailName }}</span>
		</div>

		<div class="grid grid-cols-1 mt-4 gap-4">
			<div class="border p-4 rounded-md overflow-x-hidden">
				<div class="flex gap-4 min-w-full max-w-full">
					<img :src="currentSlider" alt="" class="max-w-full object-cover rounded-md" />
				</div>
			</div>
			<div v-if="projectDetail?.images?.length" class="flex justify-end gap-2">
				<div
					v-for="(image, i) in projectDetail.images"
					:key="i"
					class="border border-blue-500 px-8 py-[2px] rounded-md cursor-pointer"
					:class="[{ 'bg-blue-500': currentSlider === image }]"
					@click="currentSlider = image || ''"
				/>
			</div>
			<div class="flex items-center">
				<span>{{ projectDetail.description }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // Import router hooks
import { useFetch } from '#app'; // Import useFetch from Nuxt 3
import type { IProjects } from '@/lib/staticInterface';

// Use router and route to navigate and fetch params
const router = useRouter();
const route = useRoute();

// Fetch data from API and initialize projects
const { data } = useFetch<{ projects: IProjects[] }>('/api/projects');
const projects = ref<IProjects[]>([]); // Define projects as an empty array

// Define projectDetail with default values
const projectDetail = ref<IProjects>({
	name: '',
	type: '',
	link: '',
	image: '',
	description: '',
	images: [],
});

// Define currentSlider to store the current image URL
const currentSlider = ref<string>('');

// Compute projectDetailName from projectDetail, falling back to a default name
const projectDetailName = computed(() => projectDetail.value.name || 'Portofolio Name');

useSeoMeta({
    title: projectDetailName,
    ogTitle: projectDetailName,
    description: projectDetail.value.description,
    ogDescription: projectDetail.value.description,
    ogImage: projectDetail.value.image,
});

// Run when the component is mounted
onMounted(() => {
	// Ensure this code runs only on the client side
	if (process.client) {
		// Set projects value when data is available
		if (data.value?.projects) {
			projects.value = data.value.projects;
		}

		// Find the project based on the route parameters
		const foundProject = projects.value.find(
			(project) => project.link === route.params.slug
		);

		// Set projectDetail or redirect if not found
		if (foundProject) {
			projectDetail.value = foundProject;
			currentSlider.value = projectDetail.value.images?.[0] || projectDetail.value.image;
		} else {
			router.push('/project');
		}
	}
});
</script>
