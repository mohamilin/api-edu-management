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
    academic_year: DataTypes.STRING,
    semester: {
      type:  DataTypes.ENUM('odd', 'even'),
      defaultValue: 'odd'
    },   // odd: GANJIL , even: GENAP
    current_semester:  {
      type: DataTypes.ENUM('true', 'false'),
      defaultValue: 'false'
    },
    admission_semester: {
      type: DataTypes.ENUM('true', 'false'),
      defaultValue: 'false'
    }
  }, {
    sequelize,
    modelName: 'academic_years',
  });
  return academicYears;
};

// CREATE TABLE `academic_years` (
//   `id` bigint unsigned NOT NULL AUTO_INCREMENT,
//   `academic_year` varchar(9) NOT NULL COMMENT 'Tahun Pelajaran',
//   `semester` enum('odd','even') NOT NULL DEFAULT 'odd' COMMENT 'odd = Ganjil, even = Genap',
//   `current_semester` enum('true','false') NOT NULL DEFAULT 'false',
//   `admission_semester` enum('true','false') NOT NULL DEFAULT 'false',
//   `created_at` datetime DEFAULT NULL,
//   `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//   `deleted_at` datetime DEFAULT NULL,
//   `restored_at` datetime DEFAULT NULL,
//   `created_by` bigint DEFAULT '0',
//   `updated_by` bigint DEFAULT '0',
//   `deleted_by` bigint DEFAULT '0',
//   `restored_by` bigint DEFAULT '0',
//   `is_deleted` enum('true','false') DEFAULT 'false',
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `academic_year` (`academic_year`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;