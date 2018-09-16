var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var mysql = require('mysql');
	var db = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'pass',
		database: 'glot'
	});

	db.connect();

	db.query('SELECT * from lot', function (error, results, fields) {
		if (error) {
			res.status(err.status || 500);
			res.send('error');
		}
		console.log('The solution is: ', results[0].solution);
	});

	db.end();

	res.send(Math.pow(req.query.num, 10).toString());

//	res.render('index', { title: 'Express' });
});

module.exports = router;
