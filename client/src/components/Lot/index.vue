<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		let deposit_addr = "2N7kV6frZatpmjJsuoEdVqsmhhEmX6jA7Bi"
		if(process.env.NODE_ENV === "production") {
			deposit_addr = "38LThaF8ohTk2Ji4H2MX5qfxT7QpiSN1oT"
		}
		return {
			lot: null,
			deposit_addr: deposit_addr,
			bitcoin_link: `bitcoin:${deposit_addr}`,
			loaded: false
		}
	},
	watch: {
		"this.$route"() {
			alert("going!")
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
				console.log("ja")
				return `${m}月${date}日(${w[day]}) ${h}時${min}分`
			} else if(lang === "en") {
				return `${w[day]} ${m}/${date} ${h}:${min}`
			}
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

		// if(this.$refs["btn-notify"]) {
		// 	this.$refs["btn-notify"].remove()
		// }
		// let child = document.createElement("div")
		// child.classList.add('onesignal-customlink-container')
		// child.setAttribute("ref", "btn-notify")
		// this.$refs.notify.appendChild(child)
		let child = this.$parent.$refs["btn-notify"]
		this.$refs.notify.appendChild(child)
	}
}
</script>
