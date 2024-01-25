<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import ProjectDetail from '../components/ProjectDetail.vue'
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
const colors = ['primary', 'secondary', 'accent', 'black']; // Couleurs disponibles
const colorTitle = ref('primary'); // Couleur actuelle
// Change la couleur toutes les 8 secondes
const changeTitleColor = () => {
  setInterval(() => {
    const currentIndex = colors.indexOf(colorTitle.value);
    colorTitle.value = colors[(currentIndex + 1) % colors.length];
  }, 2000);
}
onMounted(() => {
  changeTitleColor();
});

onBeforeMount(() => {
  getData();

})
</script>

<template>
  <div class="relative bg-gray-50 rounded-lg">
    <div class="animated-shape"></div>
    <div class="flex flex-col items-center justify-center h-[80vh] gap-16 relative z-10">
      <h1 class="font-black text-5xl px-4 lg:px-0 lg:w-[60%] xl:w-[30%] text-center leading-relaxed">
        Emir <br>
        <span class="font-black text-5xl" :class="`text-${colorTitle} transition-all duration-700`">
          Développeur Web Front-End ici liste de mes capacités
        </span>
      </h1>
      <p class="text-center px-4 lg:px-0 lg:w-[60%] xl:w-[40%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus unde quis nobis
        fugiat, hic illum ullam
        nesciunt voluptatibus totam a adipisci non dolorem quae molestiae quibusdam, perspiciatis, facere rerum impedit?
      </p>
      <Buttons color="accent" size="xl" class="">
        En savoir plus
      </Buttons>
    </div>
  </div>
  <ProjectDetail></ProjectDetail>
</template>


<style>
.animated-shape {
  z-index: 1;
  width: 300px;
  height: 300px;
  background-color: theme('colors.primary-light');
  /* Carré */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: shapeAnimation 8s ease-in-out infinite;
}

@keyframes shapeAnimation {
  0% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    opacity: .0;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }

  25% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    opacity: .1;
    transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
  }

  50% {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
    /* Octogone */
    opacity: .3;
    transform: translate(-50%, -50%) rotate(180deg) scale(1.4);
  }

  75% {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    /* Décagone */
    opacity: .2;
    transform: translate(-50%, -50%) rotate(270deg) scale(1.6);
  }

  100% {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    /* Décagone */
    opacity: .0;
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}
</style>