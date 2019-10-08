module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        category_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        category_name: {
            type:DataTypes.STRING}
    });

    Category.associate = function(models) {
        Category.hasMany(models.Orders);
      };
    return Category;
  };
  