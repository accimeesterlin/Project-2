var http = require("http");
var socketio = require("socket.io");

var server = http.createServer((req, res) => {
    res.end("I am connected")
});

server.listen(8080);