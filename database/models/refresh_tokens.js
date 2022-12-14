module.exports = (sequelize, DataTypes) => {
    const attributes = {
      quote: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
      expire_data: {
        type: DataTypes.DATE,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    };
  
    const RefreshTokens = sequelize.define("refresh_tokens", attributes, {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    RefreshTokens.associate = (models) => {
      /**
       *
       */
    };
  
    return RefreshTokens;
  };
  