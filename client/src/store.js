import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		login: false,
		redirect_default: "edit",
		token: null,
		config: require("./config.js")
	},
	mutations: {
		login(state, token) {
			state.login = true
			state.token = token
		},
		logout(state) {
			state.login = false
			state.token = null
		},
	},
	getters: {
		db_url(state) {
			return state.config[process.env.NODE_ENV].db.base_url
		},
		actionCodeSettings(state) {
			return state.config[process.env.NODE_ENV].actionCodeSettings
		}
	},
	actions: {
	}
})
