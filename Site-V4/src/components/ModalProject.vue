<template>
  <fwb-modal v-if="props.showModal" @close="$emit('toggleModal')" @click:outside="$emit('toggleModal')" size="6xl"
    id="modal">
    <template #header>
      <div class="flex items-center text-lg">
        <fwb-heading tag="h2" class="text-center mt-3 lg:text-left lg:mt-0 text-primary tracking-wide">
          {{ props.project?.title || 'Présentation du projet' }}
        </fwb-heading>
      </div>
    </template>
    <template #body>
      <div
        class="flex flex-col-reverse lg:flex-row gap-6 items-center justify-center mx-auto p-3 lg:min-h-[425px] overflow-y-scroll">
        <div class="h-full flex items-center justify-center w-full">
          <fwb-accordion flush class="w-full lg:min-w-[505px] ">
            <fwb-accordion-panel v-if="props.project && props.project.explanation">
              <fwb-accordion-header>
                <span class="text-secondary">
                  Le Projet
                </span>
              </fwb-accordion-header>
              <fwb-accordion-content>
                <div>
                  <p v-html="props.project.explanation" class="mb-2 text-secondary-light font-light">
                  </p>
                </div>
              </fwb-accordion-content>
            </fwb-accordion-panel>
            <fwb-accordion-panel v-if="props.project && props.project.skills">
              <fwb-accordion-header>
                <span class="text-secondary">
                  Compétences mobilisées
                </span>
              </fwb-accordion-header>
              <fwb-accordion-content>
                <div>
                  <p v-html="props.project.skills" class="mb-2 text-secondary-light font-light dark:text-gray-400"></p>
                </div>
              </fwb-accordion-content>
            </fwb-accordion-panel>
          </fwb-accordion>
        </div>
        <div class="flex flex-col gap-6 items-center justify-center w-full">
          <fwb-img alt="flowbite-vue" size="lg:max-w-lg" img-class="rounded-lg" :src="props.project?.img?.mediaItemUrl" />
          <a :href="props.project?.link" target="_blank">
            <Buttons color="accent" class="group">
              Voir Le Site
              <font-awesome-icon icon="fa-solid fa-arrow-right"
                class="ms-1 group-hover:translate-x-[5px] transtion-all duration-300" />
            </Buttons>
          </a>
        </div>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import {
  FwbModal,
  FwbHeading,
  FwbImg,
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'


import Buttons from '../components/Buttons/Buttons.vue'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
  }
})
</script>

<style>
@media (min-width: 1024px) {

  /* breakpoint lg */
  #modal>.overflow-y-auto>.max-w-6xl {
    display: flex;
    align-items: center;
  }
}
</style>