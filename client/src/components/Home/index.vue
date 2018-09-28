<template src="./template.html"></template>
<style src="./style.css"></style>

<script>
export default {
	data() {
		return {
			subscription: null,
			authType: 'vapid',
			serverKey: null
		}
	},
	methods: {
		askForNotification() {
			if('permissions' in navigator) {
				navigator.permissions.query({
					name: 'push',
					userVisibleOnly: true
				}).then(this.checkPushPermission)
			} else if(Notification.permission !== 'denied') {
				navigator.serviceWorker.ready.then(this.requestPushSubscription)
			}
		},
		checkPushPermission(evt) {
			let state = evt.state || evt.status
			if(state !== 'denied') {
				navigator.serviceWorker.ready.then(this.requestPushSubscription)
			}
		},
		requestPushSubscription(registration) {
			let opt = {
				userVisible: true, // for Chrome 42-44
				userVisibleOnly: true
			}
			if(this.authType === 'vapid') {
				opt.applicationServerKey = this.serverKey
			}
			return registration.pushManager.subscribe(opt).then(this.getSubscription, this.errorSubscription)
		},
		getSubscription(sub) {
			if(sub) {
				this.enablePushRequest(sub)
			}
			else {
				this.disablePushRequest()
			}
		},
		errorSubscription(e) {
		},
		enablePushRequest(sub) {
			this.subscription = sub;
			if('getKey' in this.subscription) {
				try {
				} catch(e) {
				}
			}
		},
		disablePushRequest() {
		},
		encodeBase64URL(buffer) {
		  return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
		},
		requestPushNotification() {
			if(this.subscription) {
				let arg = {
					endpoint: this.subscription.endpoint,
				}
				if('getKey' in this.subscription) {
					arg.key = this.encodeBase64URL(this.subscription.getKey('p256dh'))
					try {
						arg.auth = this.encodeBase64URL(this.subscription.getKey('auth'))
						const useAesgcm = navigator.userAgent.match(/Firefox\/(\d+)/) ? ((parseInt(RegExp.$1) >= 46) ? 1 : 0) :
							((navigator.userAgent.match(/Chrome\/(\d+)/) ? ((parseInt(RegExp.$1) >= 50) ? 1 : 0) : 0))
						const encodings = PushManager.supportedContentEncodings
						const idx = encodings instanceof Array ? encodings.indexOf('aes128gcm') : -1
						arg.contentEncoding = idx >= 0 ? 'aes128gcm' : (useAesgcm ? 'aesgcm' : 'aesgcm128')
					} catch (e) {
					}
				}
				if(this.authType === 'vapid') {
					arg.jwt = {
						aud: new URL(this.subscription.endpoint).origin,
						sub: location.href
					};
					// 0: draft-ietf-webpush-vapid-01, 1: RFC 8292
					arg.vapidVersion = (arg.contentEncoding === 'aes128gcm') ? 1 : 0
					// Workaround for RFC 8292 support on FCM; see https://github.com/web-push-libs/web-push/issues/278#issuecomment-356783840
					if(arg.vapidVersion === 1)
						arg.endpoint = arg.endpoint.replace('fcm/send', 'wp')
				}
				fetch('./push', {
					method: 'POST',
					body: JSON.stringify(arg),
					headers: { 'Content-Type': 'application/json' }
				}).then(resp => {
					return resp.json()
				}).then(json => {
					if('error' in json) {
					}
					else {
					}
				}, () => {
				});
			}
		}
	},
	mounted() {
	}
}
</script>
