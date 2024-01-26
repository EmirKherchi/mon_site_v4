<script setup>
import { FwbHeading } from 'flowbite-vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Le projet'
  }
})
</script>

<template>
  <div
    class="flex flex-col-reverse md:flex-row gap-6 items-center justify-center my-8 md:my-4 mx-auto min-h-[800px] max-w-7xl">
    <div class="h-full flex flex-col gap-9 items-center justify-center px-2 w-full md:w-6/12">
      <fwb-heading tag="h2" class="text-center mt-3 md:text-left md:mt-0">{{ props.title }}</fwb-heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis cumque earum
        ab,
        corrupti, accusantium voluptas illum eos debitis fugit suscipit et exercitationem animi. Enim ducimus hic labore
        natus similique! Veritatis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis cumque earum
        ab,
        corrupti, accusantium voluptas illum eos debitis fugit suscipit et exercitationem animi. Enim ducimus hic labore
        natus similique! Veritatis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis cumque earum
        ab,
        corrupti, accusantium voluptas illum eos debitis fugit suscipit et exercitationem animi. Enim ducimus hic labore
        natus similique! Veritatis?
      </p>
    </div>
    <div
      class="h-full flex items-center justify-center px-2 w-full md:w-6/12 rounded-lg shadow md:rounded-none md:shadow-none">
      <img alt="Illustration présentation Emir kherchi developpeur freelance Caen" src="@/assets/svg/presentation.svg" />
    </div>
  </div>
</template>