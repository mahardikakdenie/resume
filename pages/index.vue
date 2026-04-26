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

const { t } = useI18n();

useSeoMeta({
	title: () => t('hero.role'),
	ogTitle: () => t('hero.role'),
	description: () => t('about.description_1', { name: 'Mahardika Kessuma Denie', years: '4 years' }),
	ogDescription: () => t('about.description_1', { name: 'Mahardika Kessuma Denie', years: '4 years' }),
});
</script>
