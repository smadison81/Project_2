module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
        orderId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        orderQty: {
            type: DataTypes.INTEGER},
        orderDetails: {
            type: DataTypes.STRING},
    });

    
Orders.associate = function(models) {
    Orders.belongsToMany(models.Item, {
      through: 'OrderItems',
      as: 'item',
      foreignKey: 'orderId',
      otherKey: 'itemId'
    });
  };

    return Orders;
  };
  