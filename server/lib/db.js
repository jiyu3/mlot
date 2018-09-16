exports.init = function () {
	let mysql = require('mysql')
	let conf = require('../config.json')
	let db = mysql.createConnection(conf.db)
	db.connect()
	return db
}
