import './assets/main.css'

import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faArrowDown, faArrowRight, faEnvelope, faEnvelopeOpen, faPhone, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faArrowRight, faArrowDown, faEnvelope, faEnvelopeOpen, faLinkedin, faLinkedinIn, faGithub, faPhone, faSpinner)

import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.APOLLO_URL,
})
// Cache implementation
const cache = new InMemoryCache()
// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
