module.exports = function(sequelize, DataTypes) {
  var OrderItem = sequelize.define("OrderItem", {
    orderItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  return OrderItem;
};
