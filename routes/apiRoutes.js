var db = require("../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Get total revenue aggregate
  app.get("/api/revenue", function(req, res){
    db.Orders.findAll({
      include: [db.Orders],
      attributes: [[db.sequelize.literal('SUM (price * order_qty)'), 'revenue']]
    }).then(function(data){
      res.json(data)
    })
  })
  
  // Get total orders aggregate
  app.get("/api/orders", function(req, res){
    db.Orders.findAll({
      //need to confirm order_id key or define it sequelize models
      attributes: ['Orders_id', [sequelize.fn('count', sequelize.col('Orders_id')), 'count']]
    }).then(function(order_data){
      res.json(order_data)
    })
  })

  // Create a new items
  app.post("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Delete an item by id
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
