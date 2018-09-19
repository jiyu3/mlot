let express = require('express');
let router = express.Router();

let res_rpc = {
	jsonrpc: "2.0",
	result: null
}

let util = require("../lib/util.class")
const UTIL = new util()

let db = require("../lib/db.class")
const DB = new db()

let user = require("../controllers/user.class")
USER = new user()

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

/**
 * Save login user information into glot database server.
 * hashed_uid	string(64)
 * @param {string} [token] - firebase uid token
 * usage: POST http://lot.green/login/ { "jsonrpc": "2.0", "method": "login", "params": { "token": "somestring" } }
 */
router.post('/login', async function (req, res, next) {
	let p = req.body.params

	USER.validate(p.token).then(r => {
		res.status(200)
		res_rpc.result = { "error": null }
		res.send(JSON.stringify(res_rpc))
	}).catch(e => {
		if (e.hashed_uid != null) {
			DB.insert("user", { hashed_uid: e.hashed_uid }).then(r => {
				res.status(200)
				res_rpc.result = { "error": null }
				res.send(JSON.stringify(res_rpc))
			}).catch(e => {
				res.status(500)
				res_rpc.result = { "error": error.code }
				res.send(JSON.stringify(res_rpc))
			})
		}
	})
})

/**
 * Validate user connection with comparing client token and database token.
 * @param {string} [token]
 * usage: POST http://lot.green/validate/ { "jsonrpc": "2.0", "method": "login", "params": { "token": "somestring" } }
 */
// router.post('/validate', function (req, res, next) {
// 	let p = req.body.params

// 	USER.validate(p.token).then(r => {
// 		if (r.error === null) {
// 			res.status(200)
// 			res_rpc.result = { "error": null }
// 		} else {
// 			res.status(403)
// 			res_rpc.result = { "error": r.error }
// 		}
// 		res.send(JSON.stringify(res_rpc))
// 	}).catch(e => {
// 		res.status(500)
// 		res_rpc.result = { "error": e.code }
// 		res.send(JSON.stringify(res_rpc))
// 	})
// });


router.post('/get', async function (req, res, next) {
	let p = req.body.params

	USER.validate(p.token).then(r => {
		DB.select("user", "email, bitcoin_addr", `hashed_uid = '${r.hashed_uid}'`).then(data => {
			if (data.length == 0) {
				res.status(403)
				res_rpc.result = { "error": "Coundn't find user" }
			} else {
				res.status(200)
				res_rpc.result = {
					"error": null, email: data[0].email, bitcoin_addr: data[0].bitcoin_addr
				}
			}
			res.send(JSON.stringify(res_rpc))
		}).catch(e => {
			res.status(500)
			res_rpc.result = { "error": e.code }
			res.send(JSON.stringify(res_rpc))
		})
	}).catch(e => {
		res.status(500)
		res_rpc.result = { "error": e.code }
		res.send(JSON.stringify(res_rpc))
	})
})

/**
 * Edit user data.
 * hashed_uid	string(64)
 * hashed_token	string(64)
 * email		string(255)
 * bitcoin_addr	string(36)
 * usage: POST http://lot.green/logout/ { "jsonrpc": "2.0", "method": "login", "params": { "hashed_uid": "hashedstring", "hashed_token": "hashedstring" } }
 */
router.post('/edit', async function (req, res, next) {
	let p = req.body.params

	USER.validate(p.token).then(r => {
		DB.update("user", {
				"email": p.email,
				"bitcoin_addr": p.bitcoin_addr
			}, `hashed_uid = '${r.hashed_uid}'`
		).then(data => {
			if (data.affectedRows == 0) {
				res.status(403)
				res_rpc.result = { "error": "Coundn't find user" }
			} else {
				res.status(200)
				res_rpc.result = { "error": null }
			}
			res.send(JSON.stringify(res_rpc))
		}).catch(e => {
		    console.log("e.code", e.code)
			res.status(500)
			res_rpc.result = { "error": e.code }
			res.send(JSON.stringify(res_rpc))
		})
	}).catch(e => {
		res.status(500)
		res_rpc.result = { "error": e.code }
		res.send(JSON.stringify(res_rpc))
	})
})

module.exports = router;
