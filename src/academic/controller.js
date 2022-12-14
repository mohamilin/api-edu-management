const ModelDatabase = require('../../database/models');
const Model = ModelDatabase.sequelize.models;

const getAllAcademicYears = async (req, res) => {
    const data = await Model.academic_years.findAll()
    res.status(200).json({success: true, data})
}

module.exports = {
    getAllAcademicYears
}