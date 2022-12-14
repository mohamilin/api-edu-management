module.exports = (sequelize, DataTypes) => {
  const attributes = {
    post_title: {
      type: DataTypes.STRING,
    },
    post_content: {
      type: DataTypes.TEXT,
    },
    post_image: {
      type: DataTypes.STRING,
    },
    post_author: {
      type: DataTypes.INTEGER,
    },
    post_categories: {
      type: DataTypes.INTEGER,
    },
    post_type: {
      type: DataTypes.INTEGER,
    },
    post_status: {
      type: DataTypes.ENUM('publish', 'draft'),
    },
    post_visibility: {
      type: DataTypes.ENUM('public','private'),
    },
    post_comment_status: {
      type: DataTypes.ENUM('open','close'),
    },
    post_slug: {
      type: DataTypes.STRING,
    },
    post_tags: {
      type: DataTypes.STRING,
    },
    post_counter : {
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
  };

  const Posts = sequelize.define("posts", attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Posts.associate = (models) => {
    /**
     *
     */
  };

  return Posts;
};
