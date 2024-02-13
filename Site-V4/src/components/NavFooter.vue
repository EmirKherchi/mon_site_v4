<script setup>
import {
  FwbFooter,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
const date = new Date;
const year = date.getFullYear()
</script>

<template>
  <fwb-footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link :to="{ path: '/' }">
          <span class="arvo text-xl tracking-wide">
            EMIR K.
          </span>
        </router-link>
        <fwb-footer-link-group class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
          <fwb-footer-link href="/">
            Accueil
          </fwb-footer-link>
          <fwb-footer-link>
            <router-link :to="{ path: '/', hash: '#about' }">
              A Propos
            </router-link>
          </fwb-footer-link>
          <fwb-footer-link>
            <router-link :to="{ path: '/', hash: '#projects' }">
              Projets
            </router-link>
          </fwb-footer-link>
          <fwb-footer-link>
            <router-link :to="{ path: '/', hash: '#contact' }">
              Contact
            </router-link>
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8">
      <div class="text-slate-400 flex items-center jsutify-between">
        <span class="text-sm font-light">
          © {{ year }} - Site internet crée par <span class="text-secondary-light font-light"> Emir Kherchi </span>
        </span>
      </div>
    </div>
  </fwb-footer>
</template>

