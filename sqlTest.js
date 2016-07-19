var baseDao = require("./baseDao");
var async = require("async");

var callback = function(err, rows){
    if (err) console.log("------ERROR: " + err);
    else console.log("-------TEST RESULT: " + JSON.stringify(rows, null, 2));
};

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

//并行回滚测试
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
				baseDao.query(sql, [], done, conn);
				//done(Error("shit"));
			},
			func2: function(done){
				var sql = "INSERT INTO errorinfo SET info='2'";
				baseDao.query(sql, [], done, conn);
				//done("shit");
			},
			func3: function(done){
				var sql = "INSERT INTO playground SET district=3asdf";
				baseDao.query(sql, [], done, conn);
			},
			func4: function(done){
				var sql = "INSERT INTO playground SET district=4";
				baseDao.query(sql, [], done, conn);
			},
			func5: function(done){
				var sql = "INSERT INTO playground SET district=5";
				baseDao.query(sql, [], done, conn);
			},
			func6: function(done){
				done(Error("shit2"));
			}
		}, function(err, results){
			if (!err) {conn.commit(function(err){
				if (!err){console.log(JSON.stringify(results, null, 2));}
            })
		}
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

/*var params = [[1],[2]];
var sql = "INSERT INTO playground (district) VALUES ?";
baseDao.query(sql, [params], callback);*/

/*var sql = "INSERT INTO playground SET district=1; INSERT INTO playground SET district=2";
baseDao.query(sql, [], callback);*/

/*var sql = "SELECT * FROM yk_bill_grant WHERE borrower_bank_name ?";
baseDao.query(sql, ["IS NOT NULL"],
    callback);
*/

var sql = "SELECT ?? FROM yk_bill WHERE id=?";
baseDao.query(sql, ["customer_name", 1], callback);