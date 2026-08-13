<template>
  <section class="relative py-16 overflow-hidden z-30">
    <!-- Ambient Background Light Blur -->
    <div class="absolute inset-0 bg-slate-50/40 pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <!-- Top Badge / Stats Highlights -->
      <div class="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-purple-100 shadow-xl shadow-purple-500/5 mb-6">
        <div class="flex items-center gap-2">
          <span class="text-base">⚡</span>
          <span class="text-xs font-black text-slate-800 uppercase tracking-widest">{{ $t('banner.years_exp') }}</span>
        </div>
        <span class="hidden sm:inline text-purple-300">&bull;</span>
        <div class="flex items-center gap-2">
          <span class="text-base">🏛️</span>
          <span class="text-xs font-black text-slate-800 uppercase tracking-widest">{{ $t('banner.companies_served') }}</span>
        </div>
      </div>

      <!-- Philosophical Headline -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
          {{ $t('banner.headline') }}
        </span>
      </h2>

      <!-- Philosophical Subquote -->
      <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-0">
        {{ $t('banner.quote') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// No extra scripts required as we are purely using local i18n keys for stats and philosophical copy
</script>

<style scoped>
/* Scoped styles reserved for spacing and custom layout adjustments if needed */
</style>
