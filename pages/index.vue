<template>
  <div class="overflow-hidden">
    <HeroSection />
    <TechStack />
    <AboutSection />
    <FeaturedProjects />
    
    <cta-section />
  </div>
</template>

<script setup lang="ts">
import CtaSection from '~/components/CtaSection.vue';

const META_DESCRIPTION = `Hi. My name is Mahardika Kessuma Denie. A Software Developer From Bandung specializing in Vue, Nuxt, and modern web technologies.`;
const TITLE = 'Mahardika Kessuma Denie - Software Developer';

useSeoMeta({
	title: TITLE,
	ogTitle: TITLE,
	description: META_DESCRIPTION,
	ogDescription: META_DESCRIPTION,
});
</script>
