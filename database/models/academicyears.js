'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class academicYears extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  academicYears.init({
    academic_year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'academicYears',
  });
  return academicYears;
};