process.title = "glot-client"

import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Firebase Setting start */
import firebase from 'firebase'

let config = {
	apiKey: "AIzaSyAh6SK0vE-jM0-gNxolT_wXvL9RX6-8YrM",
	authDomain: "glot-ddc71.firebaseapp.com",
	databaseURL: "https://glot-ddc71.firebaseio.com",
	projectId: "glot-ddc71",
	storageBucket: "glot-ddc71.appspot.com",
	messagingSenderId: "305423916799"
};
firebase.initializeApp(config);
/* Firebase Setting end */

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	let skipAuth = to.matched.some(record => record.meta.skipAuth)
	firebase.auth().onAuthStateChanged(function (user) {
		user ? store.commit("login", user) : store.commit("logout")
		if (!skipAuth) {
			if (!user) {
				next({
					path: '/',
					query: { redirect: to.name }
				})
			} else {
				next()
			}
		} else {
			if (user) {
				next({
					path: `/${store.state.redirect_default}`
				})
			} else {
				next()
			}
		}
	});
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
