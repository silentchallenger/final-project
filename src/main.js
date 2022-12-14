import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";
import "./assets/css/main.css";

const app = createApp(App);

const options = {
  position: "top-center",
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
};

app.use(router);
app.use(Toast, options);

app.mount("#app");
