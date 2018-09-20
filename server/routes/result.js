let express = require('express');
let router = express.Router();

let res_rpc = {
	jsonrpc: "2.0",
	result: null
}

// let util = require("../lib/util.class")
// const UTIL = new util()

let db = require("../lib/db.class")
const DB = new db()

// let my = require("../controllers/result.class")
// const RESULT = new result()

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

router.post('/get', async function (req, res, next) {
	DB.select("result", "*", "finished = 0").then(data => {
		res_rpc.result = Object.assign({ error: null }, data[0])
		res.status(200)
		res.json(JSON.stringify(res_rpc))
	}).catch(e => {
		res.status(500)
		res.json(JSON.stringify(res_rpc))
	})
})

module.exports = router
