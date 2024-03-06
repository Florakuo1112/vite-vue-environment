//bs5
import './assets/all.scss'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
//import 到main.js
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VeeValidate from "vee-validate";

// import * as VeeValidateI18n from "@vee-validate/i18n";
// import * as VeeValidateRules from "@vee-validate/rules";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios,axios);
//全域註冊
app.component('LaodingOverlay', Loading);
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);

app.mount('#app');
