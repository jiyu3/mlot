let express = require('express');
let router = express.Router();
let DB = require("../lib/db")

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

/**
 * Save login user information into glot database server.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * usage: POST http://lot.green/login/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
router.post('/login', function (req, res, next) {
	let p = req.body.params

	findByUid(p.hashed_uid).then(function () {
	}).catch(e => {
		if (e == "Could not find user") {
			let query = `INSERT INTO user(firebase_uid, firebase_token) VALUES('${p.hashed_uid}', '${p.hashed_token}')`
			let db = require('../lib/db').init()

			db.query(query, function (error, results, fields) {
				let r = {
					jsonrpc: "2.0",
					result: null
				}

				if (error) {
					res.status(500)
					r.result = { "error": error.code, "query": query }
				} else {
					res.status(200)
					r.result = "success"
				}

				res.send(JSON.stringify(r));
			})
		} else {

		}
	})

	db.end()
});

/**
 * Validate user connection with comparing client token and database token.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * usage: POST http://lot.green/validate/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
router.post('/validate', function (req, res, next) {
	let p = req.body.params
	let user = require("../contorllers/user")

	user.validate(p.hashed_uid, p.hashed_token).then(function () {

	}).catch(function () {

	})

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		if (error) {
			res.status(500)
			r.result = { "error": error.code, "query": query  }
		} else if (results[0]['count(*)'] == 0) {
			res.status(403)
			r.result = "failure"
		} else {
			res.status(200)
			r.result = "success"
		}

		res.send(JSON.stringify(r))
	})

});

/**
 * Delete login user information from glot database server.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * usage: POST http://lot.green/logout/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
// router.post('/logout', function (req, res, next) {
// 	let p = req.body.params
// 	let query = `DELETE FROM user WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = '${p.hashed_uid}'`
// 	let db = require('../lib/db').init()

// 	db.query(query, function (error, results, fields) {
// 		let r = {
// 			jsonrpc: "2.0",
// 			result: null
// 		}

// 		if (error) {
// 			res.status(500)
// 			r.result = { "error": error.code, "query": query  }
// 		} else if (results.affectedRows == 0) {
// 			res.status(403)
// 			r.result = "failure"
// 		} else {
// 			res.status(200)
// 			r.result = "success"
// 		}

// 		res.send(JSON.stringify(r))
// 	})

// 	db.end()
// });

/**
 * Edit user data.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * email		string(255)
 * bitcoin_addr	string(36)
 * usage: POST http://lot.green/logout/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
router.post('/edit', function (req, res, next) {
	let p = req.body.params
	let db = new DB()
	let r = {
		jsonrpc: "2.0",
		result: null
	}

	db.update("user", {
		"email": p.email,
		"bitcoin_addr": p.bitcoin_addr
	}, `firebase_token = '${p.hashed_token}' AND firebase_uid = '${p.hashed_uid}'`
	).then(data => {
		if (data.affectedRows == 0) {
			res.status(403)
			r.result = "failure"
		} else {
			res.status(200)
			r.result = "success"
		}
		res.send(JSON.stringify(r))
	}).catch(e => {
		res.status(500)
		r.result = "network error"
		res.send(JSON.stringify(r))
	})

})

module.exports = router;
