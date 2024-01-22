<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onBeforeMount } from 'vue'
// import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'

const API_URL = `http://admin.ekherchi.fr/wp-json/wp/v2/projects?acf_format=standard&_fields=acf`
let projects = null;

const getData = () => {
  fetch(API_URL, {
    headers: { 'Content-type': 'application/json' },
  }).then(res=>res.json()).then((response) => {
    // console.log(response)
    projects = response;
    console.log(projects[0])
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  });
}


onBeforeMount(() => {
  getData();

})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
