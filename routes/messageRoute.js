var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/messages", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Message.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/message/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Message.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        db.Message.create(req.body).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/message/:id", function(req, res) {
        db.Message.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });

    // PUT route for updating posts
    app.put("/api/message", function(req, res) {
        db.Message.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });
};