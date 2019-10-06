module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        emp_name: DataTypes.STRING
    });
    return Employee;
  };
  