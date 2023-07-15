"use strict";
const { Model } = require("sequelize");
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
  users.init(
    {
      user_name: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_full_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_url: DataTypes.STRING,
      user_group_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      user_type: {
        type: DataTypes.ENUM(
          "super_user",
          "administrator",
          "employee",
          "student",
          "parent",
          "guest"
        ),
        defaultValue: "guest",
      },
      user_profile_id: DataTypes.INTEGER,
      user_biography: {
        type:  DataTypes.TEXT,
        defaultValue: null
      },
      is_deleted: {
        type: DataTypes.ENUM('true', 'false'),
        defaultValue: 'false'
      }
    },
    {
      sequelize,
      modelName: "users",
      underscored: true
    }
  );
  return users;
};


// `user_forgot_password_key` varchar(100) DEFAULT NULL,
// `user_forgot_password_request_date` date DEFAULT NULL,
// `has_login` enum('true','false') DEFAULT 'false',
// `last_logged_in` datetime DEFAULT NULL,
// `ip_address` varchar(45) DEFAULT NULL,
// `created_at` datetime DEFAULT NULL,
// `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
// `deleted_at` datetime DEFAULT NULL,
// `restored_at` datetime DEFAULT NULL,
// `created_by` bigint DEFAULT '0',
// `updated_by` bigint DEFAULT '0',
// `deleted_by` bigint DEFAULT '0',
// `restored_by` bigint DEFAULT '0',
// `is_deleted` enum('true','false') DEFAULT 'false',
