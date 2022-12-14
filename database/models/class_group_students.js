module.exports = (sequelize, DataTypes) => {
    const attributes = {
        class_group_setting_id: {
            type: DataTypes.INTEGER
        },
        student_id: {
            type: DataTypes.INTEGER
        },
        is_class_manager: {
            type: DataTypes.ENUM('true', 'false')
        },
        created_by: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_by: {
            type: DataTypes.INTEGER
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_by: {
            type: DataTypes.INTEGER
        },
        deleted_at: {
            type: DataTypes.DATE
        },
        restored_by: {
            type: DataTypes.INTEGER
        },
        restored_at: {
            type: DataTypes.DATE
        },
        is_deleted: {
            type: DataTypes.ENUM('true', 'false')
          },
    };

    const ClassGroupStudents = sequelize.define("class_group_students", attributes, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    ClassGroupStudents.associate = (models) => {
        /**
         *
         */
    };

    return ClassGroupStudents;
};