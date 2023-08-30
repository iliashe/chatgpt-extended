import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import axios from "axios";
const options = {
    method: 'GET',
    url: "http://localhost:5000",
  }
  axios.request(options)
  .then(res => console.log(res))


const app = createApp(App)

app.use(createPinia())

app.mount('#app')
