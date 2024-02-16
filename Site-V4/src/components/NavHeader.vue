<template>
  <fwb-navbar :class="{ 'shadow': isFixed }" class="transition-all duration-300 top-0 inset-x-0 z-50 fixed">
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
            :class="route.path === '/' && !spyHash ? 'text-primary' : ''">
            Accueil
          </span>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link :to="{ path: '/', hash: '#about' }">
            <span
              class="duration-300 font-semibold px-2 py-1 tracking-wide text-lg hover:bg-primary hover:text-white rounded-lg hover:shadow-lg "
              :class="spyHash === '#about' ? 'text-primary' : ''">
              A Propos
            </span>
          </router-link>
        </fwb-navbar-link>
        <fwb-navbar-link>
          <router-link :to="{ path: '/', hash: '#projects' }">
            <span
              class="duration-300 font-semibold px-2 py-1 tracking-wide text-lg hover:bg-primary hover:text-white rounded-lg hover:shadow-lg "
              :class="spyHash === '#projects' ? 'text-primary' : ''">
              Projets
            </span>
          </router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <router-link :to="{ path: '/', hash: '#contact' }">
        <Buttons color="primary" size="sm" @mouseenter="mailHovered = true" @mouseleave="mailHovered = false">
          <span class="font-semibold px-4">
            Contact
            <font-awesome-icon v-if="spyHash !== '#contact' && !mailHovered" icon="fa-solid fa-envelope" class="ms-2" />
            <font-awesome-icon v-if="spyHash === '#contact' || mailHovered" icon="fa-solid fa-envelope-open"
              class="ms-2" />
          </span>
        </Buttons>
      </router-link>
    </template>
  </fwb-navbar>
</template>
<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue'
import Buttons from './Buttons/Buttons.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const spyHash = ref('')
const isFixed = ref(false);
const mailHovered = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section[id]');
  let isSectionVisible = false;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const hash = '#' + section.id;
      spyHash.value = hash;
      isSectionVisible = true;
    }
  });

  if (!isSectionVisible) {
    spyHash.value = '';
  }
  // Mettre à jour isFixed
  isFixed.value = scrollPosition > 0; // Mettre à true si la position de défilement est supérieure à 0, sinon false
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Style de votre barre de navigation */
</style>