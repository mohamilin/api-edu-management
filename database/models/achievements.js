module.exports = (sequelize, DataTypes) => {
    const attributes = {
        student_id: {
            type: DataTypes.INTEGER
        },
        achievement_type: {
            type: DataTypes.INTEGER
        },
        achievement_description: {
            type: DataTypes.STRING
        },
        achievement_level: {
            type: DataTypes.SMALLINT
        },
        achievement_year: {
            type: DataTypes.SMALLINT
        },
        achievement_organizer: {
            type: DataTypes.STRING
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

    const Achievements = sequelize.define("achievements", attributes, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    Achievements.associate = (models) => {
        /**
         *
         */
    };

    return Achievements;
};