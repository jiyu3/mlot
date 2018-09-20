module.exports = class USER {
	constructor() {
		let db = require('../lib/db.class')
		this.db = new db()

		let firebase = require('../lib/firebase.class');
		let f = new firebase()
		this.admin = f.admin()

		let util = require("../lib/util.class")
		this.util = new util()
	}

	/**
	 * Validate user connection with comparing client token and database token.
	 * @param {string} [token] - client(firebase) token
	 * @return {Promise} If validation succeed, return resolve, otherwise return reject
	 */
	validate(token) {
		return new Promise((resolve, reject) => {
			this.admin.auth().verifyIdToken(token).then(decodedToken => {
				let hashed_uid = this.util.doubleHash(decodedToken.uid)
				this.findByUid(hashed_uid).then(r => {
					resolve({ error: null, hashed_uid: hashed_uid })
				}).catch(e => {
					console.log("Coundn't find user")
					reject({ error: "Coundn't find user", hashed_uid: hashed_uid })
				})
			}).catch(e => {
				console.log("Coundn't execute verifyIdToken()")
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

			this.db.select("user", "count(*)", where).then(r => {
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
