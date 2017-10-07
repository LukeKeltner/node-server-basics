var http = require("http");
var PORT = 7500;

/*console.log("hi")*/

var handleRequest = function(request, response)
{
	response.end("You're stupid and you should feel bad!");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function()
{
	console.log("Connected on port "+PORT);
})

