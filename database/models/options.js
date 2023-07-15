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
      option_group: DataTypes.STRING,
      option_name: {
        type: DataTypes.STRING,
      },
      created_by: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isDeleted: { type: DataTypes.ENUM('true', 'false'), defaultValue: 'false' },
    },
    {
      sequelize,
      modelName: "options",
    }
  );
  return options;
};


// CREATE TABLE `options` (
//   `id` bigint unsigned NOT NULL AUTO_INCREMENT,
//   `option_group` varchar(100) NOT NULL,
//   `option_name` varchar(255) DEFAULT NULL,
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
//   UNIQUE KEY `unique_field` (`option_group`,`option_name`),
//   KEY `options_option_group__idx` (`option_group`) USING BTREE
// ) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb3;