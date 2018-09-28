<template>
	<div id="app">
		<header>
			<div>
				<router-link class="logo" to="/"><img :src="logo"></router-link>
				<router-link class="btn" to="/lot">{{ $t("header.buy") }}</router-link>
				<router-link class="btn" to="/result">{{ $t("header.result") }}</router-link>
			</div>
		</header>
		<router-view id="main" />
		<div ref="btn-notify" id="btn-notify" class="onesignal-customlink-container"></div>
		<footer>
			<div class="sns">
				<a :href="twitter_link" target="_blank" title="Share on Twitter">
					<img :src="twitter" class="twitter" alt="twitter">
				</a>
				<a :href="facebook_link" target="_blank" title="Share on Facebook">
					<img :src="facebook" class="facebook" alt="facebook">
				</a>
			</div>
			<div class="to_top" >
				<router-link class="btn" v-show="$route.path != '/'" to="/">Back to Top</router-link>
			</div>
			<div id="locale">
				<a href="javascript:void(0)" @click="locale = 'zh-tw'">繁體中文</a>
				<a href="javascript:void(0)" @click="locale = 'zh-cn'">简体中文</a>
				<a href="javascript:void(0)" @click="locale = 'ja'">日本語</a>
				<a href="javascript:void(0)" @click="locale = 'en'">English</a>
			</div>
			<div id="contact">
				<a href="https://twitter.com/mylotgreen" target="_blank">Contact</a>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		let locale = localStorage.getItem("locale") ? localStorage.getItem("locale") : null
		if(!locale) {
			let language = (window.navigator.languages && window.navigator.languages[0]) ||
				window.navigator.language ||
				window.navigator.userLanguage ||
				window.navigator.browserLanguage;
			if(language.startsWith("en")) {
				locale = "en"
			} else if(language.startsWith("ja")) {
				locale = "ja"
			} else if(language.startsWith("zh-cn")) {
				locale = "zh-cn"
			} else {
				locale = "zh-tw"
			}
		}
		this.$i18n.locale = locale

		return {
			locale: locale,
			logo: require("./images/logo.png"),
			twitter: require("./images/twitter.png"),
			facebook: require("./images/facebook.png"),
			twitter_link: null,
			facebook_link: null
		}
	},
	watch: {
		locale(v) {
			this.$i18n.locale = v
			localStorage.setItem("locale", v)
		}
	},
	methods: {
		getLink(type) {
			let description = this.$i18n.messages[this.locale].sales
			let url = location.origin

			if(type === "twitter") {
				return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(description + "\n" + url + "\n" + " #glot #bitcoin #ビットコイン #仮想通貨 #比特幣 #虛擬貨幣")
			} else if (type === "facebook") {
				return "https://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + encodeURIComponent(description)
			} else {
				return false
			}
		},
	},
	mounted() {
		this.twitter_link = this.getLink("twitter")
		this.facebook_link = this.getLink("facebook")
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

#main a:not(.btn) {
	background-color: white;
	color: green;
	font-weight: bold !important;
}

html a:visited {
	color: darkgreen;
}

#locale {
	margin-bottom: 20px;
}

footer a, footer a:hover {
	color: green;
	font-weight: bold !important;
}

footer a:not(:first-child) {
	margin-left: 5px;
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

header > div {
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

/*
まだアクセスされたことがないリンク： green
ホバーしたとき: green
アクティブなとき: green
すでに訪問したリンク: darkgreen
*/
header a {
	color:green;
}

header a:hover {
	color: green;
}

header a:active {
	color: green;
}

header a:visited {
	color: darkgreen;
}

header .btn {
	margin-left: 2%;
}

footer {
	margin-top: 50px;
	border-top: 1px solid darkgreen;
}

h3 {
	margin-bottom: 20px;
}

.twitter {
	width: 10%;
	margin-right: 10px;
}

.facebook {
	width: 10%;
	margin-left: 10px;
}

.sns {
	margin-top: 20px;
}

.to_top {
	margin-top: 20px;
	margin-bottom: 20px;
}

.to_top .btn {
	background-color: white;
	border: 1px solid green;
}

#contact {
	font-size: 14px;
	margin-bottom: 20px;
}
</style>
