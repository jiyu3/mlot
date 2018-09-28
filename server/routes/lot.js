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

// let lot = require("../controllers/lot.class")
// const LOT = new lot()

router.get('/', function (req, res, next) {
	res.send('Be yourself; everything else is taken.')
})

router.post('/get', async function (req, res, next) {
	DB.select("lot", "*", "finished = 0").then(data => {
		data[0].start = mySqlDatetime(data[0].start)
		data[0].end = mySqlDatetime(data[0].end)
		console.log("data[0].start, data[0].end", data[0].start, data[0].end)

		res_rpc.result = Object.assign({ error: null }, data[0] )
		res.status(200)
		console.log("JSON.stringify(res_rpc)", JSON.stringify(res_rpc))
		res.json(JSON.stringify(res_rpc))
	}).catch(e => {
		console.log(e)
		res.status(500)
		res.json(JSON.stringify(res_rpc))
	})
})

function twoDigits(d) {
	if (0 <= d && d < 10) return "0" + d.toString();
	if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
	return d.toString();
}

function mySqlDatetime(d) {
	return d.getUTCFullYear() + "-" + twoDigits(1 + d.getUTCMonth()) + "-" + twoDigits(d.getUTCDate()) + " " + twoDigits(d.getUTCHours()) + ":" + twoDigits(d.getUTCMinutes()) + ":" + twoDigits(d.getUTCSeconds())
}

module.exports = router
