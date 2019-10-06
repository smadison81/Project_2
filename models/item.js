module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    item_name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  });
  return Item;
};
