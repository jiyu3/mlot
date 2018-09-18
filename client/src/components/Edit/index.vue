<template src="./template.html"></template>
<style src="./style.css"></style>

<script>


export default {
	data() {
		return {
			email: "m@jiyu.lol",
			bitcoin_addr: "2N7jkQaWhCM6m1E6myB8wCQtbw4mjkwJFQf"
		}
	},
	methods: {
		edit() {
			this.$parent.rpc("user", "edit",
				Object.assign({ email: this.email, bitcoin_addr: this.bitcoin_addr }, this.$store.getters.auth)
			).then(r => {
				console.log("email and bitcoin_addr saved.")
				let toast = this.$toasted.show("Updated!", {
					theme: "bubble",
					position: "top-center",
					duration : 2000
				});
			}).catch(e => {
				console.log("error to save email and bitcoin_addr.")
			})
		}
	},
	mounted() {
		this.$parent.rpc("user", "validate", this.$store.getters.auth).then(r => {
			console.log("get user data from db")
		}).catch(e => {
			console.log("display err screen")
		})
	}
}
</script>
