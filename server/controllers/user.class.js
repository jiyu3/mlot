module.exports = class USER {
	constructor() {
		let db = require('../lib/db.class')
		this.DB = new db()

		this.ADMIN = require('firebase-admin');
		var serviceAccount = require('../serviceAccountKey.json');
		this.ADMIN.initializeApp({
			credential: this.ADMIN.credential.cert(serviceAccount),
			databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
		});

		let util = require("../lib/util.class")
		this.UTIL = new util()
	}

	/**
	 * Validate user connection with comparing client token and database token.
	 * @param {string} [token] - client(firebase) token
	 * @return {Promise} If validation succeed, return resolve, otherwise return reject
	 */
	validate(token) {
		return new Promise((resolve, reject) => {
			this.ADMIN.auth().verifyIdToken(token).then(decodedToken => {
				let hashed_uid = this.UTIL.doubleHash(decodedToken.uid)
				this.findByUid(hashed_uid).then(r => {
					resolve({ error: null, hashed_uid: hashed_uid })
				}).catch(e => {
					reject({ error: "Coundn't find user", hashed_uid: hashed_uid })
				})
			}).catch(e => {
				reject({ "error": e, hashed_uid: null })
			})
		})
	}

	/**
	 * Find user by hashed uid.
	 * @param hashed_uid string
	 * @return {Promise} If user get found, return resolve, otherwise return reject
	 */
	findByUid(hashed_uid) {
		return new Promise((resolve, reject) => {
			let where = `hashed_uid = '${hashed_uid}'`

			this.DB.select("user", "count(*)", where).then(r => {
				if (r[0]['count(*)'] == 0) {
					reject({ error: "Coundn't find user" })
				} else {
					resolve({ error: null, result: r })
				}
			}).catch(e => {
				reject({ error: e.code })
			})
		})
	}
}
