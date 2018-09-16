<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
import firebase from 'firebase'

export default {
	methods: {
		login(type) {
			let provider = new firebase.auth[`${type}AuthProvider`]();
			let self = this
			let redirect_to = this.$route.query.redirect ? this.$route.query.redirect : this.$store.state.redirect_default
			firebase.auth().signInWithPopup(provider).then(
				result => {
					self.$store.commit("login")
					self.$router.push(redirect_to)
				},
				error => {
					// alert(self.i18n.messages[this.locale].login.error)
				}
			)
		},
		logout() {
			let self = this
			firebase.auth().signOut().then(() => {
				self.$store.commit("logout")
				self.$router.push("/")
			})
		}
	}
}
</script>
