import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://scandi.infinityfreeapp.com/";
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'


createApp(App).use(router).mount("#app");
