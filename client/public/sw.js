self.addEventListener("push", event => {
	event.waitUntil(
		self.registration.pushManager.getSubscription()
			.then(subscription => {
				if (subscription) {
					return subscription.endpoint
				}
				throw new Error('User not subscribed')
			})
			.then(res => {
				return self.registration.showNotification('title', {
					body: 'contents'
				})
			})
	)
})
