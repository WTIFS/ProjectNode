var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');

var indexRouter = require("./routes/index");

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.set('views', path.join(__dirname, 'views')); //__dirname: 当前模块文件所在目录的绝对路径
app.engine(".html", ejs.__express);
app.set('view engine', 'html');

app.use('/', indexRouter);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});