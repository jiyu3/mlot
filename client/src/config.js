module.exports = {
	development: {
		db: {
			base_url: "http://localhost:9999/"
		},
		actionCodeSettings: {
			url: 'https://localhost:8100/login',
			handleCodeInApp: true,
		}
	},
	production: {
		db: {
			base_url: "http://111.111.111.111/"
		},
		actionCodeSettings: {
			url: 'https://lot.green/login',
			handleCodeInApp: true,
		}
	}
}
