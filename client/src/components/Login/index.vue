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
					// TODO: https化
					firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
						this.rpc("user", "login", { "token": token } ).catch(e => {
							this.failed()
						});
					}).catch(e => {
						this.failed()
					})
					this.$router.push(redirect_to)
				},
				error => {
					this.failed()
				}
			)
		},
		failed() {
			firebase.auth().signOut().catch(e => {
				firebase.auth().signOut().catch(e => {
					firebase.auth().signOut().catch(e => {
						alert("ログインに失敗しました。 ネットワーク接続を確認してください。") // TODO 多言語化
					})
				})
			})
			alert("ログインに失敗しました。もう一度やり直してください") // TODO 多言語化
			self.$router.push("/")
		}
	}
}
</script>
