module.exports = (sequelize, DataTypes) => {
  const attributes = {
    link_title: {
      type: DataTypes.STRING,
    },
    link_url: {
      type: DataTypes.STRING,
    },
    link_target: {
      type: DataTypes.ENUM('_blank', '_self', '_parent', '_top'),
    },
    link_image: {
      type: DataTypes.STRING,
    },
    link_type: {
      type: DataTypes.ENUM('link', 'banner'),
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

  const Links = sequelize.define('links', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Links.associate = (models) => {
    /**
     *
     */
  };

  return Links;
};
