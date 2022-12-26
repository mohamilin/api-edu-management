module.exports = (sequelize, DataTypes) => {
  const attributes = {
    academic_year: {
      type: DataTypes.STRING,
    },
    semester: {
      type: DataTypes.ENUM('Ganjil', 'Genap'),
    },
    current_semester: {
      type: DataTypes.ENUM('true', 'false'),
    },
    admission_semester: {
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

  const AcademicYears = sequelize.define('academic_years', attributes, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  AcademicYears.associate = (models) => {
    /**
     *
     */
  };

  return AcademicYears;
};
