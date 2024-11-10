import { createApp } from 'vue';
import './styles/style.css';
import 'floating-vue/dist/style.css';
import './styles/tootip.css';
import App from './App.vue';
import { vTooltip } from 'floating-vue';

const app = createApp(App);

app.directive('tooltip', vTooltip);

app.mount('#app');
