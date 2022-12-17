const ModelDatabase = require('../../database/models');
const Model = ModelDatabase.sequelize.models;
const CatchAsync = require('../../utils/catch-error')

const getAllAcademicYears = CatchAsync(async (req, res) => {
    const data = await Model.academic_years.findAll()
    res.status(200).json({
        success: true,
        data
    })
})

module.exports = {
    getAllAcademicYears
}