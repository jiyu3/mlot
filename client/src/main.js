/* eslint-disable */
process.title = "glot-client"

import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
Vue.use(Loading)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Toasted from 'vue-toasted';
Vue.use(Toasted)

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

Vue.mixin({
	methods: {
		rpc(table, method, params, loading_overlay = false) {
			let url = this.$store.getters.db_url + table + "/" + method
			let data = {
				jsonrpc: "2.0",
				method: "login",
				params: params
			}
			let error_count = 0

			let loader = null
			if (loading_overlay) {
				loader = this.$loading.show()
			}
			return new Promise((resolve, reject) => {
				let interval = setInterval(() => {
					if (params == null || params.token !== null) {
						clearInterval(interval)

						this.axios.post(
							url, data
						).then(r => {
							let result = JSON.parse(r.data).result
							resolve(result)
						}).catch(e => {
							reject(e)
						}).finally(r => {
							if (loader != null) {
								loader.hide()
							}
						})
					} else {
						if (error_count++ >= 3) {
							clearInterval(interval)
							alert("予期しないエラーが発生しました。ログインし直してください")
							this.$router.push("/logout")
						}
						params.token = this.$store.state.token
					}
				}, 100)
			})
		}
	}
})

router.beforeEach((to, from, next) => {
	let skipAuth = to.matched.some(record => record.meta.skipAuth)
	firebase.auth().onAuthStateChanged(function (user) {
		if (user && !store.state.login) {
			firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
				store.commit("login", token)
			})
		} else if (!user && store.state.login) {
			store.commit("logout")
		}
		if (!skipAuth) {
			if (!user) {
				if (to.name !== "Logout") {
					localStorage.setItem("redirect", to.name.toLowerCase())
				}
				next({
					path: '/login'
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
	})
})

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')

