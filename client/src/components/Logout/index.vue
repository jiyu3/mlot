<template src="./template.html"></template>

<script>
import firebase from 'firebase'

export default {
	created() {
		firebase.auth().signOut().then(() => {
			this.$router.push("/")
		}).catch(e => {
			alert("ログアウトに失敗しました。もう一度やり直してください。") // TODO 多言語化
			this.$router.push("/edit")
		})
	}
}
</script>
