// var db = require("../models");

<<<<<<< HEAD
module.exports = function(app, path) {


    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
    });
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname, "../views/login-page.html"));
    });

    app.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname, "../views/signup-page.html"));
    });
    app.get('/dashboard', function(req, res) {
        res.sendFile(path.join(__dirname, "../views/chat.html"));
    });

    // app.use(function(req, res, next){
    //   res.status(404);

    // Render 404 page for any unmatched routes
    //  app.get("*", function (req, res) {
    //   res.render("404");
    // });
    // };

=======
module.exports = function (app, path) {
  

    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname,"../views/layouts/main.html"));
    });
<<<<<<< HEAD
    app.get('/login', function (req, res) {
      res.sendFile(path.join(__dirname,"../views/login-page.html"));
    });

    app.get('/signup', function (req, res) {
      res.sendFile(path.join(__dirname,"../views/signup-page.html"));
    });
    app.get('/dashboard', function (req, res) {
      res.sendFile(path.join(__dirname,"../views/chat.html"));
    });
    
    // app.use(function(req, res, next){
    //   res.status(404);

       // Render 404 page for any unmatched routes
      //  app.get("*", function (req, res) {
      //   res.render("404");
      // });
      // };
    
>>>>>>> master
    //   // respond with html page
    //   if (req.accepts('html')) {
    //     //TODO: Replace the signup-page.html to 4040.html or something similar
    //     res.sendFile(path.join(__dirname,"../views/"));
    //     return;
    //   }
    // });

    // Load index page
    //   app.get("/", function (req, res) {
    //     db.Example.findAll({}).then(function (dbExamples) {
    //       res.render("index", {
    //         msg: "Welcome!",
    //         examples: dbExamples
    //       });
    //     });
    //   });

    //   // Load example page and pass in an example by id
    //   app.get("/example/:id", function (req, res) {
    //     db.Example.findOne({
    //       where: {
    //         id: req.params.id
    //       }
    //     }).then(function (dbExample) {
    //       res.render("example", {
    //         example: dbExample
    //       });
    //     });
    //   });

<<<<<<< HEAD
    // // Render 404 page for any unmatched routes
    // app.get("*", function (req, res) {
    //   res.render("404");
    // });
    // };

    //   //Load main.html
    // app.get('/ ', function(req, res) {
    //   res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
    // });

    // //Load login-page.html
    // app.get('/login', function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/login-page.html"));
    // });

=======
      // // Render 404 page for any unmatched routes
      // app.get("*", function (req, res) {
      //   res.render("404");
      // });
      // };

    //   //Load main.html
      // app.get('/ ', function(req, res) {
      //   res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
      // });

    // //Load login-page.html
    // app.get('/login', function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/login-page.html"));
    // });
=======
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname, "../views/login-page.html"));
    });
    //     //Load main.html
    //     app.get('/', function(req, res) {
    //         res.sendFile(path.join(__dirname, "../login-page.html"));
    //     });

    //     //Load login-page.html
    //     app.get('/login', function(req, res) {
    //         res.sendFile(path.join(__dirname, "./login-page.html"));
    //     });

    //     //Load signup-page.html
    //     app.get('/signup', function(req, res) {
    //         res.sendFile(path.join(__dirname, "./signup-page.html"));
    //     });

    // };

    // module.exports = function (app) {
    //   // Load index page
    //   app.get("/", function (req, res) {
    //     db.Example.findAll({}).then(function (dbExamples) {
    //       res.render("index", {
    //         msg: "Welcome!",
    //         examples: dbExamples
    //       });

    //     });

    //     // Load example page and pass in an example by id
    //     app.get("/example/:id", function(req, res) {
    //         db.Example.findOne({
    //             where: {
    //                 id: req.params.id
    //             }
    //         }).then(function(dbExample) {
    //             res.render("example", {
    //                 example: dbExample
    //             });
    //         });
    //     });
>>>>>>> master

>>>>>>> master
    // //Load signup-page.html
    // app.get('/signup', function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/signup-page.html"));
    // });
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
    }
=======
}
>>>>>>> master
>>>>>>> master
