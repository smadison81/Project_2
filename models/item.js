module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    item_name: {
      type: Sequelize.STRING},
    price: {
      type:Sequelize.DOUBLE}
  });

  Item.associate = function(models) {
    // We're saying that an items should belong to a category
    // An item can't be created without a category due 
    Item.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Item;
};
