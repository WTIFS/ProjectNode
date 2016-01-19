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
	    host: 'localhost',  
	    user: 'root',  
	    password: 'root',  
	    database: 'yunkong',  
	    port: 3306  
	});
    
};
BaseDao.prototype.query = function(sql,sqlParams,callback){
	var _that = this;
	this.pool.getConnection(function(err,conn){  
        if(err){  
        	_that.logger.error("数据库连接创建失败："+err.message);
            callback(err,null,null);  
        }else{  
            conn.query(sql,sqlParams,function(err, rows, fields){
            	if(err){
            		_that.logger.error("sql语句执行失败："+err.message);
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


module.exports = new BaseDao();