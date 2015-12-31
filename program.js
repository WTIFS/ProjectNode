/**
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

var mymodule = require('./mymodule.js'); //the .js can be omitted
var printList = function(err, list){
	if (err) console.error("------ERROR: ", err);
	else {
		list.forEach(function(entry){
			console.log(entry);
		}) 
	}
}
mymodule(process.argv[2], process.argv[3], printList);
