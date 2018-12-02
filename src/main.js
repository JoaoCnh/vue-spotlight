import Vue from "vue";
import Vuex from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import createStore from "./store";

library.add(faSearch);

Vue.use(Vuex);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store: createStore(),
  render: h => h(App)
}).$mount("#app");
