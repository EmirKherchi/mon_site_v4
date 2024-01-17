<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
const test = ref("test");
</script>

<template>
  <main>
    <TheWelcome />

    {{ test }}
  </main>
</template>
