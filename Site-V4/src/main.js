import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowDown, faArrowRight, faEnvelope, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faChevronDown } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faArrowRight, faArrowDown, faEnvelope, faEnvelopeOpen, faLinkedin, faLinkedinIn, faGithub, faPhone)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
