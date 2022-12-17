module.exports = (sequelize, DataTypes) => {
    const attributes = {
      email: {
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
  
    const Subscribes = sequelize.define("subscribes", attributes, {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    Subscribes.associate = (models) => {
      /**
       *
       */
    };
  
    return Subscribes;
  };
  