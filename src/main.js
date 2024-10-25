import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = 'http://scandi.infinityfreeapp.com';
axios.defaults.withCredentials = true; // Use if your API needs cookies/authentication
axios.defaults.headers.common['Content-Type'] = 'application/json';

createApp(App).use(router).mount("#app");
