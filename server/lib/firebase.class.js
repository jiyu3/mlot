module.exports = class UTIL {
	constructor() {
	}

	admin() {
		let admin = require('firebase-admin');
		var serviceAccount = require('../serviceAccountKey.json');
		console.log("admin", admin)
		return admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			// databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
		});
	}
}
