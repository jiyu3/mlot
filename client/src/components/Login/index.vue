<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
import firebase from 'firebase'
let axios = require("axios")

export default {
	methods: {
		login(type) {
			let provider = new firebase.auth[`${type}AuthProvider`]();
			let self = this
			let redirect_to = this.$route.query.redirect ? this.$route.query.redirect : this.$store.state.redirect_default
			firebase.auth().signInWithPopup(provider).then(
				result => {
					let db_url = self.$store.getters.db_url
					self.$store.commit("login", result.user)

					let login_url = this.$store.getters.db_url + "user/login"
					this.$parent.rpc("user", "login", this.$store.getters.auth).catch(e => {
						firebase.auth().signOut()
						throw e
					})

					self.$router.push(redirect_to)
				},
				error => {
					// alert(self.i18n.messages[this.locale].login.error) TODO: implement login message
					self.$store.commit("logout")
					alert("ログインに失敗しました。もう一度やり直してください") // TODO 多言語化
					self.$router.push("/")
				}
			)
		},
	}
}
</script>
