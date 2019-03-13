var db = require("../models");
var app = require('../slack')
    // var app = express();

module.exports = function(app) {

    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/chat.html"));
    // });

    // // cms route loads cms.html
    // app.get("/login-page", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../views/login-page.html"));
    // });

    // // Load index page
    // app.get("/", function(req, res) {
    //     db.Example.findAll({}).then(function(dbExamples) {
    //         res.render("index", {
    //             msg: "Welcome!",
    //             examples: dbExamples
    //         });
    //     });
    // });

    // // Load example page and pass in an example by id
    // app.get("/example/:id", function(req, res) {
    //     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //         res.render("example", {
    //             example: dbExample
    //         });
    //     });
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });

    //Load main.html
    app.get("/ ", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/chat.html"));
    });

    //Load login-page.html
    app.get("/login", function(req, res) {
        res.render('../views/login-page.html')
    });

    //Load signup-page.html
    app.get("/Signup", function(req, res) {
        res.render('../views/signup-page.html')
    });
};