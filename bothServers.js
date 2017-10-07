var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

var handleRequest1 = function(request, response)
{
	response.end("Your hair looks so good today!");
}

var handleRequest2 = function(request, response)
{
	response.end("You're stupid and you should feel bad!");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function()
{
	console.log("Connected on port "+PORT1);
})

server2.listen(PORT2, function()
{
	console.log("Connected on port "+PORT2);
})
