module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
      order_qty: DataTypes.INTEGER,
      order_details: DataTypes.STRING,
    });
    return Orders;
  };
  