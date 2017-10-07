var http = require("http");
var PORT = 8080;

var handleRequest = function(request, response)
{
	var method = request.method.toLowerCase();
	var requestData = "";
	var output = "";

	request.on("data", function(data)
	{
		requestData = requestData + data;
	})

	request.on("end", function()
	{
		//output = "You just "+method+ "\n";
		output = output + requestData;
		console.log(output);
		response.end()
	})
}

var server = http.createServer(handleRequest)

server.listen(PORT, function()
{
	console.log("Connected to port "+PORT)
})