'use strict';

module.exports = (sequelize, DataTypes) => {

  const attributes = {
    ip_address: DataTypes.STRING,
    data: DataTypes.DATE,
    // created_by: { type: DataTypes.INTEGER },
    // created_at: { type: DataTypes.DATE },
    // updated_by: { type: DataTypes.INTEGER },
    // updated_at: { type: DataTypes.DATE },
    // deleted_by: { type: DataTypes.INTEGER },
    // deleted_at: { type: DataTypes.DATE },
    // restored_by : { type: DataTypes.INTEGER },
    // restored_at: { type: DataTypes.DATE },
    // is_deleted: { type: DataTypes.BOOLEAN },
  }


  const Sessions = sequelize.define('_sessions', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });


  Sessions.associate = (models) => {
    /**
     * 
     */
  }

  return Sessions;
};