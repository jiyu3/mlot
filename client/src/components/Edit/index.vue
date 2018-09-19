<template src="./template.html"></template>
<style src="./style.css"></style>

<script>


export default {
	data() {
		return {
			email: null,
			bitcoin_addr: null
		}
	},
	methods: {
		edit() {
			this.$parent.rpc("user", "edit",
				{ email: this.email, bitcoin_addr: this.bitcoin_addr, token: this.$store.state.token }
			).then(r => {
				let toast = this.$toasted.show("Updated!", {
					theme: "bubble",
					position: "top-center",
					duration : 1500
				});
			}).catch(e => {
				let toast = this.$toasted.show("Failed", {
					theme: "outline",
					position: "top-center",
					duration : 1500
				});
			})
		}
	},
	mounted() {
		this.$parent.rpc("user", "get", { token: this.$store.state.token }).then(r => {
			this.email = r.data.result.email
			this.bitcoin_addr = r.data.result.bitcoin_addr
		})
	}
}
</script>
