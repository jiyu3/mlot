<template src="./template.html"></template>

<script>
import firebase from 'firebase'

export default {
	created() {
		let self = this
		firebase.auth().signOut().then(() => {
			self.$store.commit("logout")
			self.$router.push("/")
		})
	}
}
</script>
