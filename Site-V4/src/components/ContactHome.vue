<template>
  <section id="contact"
    class="mb-8 md:mb-4 mx-auto min-h-[500px] py-6 rounded-lg bg-slate-50 flex items-center flex-col justify-center gap-6">
    Contact
    <div class="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-6xl mx-auto">
      <form @submit="checkForm" class="w-[50%] bg-white p-8">
        <fwb-input v-model="firstname" label="Prénom *" placeholder="Votre Prénom" required />
        <hr class="mt-4 border-0">

        <fwb-input v-model="lastname" label="Nom *" placeholder="Votre Nom" required />
        <hr class="mt-4 border-0">

        <fwb-input @blur="checkPhone()" v-model="phone" required placeholder="Votre numéro de téléphone"
          label="Téléphone *" :validation-status="phoneValidationStatus">
          <template v-if="phoneValidationStatus === 'error'" #validationMessage>
            Oups... le numéro de téléphone ne semble pas valide...
          </template>
        </fwb-input>
        <hr class="mt-4 border-0">

        <fwb-input @blur="checkEmail()" v-model="email" required placeholder="Votre adresse email" label="E-mail *"
          :validation-status="emailValidationStatus">
          <template v-if="emailValidationStatus === 'error'" #validationMessage>
            Oups... l'adresse email ne semble pas valide...
          </template>
        </fwb-input>

        <hr class="mt-4 border-0">
        <fwb-textarea v-model="message" :rows="4" label="Votre message" placeholder="Votre Message..." />

        <hr class="mt-4 border-0">
        <Buttons type="submit" color="accent">
          Envoyer
        </Buttons>

      </form>
      <div class="w-[50%]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, repellat recusandae porro at ullam
          molestiae voluptate nesciunt nisi beatae, deserunt totam sed, possimus consectetur autem exercitationem quisquam
          praesentium aspernatur.
        </p>
      </div>
    </div>
    <Buttons @click="sendEmail('voilà le texte')" color="accent">
      Envoyer
    </Buttons>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FwbInput, FwbTextarea } from 'flowbite-vue'
import Buttons from '../components/Buttons/Buttons.vue'
import { sendEmail } from '../smtp.js';

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const emailValidationStatus = ref('');
const phone = ref('')
const phoneValidationStatus = ref('');
const message = ref('')

const checkEmail = () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailValidationStatus.value = ""
    return;
  }
  emailValidationStatus.value = regexEmail.test(email.value) ? 'success' : 'error'
}

const checkPhone = () => {
  const regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  if (!phone.value) {
    phoneValidationStatus.value = ""
    return;
  }
  phoneValidationStatus.value = regexPhone.test(phone.value) ? 'success' : 'error'
}

const checkForm = (e) => {
  sendFormContact();

  e.preventDefault();
  if (phoneValidationStatus.value !== 'success' || emailValidationStatus.value !== 'success') {
    return;
  }
}

const sendFormContact = async () => {
  try {
    await sendEmail('bro');
    alert('E-mail envoyé avec succès !');
  } catch (err) {
    alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
  }
}
</script>

<style></style>