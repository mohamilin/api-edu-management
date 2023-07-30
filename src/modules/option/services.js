const ModelDatabase = require("../../../database/models");
const Model = ModelDatabase.sequelize.models;


const getOptions = async (option_group, orderBy) => {
    return Model.options.findAll({
        where: {
            option_group
        },
        attributes: ['id', 'option_group', 'option_name'],
        order: orderBy
    })
}

module.exports = {
    getOptions
}