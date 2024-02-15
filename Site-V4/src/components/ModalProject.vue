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
      <div class="flex flex-col-reverse lg:flex-row gap-6 items-center justify-center mx-auto p-3 lg:min-h-[425px]">
        <div class="h-full flex items-center justify-center w-full">
          <fwb-accordion flush class="w-full lg:min-w-[505px] ">
            <fwb-accordion-panel>
              <fwb-accordion-header>
                <span class="text-secondary">
                  Le Projet
                </span>
              </fwb-accordion-header>
              <fwb-accordion-content>
                <div>
                  <p class="mb-2 text-secondary-light font-light dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                    buttons, dropdowns, modals, navbars, and more.
                  </p>
                  <p class="text-secondary-light font-light dark:text-gray-400">
                    Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline"
                      href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster
                    with components on top of Tailwind CSS.
                  </p>
                </div>
              </fwb-accordion-content>
            </fwb-accordion-panel>
            <fwb-accordion-panel>
              <fwb-accordion-header>
                <span class="text-secondary">
                  Compétences mobilisées
                </span>
              </fwb-accordion-header>
              <fwb-accordion-content>
                <div>
                  <p class="mb-2 text-secondary-light font-light dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                    library has a design equivalent in our Figma file.
                  </p>
                  <p class="text-secondary-light font-light dark:text-gray-400">
                    Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline"
                      href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from
                    Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </fwb-accordion-content>
            </fwb-accordion-panel>
            <fwb-accordion-panel>
              <fwb-accordion-header>
                <span class="text-secondary">
                  Choix technique / Stack
                </span>
              </fwb-accordion-header>
              <fwb-accordion-content>
                <div>
                  <p class="mb-2 text-secondary-light font-light dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                    library has a design equivalent in our Figma file.
                  </p>
                  <p class="text-secondary-light font-light dark:text-gray-400">
                    Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline"
                      href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from
                    Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </fwb-accordion-content>
            </fwb-accordion-panel>
          </fwb-accordion>
        </div>
        <div class="flex flex-col gap-6 items-center justify-center w-full">
          <fwb-img alt="flowbite-vue" size="lg:max-w-lg" img-class="rounded-lg"
            src="http://admin.ekherchi.fr/wp-content/uploads/2024/01/pexels-felix-mittermeier-956981-scaled.jpg" />
          <Buttons color="accent" class="group">
            Voir Le Site
            <font-awesome-icon icon="fa-solid fa-arrow-right"
              class="ms-1 group-hover:translate-x-[5px] transtion-all duration-300" />
          </Buttons>
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
#modal>.overflow-y-auto>.max-w-6xl {
  display: flex;
  align-items: center;
}
</style>