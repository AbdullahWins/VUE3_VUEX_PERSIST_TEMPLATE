import { createApp } from "vue";
import { store } from './store/store'
import App from "./App.vue";
import "./main.css";
import router from "./router";
const app = createApp(App);
app.use(router);
app.use(store)

app.mount("#app");
