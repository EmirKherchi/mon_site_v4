<template>
  <fwb-modal v-if="props.showModal" @close="$emit('toggleModal')" @click:outside="$emit('toggleModal')" size="6xl"
    id="modal">
    <template #header>
      <div class="flex items-center text-lg">
        Terms of Service
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
        companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
        ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
        possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
  </fwb-modal>
</template>

<script setup>
import { FwbModal, FwbHeading } from 'flowbite-vue'

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  }
})


</script>

<style>
#modal>.overflow-y-auto>.max-w-6xl {
  display: flex;
  align-items: center;
}
</style>