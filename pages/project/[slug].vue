<template>
    <div class="mt-4">
        <div class="flex sm:justify-start justify-center">
            <span class="sm:text-[20px] text-xl font-bold">My Portfolio</span>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  // This check ensures the code only runs on the client side
  if (process.client) {
    console.log('slug => ', route.params.slug);
    console.log('This code runs only on the client side after the component is mounted.');
    // Your client-side code here
  }
});
</script>
