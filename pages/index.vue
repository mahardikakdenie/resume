<template>
	<div>
		<about />
	</div>
</template>

<script setup lang="ts">
const META_DESCRIPTION: string = `👋 Hi. My name is Mahardika Kessuma Denie.
A Software Developer From Bandung
I've been working in software engineering for more than 3 years. I have good knowledge of frontend and backend.
I always try my best when building or developing software, so I always keep my code as tidy as possible and refactor periodically. I prefer to break my code into smaller chunks so it's easier to read. My skillset includes:`;

const TITLE = 'MAHARDIKA KESSUMA DENIE - PROFILE';

useSeoMeta({
	title: TITLE,
	ogTitle: TITLE,
	description: META_DESCRIPTION,
	ogDescription: META_DESCRIPTION,
});
</script>
