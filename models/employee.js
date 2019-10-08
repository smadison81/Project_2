module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        emp_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        emp_name: {
            type: Sequelize.STRING}
    });

    Employee.associate = function(models) {
        // Associating Employee with orders
        // When an Author is deleted, also delete any associated Posts
        Employee.hasMany(models.Orders);
      };

    return Employee;
  };
  