import { createApp } from 'vue'
import App from './App.vue'

import { WebR } from 'webr';

import './assets/main.css'

const app = createApp(App);
app.config.globalProperties.webR = new WebR();
app.mount('#app');
