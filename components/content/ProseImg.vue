<template>
  <div class="my-12 relative group" data-aos="zoom-in">
    <!-- Outer Gradient Border -->
    <div class="absolute -inset-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 rounded-[2.5rem] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
    
    <!-- Image Container -->
    <div class="relative bg-white p-2 rounded-[2.2rem] shadow-2xl shadow-purple-500/10 border border-slate-200/50 overflow-hidden">
      <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        class="w-full h-auto rounded-[1.8rem] transition-transform duration-700 group-hover:scale-[1.02]"
      >
      
      <!-- Subtle Color Overlay on Hover -->
      <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>

    <!-- Caption (Optional) -->
    <p v-if="alt" class="mt-4 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
      // {{ alt }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})
</script>
