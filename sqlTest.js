var baseDao = require("./baseDao");

/*var sql = "SELECT * FROM yk_channel";
baseDao.query(sql, [], function(err, rows){
	console.log(rows);
});*/

/*var params = {bill_is_draft:6};
var sql = "UPDATE yk_bill SET ? WHERE id=?";
baseDao.query(sql, [params, 43], function(err, rows){
	console.log(rows);
});*/

var params = {mortgage_rc_result:3};
var sql = "UPDATE yk_bill_mortgage SET ? WHERE id=?;";
baseDao.query(sql, [params, 99], function(err, rows){
	console.log(rows);
});