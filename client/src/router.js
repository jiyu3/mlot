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
			path: '/login',
			name: 'Login',
			component: () => import(/* webpackChunkName: "about" */ './components/Login/index.vue'),
			meta: { skipAuth: true }
		},
		{
			path: '/logout',
			name: 'Logout',
			component: () => import(/* webpackChunkName: "about" */ './components/Logout/index.vue'),
		},
		{
			path: '/edit',
			name: 'Edit',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Edit/index.vue')
		},
		{
			path: '/lot',
			name: 'Lot',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Lot/index.vue')
		},
		{
			path: '/my',
			name: 'My',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/My/index.vue')
		},
		{
			path: '/result',
			name: 'Result',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Result/index.vue')
		}
	]
})
