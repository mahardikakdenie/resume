<template>
	<div class="mx-auto">
		<navbar />
		<PersonalInformationItem />
		<div class="px-0 sm:px-10">
			<nuxt-page />
		</div>
		<Footer />
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Mahardikakdenie Portofolio',
	ogTitle: 'Mahardikakdenie Portofolio',
	description: 'This is Mahardikakdenie Portofolio, let me tell you all about it.',
	ogDescription: 'This is my amazing site, let me tell you all about it.',
	ogImage: 'https://example.com/image.png',
	// twitterCard: 'Mahardikakdenie Portofolio',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
	font-family: "Poppins", sans-serif;
}
</style>
