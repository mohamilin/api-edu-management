module.exports = (sequelize, DataTypes) => {
  const attributes = {
    token: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.ENUM("access", "refresh", "resetPassword", "verifyEmail"),
    },
    expires: {
      type: DataTypes.DATE,
    },
    blacklisted: {
      type: DataTypes.ENUM("true", "false"),
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  };

  const Tokens = sequelize.define("tokens", attributes, {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    paranoid: true,
  });

  Tokens.associate = (models) => {
    /**
     *
     */
  };

  return Tokens;
};
