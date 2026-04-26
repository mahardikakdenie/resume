<template>
  <NuxtLink
    :to="href"
    :target="computedTarget"
    :rel="computedTarget === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined
  }
})

const isExternal = computed(() => {
  return props.href.startsWith('http') || props.href.startsWith('//') || props.href.startsWith('mailto:')
})

const computedTarget = computed(() => {
  if (props.target) return props.target
  return isExternal.value ? '_blank' : undefined
})
</script>
