import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let hash = require('hash.js')
function doubleHash(v) {
	return hash.sha256().update(hash.sha256().update(v).digest('hex')).digest('hex')
}

export default new Vuex.Store({
	state: {
		login: false,
		redirect_default: "lot",
		user: null,
		config: require("./config.json")
	},
	mutations: {
		login(state, user) {
			state.login = true
			state.user = user
		},
		logout(state) {
			state.login = false
			state.user = null
		},
	},
	getters: {
		db_url(state) {
			return state.config[process.env.NODE_ENV].db.base_url
//			return JSON.parse(JSON.stringify(state.config))[process.env.NODE_ENV].db.base_url
		},
		hashed_uid(state) {
			return doubleHash(state.user.uid)
		},
		hashed_token(state) {
			return doubleHash(state.user.refreshToken)
		}
	},
	actions: {
		// async only
	}
})
