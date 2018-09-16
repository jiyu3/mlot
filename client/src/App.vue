<template>
	<div id="app">
		<header>
			<router-link class="btn" to="/">Home</router-link>
			<router-link class="btn" to="/edit">Edit</router-link>
			<router-link class="btn" to="/lot">Lot</router-link>
			<router-link class="btn" to="/my">My</router-link>
			<router-link class="btn" to="/result">Result</router-link>
		</header>
		<router-view/>
		<footer>
		</footer>
	</div>
</template>

<style>
html, div {
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
