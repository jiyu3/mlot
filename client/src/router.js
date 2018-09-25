import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Home/index.vue'),
			meta: { skipAuth: true }
		},
		{
			path: '/lot',
			name: 'Lot',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Lot/index.vue')
		},
		{
			path: '/result',
			name: 'Result',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Result/index.vue')
		},
		{
			path: '/terms',
			name: 'Terms',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Terms/index.vue')
		}
	]
})
