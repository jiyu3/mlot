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

/* Firebase Setting */
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
/* Firebase Setting */

/* Push Notification */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./firebase-messaging-sw.js').then(r => {
		console.log('Registration successful, scope is:', r.scope)
	}).catch(e => {
		console.log('Service worker registration failed, error:', e)
	});
}

const messaging = firebase.messaging()
messaging.usePublicVapidKey("BJtOm5o2EwRNcdJjp6wHIvPIvGOnaXhO6992c2lCWMQ4NBSQCk1tUMzZmH1ce_SHTo9bKeh4GA51oeDe83BF8sA")

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function () {
	messaging.getToken().then(function (refreshedToken) {
		console.log('Token refreshed.');
		// Indicate that the new Instance ID token has not yet been sent to the
		// app server.
		setTokenSentToServer(false);
		// Send Instance ID token to app server.
		sendTokenToServer(refreshedToken);
		// ...
	}).catch(function (err) {
		console.log('Unable to retrieve refreshed token ', err);
		showToken('Unable to retrieve refreshed token ', err);
	});
});
/* Push Notification */

Vue.config.productionTip = false

Vue.mixin({
	methods: {
		async askForNotification() {
			try {
				await messaging.requestPermission();
				const token = await messaging.getToken();
				if (token) {
					// sendTokenToServer(currentToken);
					// updateUIForPushEnabled(currentToken);
					console.log('Notification permission granted.', token);
				} else {
					// Show permission request.
					console.log('No Instance ID token available. Request permission to generate one.');
					// Show permission UI.
					// updateUIForPushPermissionRequired();
					// setTokenSentToServer(false);
				}
			} catch (e) {
				// console.log('An error occurred while retrieving token. ', e);
				// showToken('Error retrieving Instance ID token. ', e);
				// setTokenSentToServer(false);
			}
		},

		rpc(table, method, params, loading_overlay = false) {
			let url = this.$store.getters.db_url + table + "/" + method
			let data = {
				jsonrpc: "2.0",
				method: "login",
				params: params
			}
			let error_count = 0
			let interval = 100

			let loader = null
			if (loading_overlay) {
				loader = this.$loading.show()
			}
			return new Promise((resolve, reject) => {
				let loop = setInterval(() => {
					if (params == null || params.token !== null) {
						clearInterval(loop)

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
						if (++error_count >= (5000 / interval)) {
							clearInterval(loop)
							alert("予期しないエラーが発生しました。ログインし直してください")
							this.$router.push("/logout")
						}
						params.token = this.$store.state.token
					}
				}, interval)
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

