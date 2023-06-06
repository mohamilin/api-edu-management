'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    fullName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM('super_user','administrator','employee','student','parent', 'guest'),
      defaultValue: 'guest'
    },
    isEmailVerified : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};