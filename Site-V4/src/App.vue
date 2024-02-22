<script setup>
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/NavFooter.vue'
</script>

<template>
  <span class="
    hidden 
    bg-primary 
    bg-secondary 
    bg-primary-light 
    bg-secondary-light 
    bg-accent 
    bg-accent-light
    bg-black
    hover:bg-primary 
    hover:bg-secondary 
    hover:bg-primary-light 
    hover:bg-secondary-light 
    hover:bg-accent 
    hover:bg-accent-light
    text-primary
    text-secondary
    text-secondary-light
    text-primary-light
    text-accent
    text-accent-light
    text-yellow-400
    " />
  <header>
    <NavHeader />
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  </header>

  <section class="container mx-auto px-2 sm:px-0 py-2.5">
    <RouterView />
  </section>

  <footer>
    <NavFooter />
  </footer>
</template>
