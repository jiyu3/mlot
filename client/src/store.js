import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let hash = require('hash.js')

export default new Vuex.Store({
	state: {
		login: false,
		redirect_default: "lot",
		user: null,
		uid: null,
		hashed_token: null
	},
	mutations: {
		login(state, user) {
			state.login = true
			state.user = user
			state.uid = user.uid
			state.hashed_token = hash.sha256().update(hash.sha256().update(user.refreshToken).digest('hex')).digest('hex')
		},
		logout(state) {
			state.login = false
			state.user = state.uid = state.token = null
		},
	},
	actions: {
		// async only
	}
})
