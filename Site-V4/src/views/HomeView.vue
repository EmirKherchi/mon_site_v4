<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import PresentationHome from '../components/PresentationHome.vue'
import Buttons from '../components/Buttons/Buttons.vue'

const API_URL = `http://admin.ekherchi.fr/wp-json/wp/v2/projects?acf_format=standard&_fields=acf`
let projects = null;

const getData = () => {
  fetch(API_URL, {
    headers: { 'Content-type': 'application/json' },
  }).then(res => res.json()).then((response) => {
    // console.log(response)
    projects = response;
    console.log(projects[0])
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  });
}

const colors = ['primary', 'secondary', 'accent', 'yellow-400', 'black', 'primary-light', 'secondary-light', 'accent-light'];
const skills = ['Vue.Js', 'React.Js', 'Wordpress', 'Javascript', 'Front-End', 'Site Vitrine', 'E-Commerce', 'Application Web'];
const colorTitle = ref('black');
const skillsTitle = ref('Front-End');

const titleAnimations = () => {
  setInterval(() => {
    const currentIndexColors = colors.indexOf(colorTitle.value);
    const currentIndexSkills = skills.indexOf(skillsTitle.value);
    colorTitle.value = colors[(currentIndexColors + 1) % colors.length];
    skillsTitle.value = skills[(currentIndexSkills + 1) % skills.length];
  }, 2000);
}

onMounted(() => {
  titleAnimations();
});

onBeforeMount(() => {
  getData();

})
</script>

<template>
  <div class="relative bg-zinc-50 rounded-lg overflow-hidden mt-20">
    <div class="animated-shape" :class="`bg-${colorTitle}`"></div>
    <div class="flex flex-col items-center justify-center h-[80vh] gap-16 relative z-10">
      <h1 class="font-black text-5xl px-4 lg:px-0 leading-relaxed text-center tracking-wide">
        Developpeur Web
        <br>
        Freelance
        <br>
        <span class="font-black text-5xl tracking-wide" :class="`text-${colorTitle} transition-all duration-700`">
          {{ skillsTitle }}
        </span>
      </h1>
      <p class="text-center px-4 lg:px-0 lg:w-[60%] xl:w-[40%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus unde quis nobis
        fugiat, hic illum ullam
        nesciunt voluptatibus totam a adipisci non dolorem quae molestiae quibusdam, perspiciatis, facere rerum impedit?
      </p>
      <router-link :to="{ path: '/', hash: '#about' }">
        <Buttons color="accent" size="xl" class="">
          En savoir plus
        </Buttons>
      </router-link>
    </div>
  </div>
  <div id="about">
    <PresentationHome title="Bim Ba Da Boom"></PresentationHome>
  </div>
  <div class="bg-accent/15 h-[1000px]"></div>
</template>


<style>
.animated-shape {
  z-index: 1;
  min-width: 250px;
  max-width: 300px;
  min-height: 250px;
  max-height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: shapeAnimation 5s ease-in-out infinite;
}

@keyframes shapeAnimation {
  0% {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    opacity: .0;
    transform: translate(-50%, -50%) rotate(0deg) scale(0);
  }

  25% {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    opacity: .1;
    transform: translate(-50%, -50%) rotate(90deg) scale(2.5);
  }

  50% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    opacity: .2;
    transform: translate(-50%, -50%) rotate(180deg) scale(3);
  }

  75% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%, 75% 100%, 25% 100%, 0% 75%, 0% 25%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    opacity: .1;
    transform: translate(-50%, -50%) rotate(270deg) scale(2.5);
  }

  100% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%, 75% 100%, 25% 100%, 0% 75%, 0% 25%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    opacity: .0;
    transform: translate(-50%, -50%) rotate(360deg) scale(0);
  }
}
</style>