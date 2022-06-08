var http = require('http');

http
	.createServer(function (request, response) {
		response.write('Hello world');
		response.end();
	})
	.listen(8000);
