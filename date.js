var moment = require("moment");

var d = new Date();
d.setTime(d.getTime()-11*24*3600*1000);
console.log(d.getDate());

var d2 = moment().subtract(11,"days").format("YYYY-MM-DD");
console.log(d2);

var d3 = null;
console.log(d3);

try{
	console.log(moment(null).isValid());//false
	console.log(moment("").isValid());//false
	var d4 = moment(0).format("YYYY-MM-DD HH:mm");
	console.log(d4);
}
catch(err){
	console.log(err);
}
