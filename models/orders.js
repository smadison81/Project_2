module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        order_qty: {
            type: DataTypes.INTEGER},
        order_details: {
            type: DataTypes.STRING},
    });
    return Orders;
  };
  