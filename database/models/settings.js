module.exports = (sequelize, DataTypes) => {
    const attributes = {
      setting_group: {
        type: DataTypes.STRING,
      },
      setting_variable: {
        type: DataTypes.STRING,
      },
      setting_text: {
        type: DataTypes.TEXT,
      },
      setting_value: {
        type: DataTypes.TEXT,
      },
      setting_default_value: {
        type: DataTypes.TEXT,
      },
      setting_access_group: {
        type: DataTypes.STRING,
      },
      setting_description: {
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
        type: DataTypes.ENUM('true', 'false')
      },
    };
  
    const Settings = sequelize.define("settings", attributes, {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    Settings.associate = (models) => {
      /**
       *
       */
    };
  
    return Settings;
  };
  