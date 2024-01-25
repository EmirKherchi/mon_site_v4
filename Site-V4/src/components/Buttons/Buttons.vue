<script setup>
import { FwbButton } from 'flowbite-vue'

// Define props using defineProps
const props = defineProps({
  color: {
    type: String,
    default: "secondary"
  }
});
</script>

<template>
  <fwb-button :class="`bg-${props.color} hover:bg-${props.color}-light text-white transition-all duration-300`">
    <slot></slot>
  </fwb-button>
</template>
