<template src="./template.html"></template>
<style src="./style.css"></style>

<script>


export default {
	data() {
		return {
			email: null,
			bitcoin_addr: null,
			unko: true,
			tinko: true
		}
	},
	methods: {
		toggleUnko() {
			this.unko = !this.unko
		},
		toggleTinko() {
			this.tinko = !this.tinko
		},
		edit() {
			this.rpc("user", "edit",
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
		let loader = this.$loading.show()

		this.rpc("user", "get", { token: this.$store.state.token }).then(r => {
			if(r.email && r.bitcoin_addr) {

			}
			this.email = r.email
			this.bitcoin_addr = r.bitcoin_addr
		}).finally(() => {
			loader.hide()
		})
	}
}
</script>
