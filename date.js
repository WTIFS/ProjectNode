var moment = require("moment");

var d = new Date();
d.setTime(d.getTime()-11*24*3600*1000);
console.log(d.getDate());

var d2 = moment().subtract(11,"days").format("YYYY-MM-DD");
console.log(d2);

var d3 = null;
d3 ||=  d2;
console.log(d3);