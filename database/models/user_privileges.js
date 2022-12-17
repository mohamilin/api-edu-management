module.exports = (sequelize, DataTypes) => {
  const attributes = {
    user_group_id: {
      type: DataTypes.INTEGER,
    },
    module_id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.ENUM('true', 'false')
    },
  }

  const UserPrivileges = sequelize.define("user_privileges", attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  })

  UserPrivileges.associate = (models) => {
    /**
     *
     */
  }

  return UserPrivileges;
}