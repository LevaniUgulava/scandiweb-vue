import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Global Axios configuration
axios.defaults.baseURL = 'http://scandi.infinityfreeapp.com';
axios.defaults.withCredentials = true; // Include cookies/auth if required
axios.defaults.headers.common['Content-Type'] = 'application/json';

createApp(App).use(router).mount("#app");
