import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

const app = createApp(App)
const options = {
    // You can set your default options here
};

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount('#app')
