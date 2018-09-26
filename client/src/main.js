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

Vue.config.productionTip = false

Vue.mixin({
	methods: {
		rpc(table, method, params = null, loading_overlay = false) {
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

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')

