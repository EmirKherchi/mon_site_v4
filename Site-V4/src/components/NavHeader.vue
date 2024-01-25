<script setup>
  import {
    FwbButton,
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
  } from 'flowbite-vue'
  import {useRoute} from 'vue-router'
  import {computed } from 'vue';
  const route=useRoute();
  console.log(route);

  const path = computed(() =>route.path)
  console.log(path)
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <span class="arvo text-2xl">
        Emir.K
      </span>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link :is-active="route.path == '/' ? true : false" link="/">
          <span>

            Home
          </span>
        </fwb-navbar-link>
        <fwb-navbar-link :is-active="route.path == '/about'" link="/about">
          About
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
    <fwb-button>
      Contact      
    </fwb-button>
    </template>
  </fwb-navbar>
</template>

