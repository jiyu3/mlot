<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/edit">Edit</router-link>
			<router-link to="/lot">Lot</router-link>
			<router-link to="/lot">My</router-link>
			<router-link to="/lot">Result</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style>
body {
	background: #e1fae1;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#nav {
	width: 100%;
	position: fixed;
	top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

#nav a:not(:last-child) {
	margin-right: 10px;
}

</style>
