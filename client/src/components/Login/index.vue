<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
import firebase from 'firebase'

export default {
	data() {
		return {
			display: false,
			email: "m@jiyu.lol"
		}
	},
	methods: {
		sendEmailLink() {
			let loader = this.$loading.show()

			if(!this.email) {
				loader.hide()
				return false
			}

			firebase.auth().sendSignInLinkToEmail(this.email, this.$store.getters.actionCodeSettings).then(r => {
				alert("email successfully sent!")
				window.localStorage.setItem('emailForSignIn', this.email)
			}).catch(e => {
				alert("failed to send email.")
			}).finally(r => {
				loader.hide()
			})
		},
		login(type) {
			let loader = this.$loading.show()
			let provider = new firebase.auth[`${type}AuthProvider`]();
			let redirect_to = localStorage.getItem("redirect") ? localStorage.getItem("redirect") : this.$store.state.redirect_default

			firebase.auth().signInWithPopup(provider).then(async r => {
				await this.succeed()
				this.$router.push(redirect_to)
				localStorage.removeItem("redirect")
			}).catch(async e => {
				await this.fail()
			}).finally(r => {
				loader.hide()
			})
		},
		succeed() {
			return new Promise((resolve, reject) => {
				firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
					this.rpc("user", "login", { "token": token } ).then(r => {
						resolve(r)
					}).catch(e => {
						throw e
					})
				}).catch(async e => {
					await this.fail()
					reject(e)
				})
			})
		},
		fail() {
			return new Promise(async (resolve, reject) => {
				await firebase.auth().signOut()
				alert("ログインに失敗しました。もう一度やり直してください") // TODO 多言語化
				self.$router.push("/")
				resolve()
			})
		}
	},
	mounted() {
		if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
			let loader = this.$loading.show()

			let email = window.localStorage.getItem('emailForSignIn')
			if (!email) {
				email = window.prompt('Please provide your email for confirmation')
			}
			firebase.auth().signInWithEmailLink(email, window.location.href).then(async r => {
				window.localStorage.removeItem('emailForSignIn')
				await this.succeed()
			}).catch(async e => {
				await this.fail()
			}).finally(r => {
				loader.hide()
			})
		} else {
			this.display = true
		}
	}
}
</script>
