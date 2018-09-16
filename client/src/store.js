import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		login: false,
		redirect_default: "lot"
	},
	mutations: {
		login(state) {
			state.login = true
		},
		logout(state) {
			state.login = false
		}
	},
	actions: {
	}
})