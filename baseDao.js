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
	    user: 'root',  
	    password: 'root',  
	    database: 'playground',  
	    port: 3306  
	});
    
};
BaseDao.prototype.query = function(sql,sqlParams,callback){
	var _that = this;
	this.pool.getConnection(function(err,conn){  
        if(err){  
            callback(err,null,null);  
        }else{  
            conn.query(sql,sqlParams,function(err, rows, fields){
            	if(err){
            		callback(err,null);
            	}else{
            		callback(err,rows,fields); 
            	}
                //释放连接  
                conn.release();  
            });  
        }  
    });  
};

//带connection的query，用于transaction
BaseDao.prototype.queryWithConn = function(sql, sqlParams, callback, conn){
    if (!conn) this.query(sql, sqlParams, callback);
    else {
        var that = this;
        conn.query(sql, sqlParams, function (err, rows, fields) {
            if (err) {
                callback(err, null);
            } else {
                console.log(sql);
                callback(err, rows, fields);
            }
        });
    }
};

module.exports = new BaseDao();