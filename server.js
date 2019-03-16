<<<<<<< HEAD
// require("dotenv").config();
// var express = require("express");
// var exphbs = require("express-handlebars");

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// module.exports = app;
=======
require('dotenv').config();
const express = require('express');
const app = express();
const socketio = require('socket.io')
var db = require('./models');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var customAuthMiddleware = require('./middleware/custom-auth-middleware');
var path = require('path');

// controller imports
const userController = require('./controllers/user-controller');
const viewsController = require('./controllers/views-controller');

// directory references
const clientDir = path.join(__dirname, '../client');


let namespaces = require('./data/namespaces');
// console.log(namespaces[0]);
// app.use(express.static(__dirname + '/public'));

var expressServer = app.listen(8000);

var expressServer = app.listen(9000);

var io = socketio(expressServer);
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the cookie-parser to help with auth token,
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(customAuthMiddleware);

// serve up the public folder so we can request static
// assets from our html document
app.use('/assets', express.static(clientDir));

// set up handlebars
app.set('views', path.join(__dirname, '/views'));

// Handlebars
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main'
    })
);
app.set('view engine', 'handlebars');

// hook up our controllers
app.use(userController);
app.use(viewsController);


// Requiring our models for syncing
const DB = require('./models/index');

require('./routes/htmlRoutes')(app);
// io.on = io.of('/').on = io.sockets.on
// io.emit = io.of('/').emit = io.sockets.emit
io.on('connection', function(socket) {
    // console.log(socket.handshake)
    // build an array to send back with the img and endpoing for each NS
    let nsData = namespaces.map((ns) => {
        return {
            img: ns.img,
            endpoint: ns.endpoint
        };
    });
    // console.log(nsData)
    // sned the nsData back to the client. We need to use socket, NOT io, because we want it to 
    // go to just this client. 
    socket.emit('nsList', nsData);
})


// loop through each namespace and listen for a connection
namespaces.forEach((namespace) => {
    // console.log(namespace)
    // const thisNs = io.of(namespace.endpoint)
    io.of(namespace.endpoint).on('connection', (nsSocket) => {
        console.log(nsSocket.handshake)
        const username = nsSocket.handshake.query.username;
        // console.log(`${nsSocket.id} has join ${namespace.endpoint}`)
        // a socket has connected to one of our chatgroup namespaces.
        // send that ns gorup info back
        nsSocket.emit('nsRoomLoad', namespace.rooms)
        nsSocket.on('joinRoom', (roomToJoin, numberOfUsersCallback) => {
            // deal with history... once we have it
            console.log(nsSocket.rooms);
            const roomToLeave = Object.keys(nsSocket.rooms)[1];
            nsSocket.leave(roomToLeave);
            updateUsersInRoom(namespace, roomToLeave)
            nsSocket.join(roomToJoin)
                // io.of('/wiki').in(roomToJoin).clients((error, clients)=>{
                //     console.log(clients.length)
                //     numberOfUsersCallback(clients.length);
                // })
            const nsRoom = namespace.rooms.find(function(room) {
                return room.roomTitle === roomToJoin;
            })
            nsSocket.emit('historyCatchUp', nsRoom.history)
            updateUsersInRoom(namespace, roomToJoin);
        })
        nsSocket.on('newMessageToServer', (msg) => {
            const fullMsg = {
                    text: msg.text,
                    time: Date.now(),
                    username: username,
                    avatar: 'https://via.placeholder.com/30'
                }
                // console.log(fullMsg)
                // Send this message to ALL the sockets that are in the room that THIS socket is in.
                // how can we find out what rooms THIS socket is in?
                // console.log(nsSocket.rooms)
                // the user will be in the 2nd room in the object list
                // this is because the socket ALWAYS joins its own room on connection
                // get the keys
            const roomTitle = Object.keys(nsSocket.rooms)[1];
            // we need to find the Room object for this room
            const nsRoom = namespace.rooms.find((room) => {
                    return room.roomTitle === roomTitle;
                })
                // console.log("The room object that we made that matches this NS room is...")
                // console.log(nsRoom)
            nsRoom.addMessage(fullMsg);
            io.of(namespace.endpoint).to(roomTitle).emit('messageToClients', fullMsg)
        })
    })
})

function updateUsersInRoom(namespace, roomToJoin) {
    // Send back the number of users in this room to ALL sockets connected to this room
    io.of(namespace.endpoint).in(roomToJoin).clients((error, clients) => {
        // console.log(`There are ${clients.length} in this room`);
        io.of(namespace.endpoint).in(roomToJoin).emit('updateMembers', clients.length)
    })
}

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}


db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;
>>>>>>> master
