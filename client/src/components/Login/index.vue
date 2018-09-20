<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
import firebase from 'firebase'
let axios = require("axios")

export default {
	data() {
		return {
			email: "m@jiyu.lol"
		}
	},
	methods: {
		sendEmailLink() {
			if(!this.email) {
				return false
			}

			firebase.auth().sendSignInLinkToEmail(this.email, this.$store.getters.actionCodeSettings).then(() => {
				alert("email successfully sent!")
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				window.localStorage.setItem('emailForSignIn', this.email)
			}).catch(function(error) {
				// Some error occurred, you can inspect the code: error.code
			})
		},
		login(type) {
			let provider = new firebase.auth[`${type}AuthProvider`]();
			let self = this
			let redirect_to = this.$route.query.redirect ? this.$route.query.redirect : this.$store.state.redirect_default
			firebase.auth().signInWithPopup(provider).then(
				result => {
					// TODO: https化
					firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(token => {
						this.rpc("user", "login", { "token": token } ).catch(e => {
							this.failed()
						});
					}).catch(e => {
						this.failed()
					})
					this.$router.push(redirect_to)
				},
				error => {
					this.failed()
				}
			)
		},
		failed() {
			firebase.auth().signOut().catch(e => {
				firebase.auth().signOut().catch(e => {
					firebase.auth().signOut().catch(e => {
						alert("ログインに失敗しました。 ネットワーク接続を確認してください。") // TODO 多言語化
					})
				})
			})
			alert("ログインに失敗しました。もう一度やり直してください") // TODO 多言語化
			self.$router.push("/")
		}
	},
	mounted() {
		// Confirm the link is a sign-in with email link.
		if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
		// Additional state parameters can also be passed via URL.
		// This can be used to continue the user's intended action before triggering
		// the sign-in operation.
		// Get the email if available. This should be available if the user completes
		// the flow on the same device where they started it.
		var email = window.localStorage.getItem('emailForSignIn');
		if (!email) {
			// User opened the link on a different device. To prevent session fixation
			// attacks, ask the user to provide the associated email again. For example:
			email = window.prompt('Please provide your email for confirmation');
		}
		// The client SDK will parse the code from the link for you.
		firebase.auth().signInWithEmailLink(email, window.location.href)
			.then(function(result) {
			// Clear email from storage.
			window.localStorage.removeItem('emailForSignIn');
			// You can access the new user via result.user
			// Additional user info profile not available via:
			// result.additionalUserInfo.profile == null
			// You can check if the user is new or existing:
			// result.additionalUserInfo.isNewUser
			})
			.catch(function(error) {
			// Some error occurred, you can inspect the code: error.code
			// Common errors could be invalid email and invalid or expired OTPs.
			});
		}
	}
}
</script>
