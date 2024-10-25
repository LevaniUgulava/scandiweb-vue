import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://scandi.infinityfreeapp.com/";

createApp(App).use(router).mount("#app");
