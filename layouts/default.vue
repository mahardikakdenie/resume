<template>
	<div class="max-w-[1200px] mx-auto">
		<navbar />
        <nuxt-page />
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Mahardikakdenie Portofolio',
	ogTitle: 'Mahardikakdenie Portofolio',
	description: 'This is Mahardikakdenie Portofolio, let me tell you all about it.',
	ogDescription: 'This is my amazing site, let me tell you all about it.',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'Mahardikakdenie Portofolio',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');

* {
	font-family: "Roboto Serif", serif;
}
</style>
