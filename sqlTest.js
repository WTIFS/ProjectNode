var baseDao = require("./baseDao");
var async = require("async");
/*var sql = "SELECT * FROM yk_channel";
baseDao.query(sql, [], function(err, rows){
	console.log(rows);
});*/

/*var params = {bill_is_draft:6};
var sql = "UPDATE yk_bill SET ? WHERE id=?";
baseDao.query(sql, [params, 43], function(err, rows){
	console.log(rows);
});*/

/*var params = {mortgage_rc_result:3};
var sql = "UPDATE yk_bill_mortgage SET ? WHERE id=?;";
baseDao.query(sql, [params, 99], function(err, rows){
	console.log(rows);
});*/

/*baseDao.pool.getConnection(function(err, conn) {
	if (err) {
		console.log(err);
		return;
	}
	conn.beginTransaction(function (err) {
		if (err) {
			console.log(err);
			conn.release();
			return;
		}
		async.auto({
			func1: function(done){
				var sql = "INSERT INTO playground SET district=1";
				baseDao.queryWithConn(sql, [], function(err, rows){
					done(err, rows);
				}, conn);
			},
			func2: function(done){
				var sql = "INSERT INTO playground SET district=2";
				baseDao.queryWithConn(sql, [], function(err, rows){
					done(err, rows);
				}, conn);
			},
			func3: function(done){
				var sql = "INSERT INTO playground SET district=3";
				baseDao.queryWithConn(sql, [], function(err, rows){
					done(err, rows);
				}, conn);
			},
			func4: function(done){
				var sql = "INSERT INTO playground SET district=4";
				baseDao.queryWithConn(sql, [], function(err, rows){
					done(err, rows);
				}, conn);
			},
			func5: function(done){
				var sql = "INSERT INTO playground SET district=15";
				baseDao.queryWithConn(sql, [], function(err, rows){
					done(err, rows);
				}, conn);
			}
		}, function(err, results){
			if (!err) conn.commit(function(err){
				if (!err){console.log(JSON.stringify(results, null, 2));}
            });
			else {
				conn.rollback();
                console.log("ROLL BACK. " + err);
			}
		});
		conn.release();
	});
});*/

//Failed
/*var params = [{district: 1}], [{district: 2}]};
var sql = "INSERT INTO playground SET ?";
baseDao.query(sql, params, function(err, rows){
	if (!err)
		console.log(JSON.stringify(rows));
	else console.log(err);
})*/