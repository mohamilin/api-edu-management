module.exports = (sequelize, DataTypes) => {
    const attributes = {
      student_id: {
        type: DataTypes.INTEGER,
      },
      scholar_type: {
        type: DataTypes.INTEGER,
      },
      scholar_description: {
        type: DataTypes.STRING,
      },
      scholar_start_year: {
        type: DataTypes.DATE,
      },
      scholar_end_year: {
        type: DataTypes.DATE,
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
  
    const Scholarships = sequelize.define("scholarships", attributes, {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  
    Scholarships.associate = (models) => {
      /**
       *
       */
    };
  
    return Scholarships;
  };
  