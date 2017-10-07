var http = require("http");
var PORT = 7000;

/*console.log("hi")*/

var handleRequest = function(request, response)
{
	response.end("Your hair looks so good today!");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function()
{
	console.log("Connected on port "+PORT);
})