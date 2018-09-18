/**
 * Validate user connection with comparing client token and database token.
 * @param hashed_uid	string
 * @param hashed_token	string
 * @return Promise object.
 */
exports.validate = (hashed_uid, hashed_token) => {
	let where = `firebase_token = '${hashed_token}' AND firebase_uid = '${hashed_uid}'`
	let db = require('../lib/db.js').init()

	return new Promise((resolve, reject) => {
		db.select("user", "count(*)", where, function (error, results, fields) {
			if (error) {
				reject({ "error": error.code, "query": query })
			} else if (results[0]['count(*)'] == 0) {
				reject({ "error": "Coundn't find user", "query": query })
			} else {
				resolve({ "error": null, "query": query })
			}
		})
	})
}

/**
 * Find user by hashed uid.
 * @param hashed_uid	string
 * @return Promise object.
 */
exports.findByUid = (hashed_uid) => {
	let where = `firebase_uid = '${hashed_uid}'`
	let db = require('../lib/db.js').init()

	return new Promise((resolve, reject) => {
		db.select("user", "count(*)", where).then(r => {
			if (r[0]['count(*)'] == 0) {
				reject({ "error": "Coundn't find user", "query": query })
			} else {
				resolve({ "error": null, "query": query, result: r })
			}
		}).catch(e => {
			reject({ "error": error.code, "query": query })
		})
	})
}
