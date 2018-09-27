<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		return {
			lot: null,
			deposit_addr: this.$store.getters.deposit_addr,
			bitcoin_link: `bitcoin:${this.$store.getters.deposit_addr}`,
			balance_link: this.$store.getters.balance_link,
			copy: "Copy address to clipboard",
			loaded: false
		}
	},
	methods: {
		makeHumanRedableTime(datetime, lang = "zh-tw") {
			let d = new Date(datetime)
			let m = d.getMonth()
			let date = d.getDate()
			let h = d.getHours()
			let min = d.getMinutes()

			let day = d.getDay()
			let w = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

			if(lang === "zh-tw") {
			} else if(lang === "zh-cn") {
			} else if(lang === "ja") {
				return `${m}月${date}日(${w[day]}) ${h}時${min}分`
			} else if(lang === "en") {
				return `${w[day]} ${m}/${date} ${h}:${min}`
			}
		},
		onCopy() {
			let toast = this.$toasted.show("Copied!", {
				theme: "bubble",
				position: "bottom-center",
				duration : 1500
			})
			this.copy = "Copied!"
		},
		onCopyError() {
			let toast = this.$toasted.show("Failed", {
				theme: "outline",
				position: "bottom-center",
				duration : 1500
			})
		}
	},
	mounted() {
		this.rpc("lot", "get", null, true).then(r => {
			if(r.error === null) {
				this.lot = r
				this.lot.start = this.makeHumanRedableTime(r.start, "ja")
				this.lot.end = this.makeHumanRedableTime(r.end, "ja")
			}
		}).finally(r => {
			this.loaded = true
		})

		let child = this.$parent.$refs["btn-notify"]
		this.$refs.notify.appendChild(child)
	}
}
</script>
