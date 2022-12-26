module.exports = (sequelize, DataTypes) => {
  const attributes = {
    user_name: {
      type: DataTypes.STRING,
    },
    user_full_name: {
      type: DataTypes.STRING,
    },
    user_email: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
    user_url: {
      type: DataTypes.STRING,
    },
    user_group_id: {
      type: DataTypes.INTEGER,
    },
    user_type: {
      type: DataTypes.ENUM('super_user', 'administrator', 'employee', 'student', 'parent'),
    },
    user_profile_id: {
      type: DataTypes.INTEGER,
    },
    user_biography: {
      type: DataTypes.TEXT,
    },
    user_forgot_password_key: {
      type: DataTypes.STRING,
    },
    user_forgot_password_request_date: {
      type: DataTypes.DATE,
    },
    has_login: {
      type: DataTypes.ENUM('true', 'false'),
    },
    last_logged_in: {
      type: DataTypes.ENUM('true', 'false'),
    },
    ip_address: {
      type: DataTypes.STRING,
    },
    created_by: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_by: {
      type: DataTypes.INTEGER,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    deleted_by: {
      type: DataTypes.INTEGER,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
    restored_by: {
      type: DataTypes.INTEGER,
    },
    restored_at: {
      type: DataTypes.DATE,
    },
    is_deleted: {
      type: DataTypes.ENUM('true', 'false'),
    },
  };

  const Users = sequelize.define('users', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Users.associate = (models) => {
    /**
     *
     */
  };

  return Users;
};
