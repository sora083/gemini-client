import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "element-ui/lib/theme-chalk/index.css";

import firebase from "firebase";
import dotenv from "dotenv";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

const conf = dotenv.config();
if (conf.error) {
  console.log("Could not load env file", conf.error);
}

var config = {
  apiKey: process.env.VUE_APP_GEMINI_API_KEY,
  authDomain: process.env.VUE_APP_GEMINI_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_GEMINI_DB_URL,
  projectId: process.env.VUE_APP_GEMINI_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
