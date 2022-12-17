module.exports = (sequelize, DataTypes) => {
  const attributes = {
    question: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.ENUM('true', 'false'),
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

  const Questions = sequelize.define('questions', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  Questions.associate = (models) => {
    /**
     *
     */
  };

  return Questions;
};
