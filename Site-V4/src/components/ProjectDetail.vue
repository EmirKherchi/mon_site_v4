<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Le projet'
  }
})
</script>

<template>
  {{ props.title }}
</template>