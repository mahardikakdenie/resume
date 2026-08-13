<template>
  <div class="overflow-hidden">
    <HeroSection />
    <TechStack />
    <AboutSection />
    <FeaturedProjects />
    <GithubStatsSection />
    <cta-section />
  </div>
</template>

<script setup lang="ts">
import CtaSection from '~/components/CtaSection.vue';
import GithubStatsSection from '~/components/GithubStatsSection.vue';
import { useExperienceYears } from '~/composables/useExperienceYears';

const { yearsFormatted } = useExperienceYears(2021);
const { t } = useI18n();

useSeoMeta({
	title: () => t('hero.role'),
	ogTitle: () => t('hero.role'),
	description: () => t('about.description_1', { name: 'Mahardika Kessuma Denie', years: yearsFormatted.value }),
	ogDescription: () => t('about.description_1', { name: 'Mahardika Kessuma Denie', years: yearsFormatted.value }),
});
</script>
