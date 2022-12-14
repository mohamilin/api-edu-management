module.exports = (sequelize, DataTypes) => {
    const attributes = {
        academic_year_id: {
            type: DataTypes.INTEGER
        },
        class_group_id: {
            type: DataTypes.INTEGER
        },
        employee_id: {
            type: DataTypes.INTEGER
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
            type: DataTypes.BOOLEAN
        },
    };

    const ClassGroupSettings = sequelize.define("class_group_settings", attributes, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    ClassGroupSettings.associate = (models) => {
        /**
         *
         */
    };

    return ClassGroupSettings;
};