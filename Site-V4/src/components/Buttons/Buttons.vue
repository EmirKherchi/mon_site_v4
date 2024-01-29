<script setup>
import { FwbButton } from 'flowbite-vue'

// Define props using defineProps
const props = defineProps({
  color: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "md"
  },
  classes: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <fwb-button :size="props.size"
    :class="`bg-${props.color} hover:bg-${props.color}-light text-white transition-all duration-300 ${classes}`">
    <slot></slot>
  </fwb-button>
</template>
