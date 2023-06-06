"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init(
    {
      registrationNumber: DataTypes.STRING,
      fullName: {
        type: DataTypes.STRING,
      },
      isStudent: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isAlumni: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isTransfer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      joinDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      nisn: {
        type: DataTypes.STRING,
      },
      nik: {
        type: DataTypes.STRING,
      },
      prevSchoolName: {
        type: DataTypes.STRING,
      },
      prevSchoolAddress: {
        type: DataTypes.STRING,
      },
      skhun: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM("L", "P"),
      },
      streetAddress: {
        type: DataTypes.STRING,
      },
      birthPlace: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      religionId: {
        type: DataTypes.INTEGER,
      },
      citezenship: {
        type: DataTypes.ENUM("WNI", "WNA"),
      },
      country: {
        type: DataTypes.STRING,
      },
      noHp: {
        type: DataTypes.INTEGER,
      },
      fatherName: {
        type: DataTypes.STRING,
      },
      motherNamae: {
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
      modelName: "students",
    }
  );
  return students;
};
