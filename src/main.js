import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Configure Axios to use the proxy path
axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true; // Enable if your backend requires it
axios.defaults.headers.common['Content-Type'] = 'application/json';

createApp(App).use(router).mount("#app");
