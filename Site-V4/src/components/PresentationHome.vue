<script setup>
import { FwbHeading } from 'flowbite-vue'
import MainAbout from '../components/svg/MainAbout.vue'


const props = defineProps({
  title: {
    type: String,
    default: 'Le projet'
  }
})

</script>

<template>
  <div
    class="flex flex-col-reverse lg:flex-row gap-6 items-center justify-center my-8 md:my-4 mx-auto min-h-[800px] max-w-7xl">
    <div class="h-full flex flex-col gap-9 items-center justify-center px-2 w-full">
      <fwb-heading tag="h2" class="text-center mt-3 lg:text-left lg:mt-0">{{ props.title }}</fwb-heading>
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
      class="h-full flex items-center justify-center px-2 w-full rounded-lg shadow lg:rounded-none lg:shadow-none relative animation">
      <MainAbout />
    </div>
  </div>
</template>