<template>
	<div class="mt-4">
		<div class="flex sm:justify-start justify-center">
			<span class="sm:text-[20px] text-xl font-bold">My Portfolio</span>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-6">
			<div
				v-for="(list, i) in lists"
				:key="i"
				class="border-2 p-3 rounded-md cursor-pointer"
				@click="navigateToProject(list.link)">
				<div class="flex justify-center">
					<img
						:src="list.image"
						:width="list.type === 'mobile' ? '100' : '100%'"
						alt="" />
				</div>
				<div class="mt-4">
					<h3>{{ list.name }}</h3>
				</div>
				<div
					class="overflow-hidden text-ellipsis whitespace-nowrap break-words"></div>
				<div class="mt-3">
					<small class="text-ellipsis-multiline">{{
						list.description
					}}</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { projects } from '@/lib/static';

// Meta Information
const META_DESCRIPTION: string = `👋 Hi. My name is Mahardika Kessuma Denie.
  A Software Developer From Bandung
  I've been working in software engineering since 2020. I have good knowledge of frontend and backend development.
  I always strive to keep my code tidy and regularly refactor to improve readability. I enjoy breaking code into smaller, manageable chunks.`;

// Title for the page
const TITLE = 'MAHARDIKA KESSUMA DENIE - PROJECT';

// Set up SEO metadata
useSeoMeta({
	title: TITLE,
	ogTitle: TITLE,
	description: META_DESCRIPTION,
	ogDescription: META_DESCRIPTION,
});

// Project data
const lists =
	ref<
		{
			name: string;
			type?: string;
			link: string;
			image: string;
			description: string;
		}[]
	>(projects);

// Navigation function to ensure client-side execution
function navigateToProject(link: string) {
	// Ensure the code runs only on the client side
	if (process.client) {
		// Use $router to navigate to the specific project link
		useRouter().push(`/project/${link}`);
	}
}
</script>

<style>
.text-ellipsis-multiline {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	/* Set the number of lines displayed */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.5;
	/* Set line spacing */
	max-height: 3em;
	/* Set max height for two lines */
}
</style>
