<script setup>
import { FwbHeading, FwbCard } from 'flowbite-vue'
import ModalProject from '../components/ModalProject.vue'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Les projets'
  },
  subtitle: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  projects: {
    type: Array,
    default: () => []
  }
})

const showModal = ref(false);
const project = ref({});

const showProjectModal = (refProject) => {
  project.value = refProject;
  showModal.value = true;
}

</script>

<template>
  <modal-project :project="project" :showModal="showModal" @toggleModal="showModal = false" />
  <div class="flex flex-col gap-6 items-center justify-center mb-8 md:mb-4 mx-auto min-h-[500px] py-6">
    <!-- <fwb-heading tag="h2" class="text-center mt-3 text-secondary tracking-wide">{{ props.title }}</fwb-heading> -->
    <h1 class="text-5xl lg:text-[60px] text-primary mx-auto text-center tracking-wide my-6 font-black lg:w-[40%]">
      Découvrez les Projets
    </h1>
    <fwb-heading tag="h3" class="text-center mt-3 lg:mt-0 font-normal text-lg w-[70%] text-secondary">
      {{ props.subtitle }}
    </fwb-heading>
    <div class="flex items-center justify-center flex-wrap gap-4 md:gap-10 px-6 my-10">
      <fwb-card v-for="project, i in projects" :key="i"
        :img-alt="project.img?.altText || 'Projet emir kherchi developpeur web freelance Caen'"
        :img-src="project.img?.mediaItemUrl || 'https://flowbite.com/docs/images/blog/image-1.jpg'" variant="image"
        class="h-[450px] projectCard">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            {{ project.title }}
          </h5>
          <p class="text-secondary font-light text-md">
            {{ project.excerpt }}
          </p>
          <p @click="showProjectModal(project)"
            class="text-primary-light cursor-pointer hover:underline mt-3 text-sm group">
            En savoir plus
            <font-awesome-icon icon="fa-solid fa-arrow-right"
              class="ms-1 group-hover:translate-x-[5px] transtion-all duration-300" />
          </p>
        </div>
      </fwb-card>
    </div>
    <!-- <router-link to="/projects">
      <Buttons color="accent" size="xl">
        Voir tout les projets
      </Buttons>
    </router-link> -->
  </div>
</template>

<style>
.projectCard>img {
  height: 35% !important;
  width: 100% !important;
  object-fit: cover;
  border-bottom: 1px solid #ebebeb;
}
</style>