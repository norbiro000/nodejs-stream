var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/data.txt', function (err, data) {
		console.log(data)
		res.end(data)
	})
})

server.listen(3000)