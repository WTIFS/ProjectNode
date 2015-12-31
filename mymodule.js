module.exports = function(path, suffix, callback){
	var fs = require('fs');
	fs.readdir(path, function(err, filenames){
		if (err) return callback(err);
		for (var i=0; i<filenames.length; i++){
			//console.log('------filenames.length:' + filenames.length);
			//console.log('------i:' + i + ',filename:' + filenames[i]);
			if (filenames[i].indexOf('.' + suffix) === -1) {
				filenames.splice(i,1);
				i--;
			}

			//or:
			/*var path_mod = require('path')
			filenames = filenames.filter(function(file){
				return path_mod.extname(file)=== '.' + suffix;
			})*/
		}
		callback(null, filenames);


	});
}