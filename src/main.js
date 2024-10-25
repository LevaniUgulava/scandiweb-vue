import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://scandi.infinityfreeapp.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

createApp(App).use(router).mount("#app");
