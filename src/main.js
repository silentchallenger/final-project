import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import { createPinia } from "pinia";

import "vue-toastification/dist/index.css";
import "./assets/css/main.css";

const app = createApp(App);
const pinia = createPinia()

const options = {
  position: "bottom-center",
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
};

app.use(pinia)
app.use(router);
app.use(Toast, options);

app.mount("#app");
