var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

/**
 * Save login user information into glot database server.
 * uid			number
 * hashed_token	string
 * usage: POST http://lot.green/login/ { "jsonrpc": "2.0", "method": "login", "params": { "uid": 12345, "hashed_token": "randomstring" } }
 */
router.post('/login', function (req, res, next) {
	let p = req.body.params
	let query = `INSERT INTO user(firebase_uid, firebase_token) VALUES(${p.uid}, '${p.hashed_token}')`
	let db = require('../lib/db.js').init()

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		if (error) {
			res.status(500)
			r.result = { "error": error.code }
		} else {
			res.status(200)
			r.result = "success"
		}

		res.send(JSON.stringify(r));
	})

	db.end()
});

/**
 * Validate user connection with comparing client token and database session.
 * uid			number
 * hashed_token string
 * usage: POST http://lot.green/login/ { "jsonrpc": "2.0", "method": "login", "params": { "id": 12345, "token": randomstring } }
 */
router.post('/validate', function (req, res, next) {
	let p = req.body.params
	let query = `SELECT count(*) FROM user WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = ${p.uid}`
	let db = require('../lib/db.js').init()

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		if (error) {
			res.status(500)
			r.result = { "error": error.code }
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
 * uid			number
 * hashed_token string
 * usage: POST http://lot.green/login/ { "jsonrpc": "2.0", "method": "login", "params": { "id": 12345, "token": randomstring } }
 */
router.post('/logout', function (req, res, next) {
	let p = req.body.params
	let query = `DELETE FROM user WHERE firebase_token = '${p.hashed_token}' AND firebase_uid = ${p.uid}`
	let db = require('../lib/db.js').init()

	db.query(query, function (error, results, fields) {
		let r = {
			jsonrpc: "2.0",
			result: null
		}

		if (error) {
			res.status(500)
			r.result = { "error": error.code }
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

module.exports = router;
