module.exports = (sequelize, DataTypes) => {
  const attributes = {
    category_name: {
      type: DataTypes.STRING,
    },
    category_slug: {
      type: DataTypes.STRING,
    },
    category_description: {
      type: DataTypes.STRING,
    },
    category_type: {
      type: DataTypes.ENUM('post', 'file'),
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

  const Categories = sequelize.define('categories', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Categories.associate = (models) => {
    /**
     *
     */
  };

  return Categories;
};
