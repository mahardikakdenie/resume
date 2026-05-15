<template>
  <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group text-left">
    <div v-if="icon" class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
      {{ icon }}
    </div>
    <h3 v-if="title" class="text-xl font-black text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
      {{ title }}
    </h3>
    <div class="text-slate-500 font-medium leading-relaxed text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
