<template>
  <div class="flex flex-wrap gap-3 my-8">
    <div v-for="badge in badges" :key="badge.text" 
      class="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <img v-if="badge.icon" :src="badge.icon" class="w-5 h-5 object-contain" :alt="badge.text" />
      <span class="text-xs font-black uppercase tracking-widest text-slate-700">{{ badge.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  badges: {
    type: Array as () => Array<{ text: string, icon?: string }>,
    default: () => []
  }
})
</script>
