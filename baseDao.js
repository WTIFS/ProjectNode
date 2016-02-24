var mysql = require('mysql');
var BaseDao = function(){
	this.pool;
	this.init();
};
BaseDao.prototype.init = function(){
	this.createPool();
};
BaseDao.prototype.createPool = function(){
	this.pool = mysql.createPool({  
	    host: '127.0.0.1',  
        //host: '192.168.5.31',
	    user: 'root',  
	    password: 'root',  
	    database: 'playground',  
	    port: 3306  
	});
    
};


BaseDao.prototype.query = function(sql, sqlParams, callback, conn){
    if (!conn) {
        this.pool.getConnection(function (err, conn) {
            if (err) {
                callback(err, null, null);
            } else {
                conn.query(sql, sqlParams, function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        callback(err, null);
                    } else {
                        console.log(sql);
                        callback(err, rows || [], fields);
                    }
                    //释放连接
                    conn.release();
                });
            }
        });
    }//End of if (!conn)
    else{
        conn.query(sql, sqlParams, function (err, rows, fields) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log(sql);
                callback(err, rows, fields);
            }
        });
    }
};

BaseDao.prototype.queryWithConn = function(sql, sqlParams, conn, callback){
    this.query(sql, sqlParams, callback, conn);
};

BaseDao.prototype.queryList = function(sql, sqlParams, page, callback){
    var size = page ? (page.size || 20) : 20;
    var num = page ? (page.num || 1) : 1;
    var startIndex = size*(num-1);
    sql += " LIMIT "+ startIndex + "," + size;
    this.query(sql, sqlParams, callback);
};

BaseDao.prototype.prepareTransaction = function(callback2, done){
    this.pool.getConnection(function(err, conn) {
        if (err) {
            callback2(err);
            return;
        }
        conn.beginTransaction(function (err) {
            if (err) {
                conn.release();
                callback2(err);
            }
            else {
                done(null, conn);
            }
        });
    });
};

module.exports = new BaseDao();