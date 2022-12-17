module.exports = (sequelize, DataTypes) => {
  const attributes = {
    album_title: {
      type: DataTypes.STRING,
    },
    album_description: {
      type: DataTypes.STRING,
    },
    album_slug: {
      type: DataTypes.STRING,
    },
    album_cover: {
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

  const Albums = sequelize.define('albums', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Albums.associate = (models) => {
    /**
     *
     */
  };

  return Albums;
};
