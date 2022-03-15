import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/scss/main.scss";
import Toast from "vue-toastification";
import { store } from "./store";
import "vue-toastification/dist/index.css";
createApp(App).use(router).use(store).use(Toast).mount("#app");
