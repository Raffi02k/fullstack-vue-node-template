// client/src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Skapa och montera appen
const app = createApp(App);

// Använd router-instansen
app.use(router);

// Montera appen till DOM-elementet med id="app"
app.mount('#app');

console.log('Vue 3 client started successfully!');
