<template>
	<div id="app">
		<header>
			<router-link class="btn" to="/" v-if="!$store.state.login">Home</router-link>
			<router-link class="btn" to="/edit" v-if="$store.state.login">Edit</router-link>
			<router-link class="btn" to="/lot" v-if="$store.state.login">Lot</router-link>
			<router-link class="btn" to="/my" v-if="$store.state.login">My</router-link>
			<router-link class="btn" to="/result" v-if="$store.state.login">Result</router-link>
		</header>
		<router-view/>
		<footer>
		</footer>
	</div>
</template>

<script>
export default {
	methods: {
		rpc(table, method, params) {
			let url = this.$store.getters.db_url + table + "/" + method
			let data = {
				jsonrpc: "2.0",
				method: "login",
				params: params
			}
			console.log("url, data", url, data)
			return new Promise((resolve, reject) => {
				this.axios.post(
					url, data
				).then(r => {
					console.log(r) // TODO: delete console.log
					resolve(r)
				}).catch(e => {
					console.log(data, e) // TODO: delete console.log
					reject(e)
				})
			})
		}
	},
	mounted() {
	}
}
</script>

<style>
html, #app {
	background: #e1fae1;
	font-size: 18px;
}

html a {
	color: green;
}

html a:visited {
	color: darkgreen;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

header {
	width: 100%;
	position: fixed;
	top: 0;
	border-bottom: 1px solid darkgreen;
	display: flex;
	justify-content: center;
	align-items: center;
}


header a:hover, header .router-link-exact-active {
	background-color: white;
}

header a:not(:last-child) {
	margin-right: 10px;
}

footer a {
	background-color: white;
}
</style>
