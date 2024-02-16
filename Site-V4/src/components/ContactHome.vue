<template>
  <section id="contact"
    class="mb-8 md:mb-4 mx-auto min-h-[500px] rounded-lg bg-slate-50 flex items-center flex-col justify-center gap-6 py-24">
    <fwb-heading tag="h2" class="text-center mt-3 lg:mt-0 text-primary tracking-wide">Contact</fwb-heading>
    <div class="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-6xl mx-auto px-8 lg:px-2">
      <form @submit="checkForm" class="w-full border lg:border-none lg:w-[50%] bg-white p-8">
        <fwb-toast
          class="shadow-xl transform transition-transform duration-500 ease-in-out fixed top-24 left-2 z-[60000000]"
          :class="emailSend === 'success' ? '-translate-x-[0px]' : ' -translate-x-[1200px]'" divide type="success">
          Votre message est envoyé... Merci et à bientôt
        </fwb-toast>
        <fwb-toast
          class=" shadow-xl transform transition-transform duration-500 ease-in-out fixed top-24 left-2 z-[60000000]"
          :class="emailSend === 'error' ? '-translate-x-[0px]' : ' -translate-x-[1200px]'" divide type="danger">
          Oups... Une erreur s'est glissée dans l'envoi du message pourriez-vous réesayer ?
        </fwb-toast>
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
        <fwb-textarea v-model="message" :rows="4" label="Message" placeholder="Votre Message..." />

        <hr class="mt-4 border-0">
        <Buttons type="submit" color="primary">
          Envoyer
        </Buttons>

      </form>
      <div class="lg:w-[50%] flex flex-col  gap-7 text-justify">
        <p class="font-light text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, repellat recusandae porro at ullam
          molestiae voluptate nesciunt nisi beatae, deserunt totam sed, possimus consectetur autem exercitationem quisquam
          praesentium aspernatur.
        </p>
        <p class="font-light text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, repellat recusandae porro at ullam
          molestiae voluptate nesciunt nisi beatae, deserunt totam sed, possimus consectetur autem exercitationem quisquam
          praesentium aspernatur.
        </p>
        <p class="text-secondary flex items-center justify-center gap-6">
          <a target="_blank" href="https://www.linkedin.com/in/emir-kherchi/">
            <font-awesome-icon
              class="w-7 h-7 rounded-full p-3 text-white bg-secondary-light border border-secondary-light hover:bg-transparent hover:text-secondary-light transition-all duration-300"
              icon="fa-brands fa-linkedin-in" />
          </a>
          <a target="_blank"
            href="https://www.malt.fr/profile/emirkherchi?q=emir+kherchi&sourceComponent=home_unlogged&searchid=65cf34501bc84e344b47920e">
            <span
              class="font-bold text-md rounded-full w-14 h-14 flex items-center justify-center tracking-widest text-white bg-accent-light border border-accent-light hover:bg-transparent hover:text-accent-light transition-all duration-300">
              Malt
            </span>
          </a>
          <a target="_blank" href="https://github.com/EmirKherchi">
            <font-awesome-icon
              class="w-9 h-9 rounded-full p-2 text-white bg-gray-800  border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300"
              icon="fa-brands fa-github" />
          </a>
        </p>
        <p class="font-medium text-primary text-center">
          Vous souhaitez en savoir plus ? Être conseillé pour votre projet ?
          Je vous propose d'en discuter ensemble via un Call
          <a href="https://calendly.com/ekherchi/prise-de-contact-pour-votre-projet" target="_blank">
            <Buttons color="accent block mx-auto mt-5">
              Prise de RDV Calendly
            </Buttons>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FwbInput, FwbTextarea, FwbToast, FwbHeading } from 'flowbite-vue'
import Buttons from '../components/Buttons/Buttons.vue'
import { sendEmail } from '../smtp.js';

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const emailValidationStatus = ref('')
const phone = ref('')
const phoneValidationStatus = ref('')
const message = ref('')
const emailSend = ref('')

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
  e.preventDefault();
  if (phoneValidationStatus.value !== 'success' || emailValidationStatus.value !== 'success') {
    return;
  }
  sendFormContact();
}

const sendFormContact = async () => {
  const res = await sendEmail(emailBody());
  if (res === 'OK') {
    emailSend.value = 'success'

    // Clean form
    firstname.value = ''
    lastname.value = ''
    email.value = ''
    emailValidationStatus.value = ''
    phone.value = ''
    phoneValidationStatus.value = ''
    message.value = ''

    setTimeout(() => {
      emailSend.value = '';
    }, 5000);
  } else {
    emailSend.value = 'error';
    setTimeout(() => {
      emailSend.value = '';
    }, 5000);
  }
}

const emailBody = () => {
  return `
    Message en provenance du site ekherchi.fr de la part de <strong> ${firstname.value} ${lastname.value} </strong> <br>
    Le numéro de téléphone est le <strong> ${phone.value} </strong> <br>
    L'adresse e-mail est <strong> ${email.value} </strong> <br> 
    Le message est le suivant : <strong>${message.value}</strong>
  `
}
</script>
<style scoped>
#toast-default {
  background: theme('colors.primary-light');
  color: white;
}
</style>