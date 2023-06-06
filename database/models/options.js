"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  }
  options.init(
    {
      optionGroup: DataTypes.STRING,
      optionName: {
        type: DataTypes.STRING,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      deletedBy: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "options",
    }
  );
  return options;
};
