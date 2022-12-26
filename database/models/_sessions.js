module.exports = (sequelize, DataTypes) => {
  const attributes = {
    ip_address: DataTypes.STRING,
    data: DataTypes.DATE,
  };

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
  };

  return Sessions;
};
