import { computed } from 'vue';

export const useExperienceYears = (startYear: number = 2021) => {
  const currentYear = new Date().getFullYear();
  const years = Math.max(1, currentYear - startYear);

  const yearsFormatted = computed(() => `${years}+`);
  const yearsText = computed(() => `${years}+ Years`);

  return {
    years,
    yearsFormatted,
    yearsText,
  };
};
