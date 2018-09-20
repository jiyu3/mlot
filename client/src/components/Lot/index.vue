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
		this.rpc("lot", "get").then(r => {
			console.log(r)
		}).finally(() => {
		})
	}
}
</script>
