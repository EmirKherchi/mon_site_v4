<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue'
import { useRoute } from 'vue-router'
import Buttons from './Buttons/Buttons.vue'
import { ref, onMounted, onUnmounted } from 'vue';


const route = useRoute();
const isFixed = ref(false);

// Fonction pour détecter le défilement de la page
const handleScroll = () => {
  isFixed.value = window.pageYOffset > 0;
};

// Ajouter un écouteur d'événement lors du montage du composant
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Supprimer l'écouteur d'événement lors du démontage du composant
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <fwb-navbar :class="{ 'shadow ': isFixed }" class="transition-all duration-300 top-0 inset-x-0 z-50 fixed">
    <template #logo>
      <router-link :to="{ path: '/' }">
        <span class="arvo text-xl tracking-wide">
          EMIR K.
        </span>
      </router-link>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu" class="Capitalize mt-2">
        <fwb-navbar-link link="/">
          <span
            class="duration-300 font-semibold px-2 py-1 tracking-wide text-lg hover:bg-primary hover:text-white rounded-lg hover:shadow-lg "
            :class="route.path === '/' ? 'text-primary' : ''">
            Accueil
          </span>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link :to="{ path: '/', hash: '#about' }">
            <span
              class="duration-300 font-semibold px-2 py-1 tracking-wide text-lg hover:bg-primary hover:text-white rounded-lg hover:shadow-lg "
              :class="route.path === '/about' ? 'text-primary' : ''">
              A propos
            </span>
          </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link link="/projects">
          <span
            class="duration-300 font-semibold px-2 py-1 tracking-wide text-lg hover:bg-primary hover:text-white rounded-lg hover:shadow-lg "
            :class="route.path === '/projects' ? 'text-primary' : ''">
            Projets
          </span>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <Buttons color="primary" size="sm" classes="font-semibold">
        Contact
      </Buttons>
    </template>
  </fwb-navbar>
</template>

