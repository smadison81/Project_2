module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
        order_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        order_qty: {
            type: Sequelize.INTEGER},
        order_details: {
            type: Sequelize.STRING},
    });

    Orders.associate = function(models) {
        // We're saying that an order should belong to an employee
        // An can't be created without being assigned to an employee due to the foreign key constraint
        Orders.belongsTo(models.Employee, {
          foreignKey: {
            allowNull: false
          }
        });
      };
      // Every order has one time
    Orders.associate = function(models) {
        Orders.hasOne(models.Item);
    };

    return Orders;
  };
  