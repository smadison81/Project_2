module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    itemName: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DOUBLE
    },
  });
  
  Item.associate = function(models) {
    Item.hasMany(models.Order,{
      foreignKey: 'itemId'
    });
  };

  return Item;
};
