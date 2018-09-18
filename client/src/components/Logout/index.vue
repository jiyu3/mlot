<template src="./template.html"></template>

<script>
import firebase from 'firebase'

export default {
	created() {
		let self = this

		this.$parent.rpc("user", "logout", this.$store.getters.auth).then(r => {
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
