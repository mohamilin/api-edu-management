const ModelDatabase = require('../../database/models');

const Model = ModelDatabase.sequelize.models;

const getAll = async() => {
    return Model.academic_years.findAll()
}

const add = async(payload) => {
    const {academic_year, semester, current_semester, admision_semester, created_by} = payload;

    return await Model.academic_years.create({academic_year, semester, current_semester, admision_semester, created_by})
}
module.exports = {
    getAll,
    add
}