var express = require('express');
var router = express.Router();

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
	let query = `INSERT INTO user(firebase_uid, firebase_token) VALUES('${p.hashed_uid}', '${p.hashed_token}')`
	let db = require('../lib/db.js').init()

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
	let query = `SELECT count(*) FROM user WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = '${p.hashed_uid}'`
	let db = require('../lib/db.js').init()

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

	db.end()
});

/**
 * Delete login user information from glot database server.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * usage: POST http://lot.green/logout/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
router.post('/logout', function (req, res, next) {
	let p = req.body.params
	let query = `DELETE FROM user WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = '${p.hashed_uid}'`
	let db = require('../lib/db.js').init()

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		if (error) {
			res.status(500)
			r.result = { "error": error.code, "query": query  }
		} else if (results.affectedRows == 0) {
			res.status(403)
			r.result = "failure"
		} else {
			res.status(200)
			r.result = "success"
		}

		res.send(JSON.stringify(r))
	})

	db.end()
});

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
	let query = `UPDATE user SET email = '${p.email}', bitcoin_addr = '${p.bitcoin_addr}' WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = '${p.hashed_uid}'`
	let db = require('../lib/db.js').init()

	// db.query("SELECT * from user", function (e, r, f) {
	// 	console.log(r)
	// 	res.send(r)
	// })

	// db.end()
	// return true

	console.log("in user/edit")

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		console.log("error", error)

		if (error) {
			res.status(500)
			r.result = { "error": error.code, "query": query }
		} else if (results.affectedRows == 0) {
			res.status(403)
			r.result = "failure"
		} else {
			res.status(200)
			r.result = "success"
		}

		res.send(JSON.stringify(r))
	})

	db.end()
})

module.exports = router;
