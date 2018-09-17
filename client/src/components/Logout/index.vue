<template src="./template.html"></template>

<script>
import firebase from 'firebase'

export default {
	created() {
		let self = this

		this.$parent.rpc("user", "logout", {
			hashed_uid: this.$store.getters.hashed_uid,
			hashed_token: this.$store.getters.hashed_token
		}).then(r => {
			firebase.auth().signOut().then(() => {
				firebase.auth().revokeRefreshTokens(self.$store.state.uid)
				self.$store.commit("logout")
				self.$router.push("/")
			}).catch(e => {
				throw e
			})
		}).catch(e => {
			alert("ログアウトに失敗しました。もう一度やり直してください。") // TODO 多言語化
			self.$router.push("/edit")
		})
	}
}
</script>
