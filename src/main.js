import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = 'http://scandiweb12.000.pe/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

createApp(App).use(router).mount("#app");
