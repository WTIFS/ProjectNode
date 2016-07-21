var http=require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {Content_type: "text/plain"});
	response.write("<H1>Hello Node server!</H1>");
	response.end();
}).listen(8888);