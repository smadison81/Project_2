module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        empId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        empName: {
            type: DataTypes.STRING}
    });

    Employee.associate = function(models) {
        // Associating Employee with orders
        // When an Author is deleted, also delete any associated Posts
        Employee.hasMany(models.OrderItem, {
            foreignKey: 'empId',
            allowNull: false
        });
      };

    return Employee;
  };
  