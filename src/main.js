import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$axios = axios
Vue.prototype.$moment = moment

moment.locale('pt-br')

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
