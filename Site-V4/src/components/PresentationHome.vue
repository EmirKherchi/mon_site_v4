<script setup>
import { FwbHeading } from 'flowbite-vue'
import MainAbout from '../components/svg/MainAbout.vue'
import Button from './Buttons/Buttons.vue'


const props = defineProps({
  title: {
    type: String,
    default: 'Le projet'
  }
})

</script>

<template>
  <section class="bg-slate-50 py-24 mt-24">
    <div
      class="flex flex-col-reverse lg:flex-row gap-6 items-center justify-center my-8 md:my-4 mx-auto min-h-[500px] max-w-7xl">
      <div class="h-full flex flex-col gap-9 items-center justify-center px-2 w-full">
        <fwb-heading tag="h2" class="text-center mt-3 lg:text-left lg:mt-0 text-primary tracking-wide">
          {{ props.title }}
        </fwb-heading>
        <p class="font-normal text-secondary">
          En tant que développeur web freelance passionné, je propose des solutions numériques sur mesure pour répondre
          aux besoins de mes clients. Avec une expertise approfondie dans les technologies front-end telles que
          <strong class="font-semibold text-primary">JavaScript, Vue.js, React et WordPress</strong>, je vous accompagne à
          chaque étape de votre projet, de la conception à la
          réalisation.
        </p>
        <p class="font-normal text-secondary">
          Mon approche centrée sur le client garantit une communication transparente et une compréhension approfondie de
          vos objectifs commerciaux. <strong class="font-semibold text-primary">Que vous souhaitiez créer un site vitrine,
            une application web spécifique ou une
            boutique en ligne</strong>, je m'engage à transformer votre vision en réalité numérique, en mettant l'accent
          sur la
          qualité, la performance et l'expérience utilisateur.
        </p>
        <p class="font-normal text-secondary">
          Faites confiance à mon expertise et à ma passion pour le développement web pour concrétiser vos idées les plus
          ambitieuses. <strong class="font-semibold text-primary">Ensemble, créons des solutions numériques
            innovantes</strong> qui propulseront votre entreprise vers le
          succès en ligne.
        </p>

        <a href="http://admin.ekherchi.fr/wp-content/uploads/2024/02/Cv-Emir-Kherchi.pdf" target="_blank" download>
          <Button color="accent">Découvrir mon parcours professionnel</Button>
        </a>
      </div>
      <div class="h-full flex items-center justify-center px-2 w-full relative animation">
        <MainAbout />
      </div>
    </div>
  </section>
</template>