<template>
	<div id="app">
		<header>
			<router-link class="logo" to="/"><img :src="logo"></router-link>
			<router-link class="btn" to="/lot">Buy Lot</router-link>
			<router-link class="btn" to="/result">See Result</router-link>
		</header>
		<router-view id="main" />
		<div ref="btn-notify" id="btn-notify" class="onesignal-customlink-container"></div>
		<footer>
			<router-link class="btn back" to="/lot">Top</router-link>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			logo: require("./images/logo.png")
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style>
html, #app, img, .logo, header {
	background-color: #e1fae1 !important;
	font-size: 18px;
}

.btn-success {
	color: white !important;
}

.row {
	margin-top: 20px;
}

.row:last-child {
	margin-bottom: 20px;
}

.back {
	margin-bottom: 20px;
	border: 1px solid green !important;
}

.logo img {
	height: 40px;
}

#btn-notify {
	display: none;
}

html a {
	background: white;
	color: green;
	font-weight: bold !important;
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
	z-index: 9999;
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

h3 {
	margin-bottom: 20px;
}
</style>
