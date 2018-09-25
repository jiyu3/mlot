import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: null,
		config: require("./config.js")
	},
	mutations: {
	},
	getters: {
		db_url(state) {
			return state.config[process.env.NODE_ENV].db.base_url
		}
	},
	actions: {
	}
})
