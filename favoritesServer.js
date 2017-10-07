var http = require("http");
var fs = require("fs")
var PORT = 8080;

var displayHome = function(request, response)
{
	fs.readFile(__dirname + "/index.html", function(err, data)
	{
		if(err){throw err}

		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)

	})
}

var displayFood = function(request, response)
{
	fs.readFile(__dirname + "/food.html", function(err, data)
	{
		if(err){throw err}

		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)

	})
}

var displayMovies = function(request, response)
{
	fs.readFile(__dirname + "/movies.html", function(err, data)
	{
		if(err){throw err}

		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)

	})
}

var displayCSS = function(request, response)
{
	fs.readFile(__dirname + "/cssframeworks.html", function(err, data)
	{
		if(err){throw err}

		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)

	})
}

var handleRequest = function(request, response)
{
	var path = request.url;

	if (path === "/")
	{
		displayHome(request, response)
	}

	else if (path === "/food")
	{
		displayFood(request, response)
	}

	else if (path === "/movies")
	{
		displayMovies(request, response)
	}

	else if (path === "/cssframeworks")
	{
		displayCSS(request, response)
	}
	
/*
	else if (path === "/portfolio")
	{
		displayPortfolio(response, request)
	}*/
}

var server = http.createServer(handleRequest)

server.listen(PORT, function()
{
	console.log("Connected!")
})