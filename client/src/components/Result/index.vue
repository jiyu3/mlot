<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		return {
			result: null,
			loaded: false,
			unit: null
		}
	},
	methods: {
	},
	filters: {
		satoshiTomBTC(v) {
			return v / (10**5)
		}
	},
	mounted() {
		this.rpc("result", "get", null, true).then(r => {
			this.result = r
			if(r.code === "BTC") {
				this.unit = "mBTC"
			}
		}).finally(r => {
			this.loaded = true
		})
	}
}
</script>
