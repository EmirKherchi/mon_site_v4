<script setup>
import { FwbHeading, FwbCard } from 'flowbite-vue'
import Buttons from '../components/Buttons/Buttons.vue'



const props = defineProps({
  title: {
    type: String,
    default: 'Les projets'
  },
  subtitle: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
})

</script>

<template>
  <div
    class="flex flex-col gap-6 items-center justify-center mb-8 md:mb-4 mx-auto min-h-[500px] max-w-7xl bg-slate-50 py-6 rounded-b-lg">
    <!-- <fwb-heading tag="h2" class="text-center mt-3 text-secondary tracking-wide">{{ props.title }}</fwb-heading> -->
    <h1
      class="parallax-text text-5xl lg:text-[100px] text-secondary mx-auto text-center tracking-wide font-black w-[80%]">
      Découvrez les Projets
    </h1>
    <fwb-heading tag="h3" class="text-center mt-3 lg:mt-0 font-normal text-lg w-[70%]">{{ props.subtitle }}</fwb-heading>
    <div class="flex items-center justify-center xl:justify-start flex-wrap gap-4 md:gap-10 px-6 my-10">
      <fwb-card img-alt="Desk" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image"
        class="min-h-[400px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="text-secondary font-light text-md">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <p class="text-primary-light hover:underline mt-3 text-sm">
            <router-link to="/projects/:id">
              En savoir plus
            </router-link>
          </p>
        </div>
      </fwb-card>
      <fwb-card img-alt="Desk" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image"
        class="min-h-[400px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="text-secondary font-light text-md">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <p class="text-primary-light hover:underline mt-3 text-sm">
            <router-link to="/projects/:id">
              En savoir plus
            </router-link>
          </p>
        </div>
      </fwb-card>
      <fwb-card img-alt="Desk" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image"
        class="min-h-[400px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="text-secondary font-light text-md">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <p class="text-primary-light hover:underline mt-3 text-sm">
            <router-link to="/projects/:id">
              En savoir plus
            </router-link>
          </p>
        </div>
      </fwb-card>
      <fwb-card img-alt="Desk" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image"
        class="min-h-[400px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="text-secondary font-light text-md">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <p class="text-primary-light hover:underline mt-3 text-sm">
            <router-link to="/projects/:id">
              En savoir plus
            </router-link>
          </p>
        </div>
      </fwb-card>
      <fwb-card img-alt="Desk" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" variant="image"
        class="min-h-[400px]">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-bold text-secondary">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="text-secondary font-light text-md">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <p class="text-primary-light hover:underline mt-3 text-sm">
            <router-link to="/projects/:id">
              En savoir plus
            </router-link>
          </p>
        </div>
      </fwb-card>
    </div>
    <router-link to="/projects">
      <Buttons color="accent" size="xl" classes="font-bold">
        Voir tout les projets
      </Buttons>
    </router-link>
  </div>
</template>