<template>
	<section class="mt-8 px-6 md:px-10">
		<div class="flex justify-center sm:justify-start">
			<h2 class="text-2xl font-bold text-gray-800">My Portfolio</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
			<div
				v-for="(list, i) in lists"
				:key="i"
				class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
				data-aos="fade-up"
				:data-aos-delay="i * 100"
				@click="navigateToProject(list.link)">
				<!-- Image -->
				<div
					class="relative overflow-hidden h-48 flex items-center justify-center bg-gray-100 group">
					<!-- Badge -->
					<div
						class="absolute top-3 left-4 z-10 px-3 py-1 text-xs bg-purple-100 text-slate-700 rounded-full font-bold">
						{{ list?.badge ?? 'Worked' }}
					</div>

					<!-- Gambar -->
					<img
						:src="list.image"
						alt=""
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
				</div>

				<!-- Content -->
				<div class="p-5">
					<h3 class="text-lg font-semibold text-gray-800">
						{{ list.name }}
					</h3>
					<p class="mt-2 text-sm text-gray-600 line-clamp-3">
						{{ list.description }}
					</p>

					<span
						v-if="list.type"
						class="text-xs font-medium text-purple-600 capitalize">
						Type Project : {{ list.type }}
					</span>

					<div
						v-if="list.tools && list.tools.length > 0"
						class="mt-3 flex flex-wrap gap-2">
						<span
							v-for="(tool, index) in list.tools"
							:key="index"
							class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
							{{ tool }}
						</span>
					</div>

					<div class="mt-4 flex justify-between items-center">
						<button
							class="text-sm text-purple-600 font-medium hover:underline">
							View Project →
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import { projects } from '@/lib/static';

// Meta Information
const META_DESCRIPTION: string = `👋 Hi. My name is Mahardika Kessuma Denie.
A Software Developer From Bandung. I've been working in software engineering since 2020.
I have good knowledge of frontend and backend development.`;

const TITLE = 'MAHARDIKA KESSUMA DENIE - PROJECT';

useSeoMeta({
	title: TITLE,
	ogTitle: TITLE,
	description: META_DESCRIPTION,
	ogDescription: META_DESCRIPTION,
});

const lists = ref(projects);

function navigateToProject(link: string) {
	if (process.client) {
		useRouter().push(`/project/${link}`);
	}
}
</script>
<style lang="scss">
.line-clamp-3 {
	display: -webkit-box;
	// -webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.5;
	max-height: 4.5em; // 3 lines
}

/* Optional: Hover effect for better UX */
.group:hover .line-clamp-3 {
	// -webkit-line-clamp: 5;
	max-height: 7.5em;
}
</style>
