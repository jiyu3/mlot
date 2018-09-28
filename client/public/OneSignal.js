let appId = "1f995565-c7da-459d-89d5-15a5c88d3f56"
if (!location.host.includes("localhost")) {
	appId = "5868e498-ce58-487d-baec-8c3a1238b88e"
}

let OneSignal = window.OneSignal || [];

OneSignal.push(function () {
	OneSignal.init({
		appId: appId,
		autoRegister: false,
		notifyButton: {
			enable: true,
		},
	})
})
