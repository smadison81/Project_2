var db = require("../models");

module.exports = function (app) {
  // Load main page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load menu page
  app.get("/menu2", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("menu", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load about section on main page from menu page
  app.get("/about", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("about", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};