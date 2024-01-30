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

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
