module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        categoryName: {
            type:DataTypes.STRING}
    });

    Category.associate = function(models) {
        Category.hasMany(models.Orders,{ 
            foreignKey: 'categoryId',
            allowNull: false});
      };
    return Category;
  };
  