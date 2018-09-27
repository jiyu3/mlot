module.exports = {
	development: {
		db: {
			base_url: "http://localhost:9999/"
		},
		actionCodeSettings: {
			url: 'https://localhost:8100/login',
			handleCodeInApp: true,
		},
		deposit_addr: "2N7kV6frZatpmjJsuoEdVqsmhhEmX6jA7Bi"
	},
	production: {
		db: {
			base_url: "http://111.111.111.111/"
		},
		actionCodeSettings: {
			url: 'https://lot.green/login',
			handleCodeInApp: true,
		},
		deposit_addr: "38LThaF8ohTk2Ji4H2MX5qfxT7QpiSN1oT"
	}
}
