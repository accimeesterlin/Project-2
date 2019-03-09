var express = require('express');
var app = express();
var socketIO = require('socket.io');

app.use(express.static(__dirname + '/public'));

var expressServer = app.listen(9000);

var io = socketIO(expressServer);

io.on('connection', (socket) => {
    socket.emit('messageFromServer', { data: "welcome to socket.io" });
    socket.on('messageToServer', function(dataFromClient) {
        console.log(dataFromClient)
    })
})