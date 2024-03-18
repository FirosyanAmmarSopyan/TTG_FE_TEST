import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from './App.vue'

const app = createApp(App); // Memasukkan komponen utama App ke dalam createApp
app.use(ToastPlugin);
app.mount('#app');
