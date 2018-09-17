<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		return {}
	},
	methods: {
	},
	mounted() {
		this.$parent.rpc("user", "validate", {
			hashed_uid: this.$store.getters.hashed_uid,
			hashed_token: this.$store.getters.hashed_token
		}).then(r => {
			console.log("get user data from db")
		}).catch(e => {
			console.log("display err screen")
		})
	}
}
</script>
