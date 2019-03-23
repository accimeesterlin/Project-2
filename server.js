require('dotenv').config();
const express = require('express');
const app = express();
const socketio = require('socket.io');
var db = require('./models');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var customAuthMiddleware = require('./middleware/custom-auth-middleware');
var path = require('path');
const startSocket = require('./io');
// controller imports
const userController = require('./controllers/user-controller');
const viewsController = require('./controllers/views-controller');

// directory references
const clientDir = path.join(__dirname, '../client');


// console.log(namespaces[0]);
// app.use(express.static(__dirname + '/public'));


var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({
    extended: true
}));
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


var syncOptions = {
    force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}


db.sequelize.sync(syncOptions).then(function () {
    const server = app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });

    const io = socketio.listen(app.listen(process.env.PORT || 9000));
    startSocket(io);
});

module.exports = app;