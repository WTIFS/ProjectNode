/*
 * Created by Yuanfei on 2015/12/28.
 */
/*console.log("HELLO WORLD");*/

//console.log(process.argv);
/*
var args = process.argv;
var sum = 0;
for (var i=2; i<args.length; i++)
    sum += +args[i];
console.log(sum);*/

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

/*var mymodule = require('./mymodule.js'); //the .js can be omitted
var printList = function(err, list){
	if (err) console.error("------ERROR: ", err);
	else {
		list.forEach(function(entry){
			console.log(entry);
		}) 
	}
}
mymodule(process.argv[2], process.argv[3], printList);*/

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

var http_mod = require('http');
var bl_mod = require('bl');
var dict = new Array();
var count = 0;

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

var zeroFill = function(i){
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
}).listen(process.argv[2])