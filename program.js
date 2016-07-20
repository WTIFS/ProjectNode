
 /* Created by Yuanfei on 2015/12/28.
 */

var http_mod = require('http');
var bl_mod = require('bl');
var fs_mod = require('fs');

var dict = new Array();
var count = 0;

/*console.log("HELLO WORLD");*/

//console.log(process.argv);
/*
var args = process.argv;
var sum = 0;
for (var i=2; i<args.length; i++)
    sum += +args[i];
console.log(sum);*/

// var moment = require("moment");
// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));


// var helloModule = require("./helloModule");
// helloModule.hello();
// helloModule.sum(1, 2);

// function log(argv) {
// 	console.log(argv);
// }

// function hello(argv) {
// 	console.log("hello " + argv + "!");
// }

// function sum(num1, num2, callback) {
// 	var sum = num1 + num2;
// 	callback(sum);
// }

// sum(1, 2, log);
// sum(1, 2, hello);

var fs = require("fs");

var filePath1 = "1.txt";
var filePath2 = "2.txt";

console.time("1");
var buffer1 = fs.readFileSync(filePath1).toString();
console.log(buffer1.substr(0, 10));
console.timeEnd("1\n");

console.time("2");
var buffer2 = fs.readFileSync(filePath2).toString();
console.log(buffer2.substr(0, 10));
console.timeEnd("2\n");

console.time("3");
console.time("4");
console.time("5");
var callback = function(err, content) {
	console.log();
};

fs.readFile(filePath1, 'utf8', function(err, content) {
	console.log(content.substr(0, 10));
	console.timeEnd("3\n");
});
fs.readFile(filePath2, 'utf8', function(err, content) {
	console.log(content.substr(0, 10));
	console.timeEnd("4\n");
});
console.timeEnd("5\n");

// for (var i=1; i<=3; i++) {
// 	console.log("i1: " + i);
// 	fs.readFile(i + ".txt", 'utf-8', function(err, content) {
// 		console.log("i2: " + i);
// 		console.log(content);
// 	});
// }

/*function read(i) {
	console.log("i1: " + i);
	fs.readFile(i + ".txt", 'utf-8', function(err, content) {
		console.log("i2: " + i);
		console.log(content);
	});
}
for (var j=1; j<=3; j++) read(j);*/

//异步for循环 async.forEach
// var async = require("async");
// async.forEach(list, function(item, done) {
//     //操作item
//     done(); //通知for本循环完成
// }, function(err){
//     //for之后执行的函数
// });

/*var fs = require('fs');
var file_path = process.argv[2];
var buffer = fs.readFileSync(file_path);
var buffer_str = buffer.toString();
//or: buffer_str = fs.readFileSync(file_path, 'utf8');
var count = buffer_str.split('\n').length;
console.log(count-1);*/

/*var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, content){
	var count = content.split('\n').length-1;
	console.log(count);
});*/

/*var fs = require('fs');
var path = require('path');
var suffix = process.argv[3];
fs.readdir(process.argv[2], function(err, filenames){
	filter(filenames);
});
var filter = function(filenames){
	//for (var i=0; i<filenames.length; i++)
		//if (filenames[i].indexOf('.'+suffix)>-1) console.log(filenames[i]);
	filenames.forEach(function(file){
		if (path.extname(file) === '.' + suffix)
			console.log(file);
	})
});*/

// var mymodule = require('./mymodule.js'); //the .js can be omitted
// var printList = function(err, list){
// 	if (err) console.error("------ERROR: ", err);
// 	else {
// 		list.forEach(function(entry){
// 			console.log(entry);
// 		}) 
// 	}
// }
// mymodule(process.argv[2], process.argv[3], printList);

/*var http_mod = require('http');
var url = process.argv[2];
function callback (response){
	response.setEncoding('utf8')
	response.on("data", function(data){
		console.log(data.toString());
	})
	response.on("error", console.error)
}
http_mod.get(url, callback);*/

/*var http_mod = require('http');
var bl_mod = require('bl');
var url = process.argv[2];
function callback (response){
	response.pipe(bl_mod(function(err, data){
		if (err) console.error(err);
		else {
			console.log(data.length);
			console.log(data.toString());
		}
	}))
}
http_mod.get(url, callback);*/


//无效的for
/*for (var i=0; i<3; i++){
	console.log(i)
	http_mod.get(process.argv[2+i], function(response){
		console.log(i)//i固定成了3
		response.pipe(bl_mod(function(err, data){
			if (err) return console.error(err);
			else {
				dict[i] = data.toString();
				count++;
				if (count==3)
					for (var j=0; j<3; j++)
						console.log(dict[j]);
			}
		}));		
	});	
}*/

//错误顺序
/*function callback (response){
	response.pipe(bl_mod(function(err, data){
		if (err) console.error(err);
		else {
			dict[count++] = data.toString();
			if (count==3)
				for (var i=0; i<3; i++)
					console.log(dict[i]);
		}
	}));
}
http_mod.get(process.argv[2], callback);
http_mod.get(process.argv[3], callback);
http_mod.get(process.argv[4], callback);*/

/*function httpGet(index){
	http_mod.get(process.argv[index+2], function(response){
		response.pipe(bl_mod(function(err, data){
			if (err) return console.error(err);
			else {
				dict[index] = data.toString();
				count++;
				if (count==3)
					for (var j=0; j<3; j++)
						console.log(dict[j]);
			}
		}));		
	})
}
for (var i=0; i<3; i++) httpGet(i)*/

/*var zeroFill = function(i){
	return (i<10 ? '0':'') + i; 
}

var net_mod = require('net')
net_mod.createServer(function (socket){
	var date = new Date()
	var date_format = date.getFullYear() + '-'
					+ zeroFill(date.getMonth() + 1) + '-'
					+ zeroFill(date.getDate()) + ' '
					+ zeroFill(date.getHours()) + ':'
					+ zeroFill(date.getMinutes());
	socket.end(date_format + '\n')
}).listen(process.argv[2])*/

//编写一个 HTTP 文件 **服务器**，它用于将每次所请求的文件返回给客户端。
/*http_mod.createServer(function(req, response){
	res.writeHead(200, { 'content-type': 'text/plain' })
	//src.pipe(des) src输出流至destination
	fs_mod.createReadStream(process.argv[3]).pipe(response);
}).listen(process.argv[2]);*/

//编写一个 HTTP **服务器**，它只接受 POST 形式的请求，并且将 POST 请求主体（body）所带的字符转换成大写形式，然后返回给客户端。
/*http_mod.createServer(function(req, res){
	if (req.method!=='POST')
		return res.end('SEND ME A POST');
	var map = require('through2-map');
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);

}).listen(process.argv[2]);*/


//编写一个 HTTP **服务器**，每当接收到一个路径为 '/api/parsetime' 的 GET 请求的时候，响应一些 JSON 数据。我们期望请求会包含一个查询参数（query string），key 是 "iso"，值是 ISO 格式的时间。
/*function parse(time){
	var datetime = {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
	return datetime;
}

http_mod.createServer(function(req, res){
	var url_mod = require("url");
	var urlParams = url_mod.parse(req.url)
	var time = new Date(urlParams.query.iso);
	var result;
	console.log(urlParams);
	if (urlParams.pathname=='/api/parsetime'){
		result = parse(time);
	}
	else if (urlParams.pathname=='/api/unixtime'){
		result = {unixtime: time.getTime()};
	}
	if (result){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result));
	}

}).listen(process.argv[2]);
*/