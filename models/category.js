module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        category_name: DataTypes.STRING
    });

    Category.associate = function(models) {
        Category.hasMany(models.Orders);
      };
    return Category;
  };
  