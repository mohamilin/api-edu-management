module.exports = (sequelize, DataTypes) => {
    const attributes = {
        academic_year_id: {
            type: DataTypes.INTEGER
        },
        phase_name: {
            type: DataTypes.STRING
        },
        phase_start_date: {
            type: DataTypes.DATE
        },
        phase_end_date: {
            type: DataTypes.DATE
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

    const AdmissionPhases = sequelize.define("admission_phases", attributes, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    AdmissionPhases.associate = (models) => {
        /**
         *
         */
    };

    return AdmissionPhases;
};