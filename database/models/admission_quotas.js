module.exports = (sequelize, DataTypes) => {
    const attributes = {
        academic_year_id: {
            type: DataTypes.INTEGER
        },
        admission_type_id: {
            type: DataTypes.INTEGER
        },
        major_id: {
            type: DataTypes.INTEGER
        },
        quota: {
            type: DataTypes.SMALLINT
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

    const AdmissionQuotas = sequelize.define("admission_quotas", attributes, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    AdmissionQuotas.associate = (models) => {
        /**
         *
         */
    };

    return AdmissionQuotas;
};