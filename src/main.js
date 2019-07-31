import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import vuetify from './plugins/vuetify.js'
import './plugins/firebase.js'
import i18n from './i18n'

Vue.config.productionTip = false


// firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')

// })




