module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    orderKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.INTEGER
    },
    orderQty: {
      type: DataTypes.INTEGER
    }
  });

  return Order;
};
