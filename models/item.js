module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    item_name: {
      type: DataTypes.STRING},
    price: {
      type:DataTypes.DOUBLE}
  });

  Item.associate = function(models) {
    // We're saying that an items should belong to a category
    // An item can't be created without a category due 
    Item.belongsTo(models.Category, {
      foreignKey: 'category_id',
        allowNull: false
      });
    Item.hasMany(models.Orders, {
      foreignKey: 'order_id',
        allowNull: false
    });
   };
  return Item;
};
