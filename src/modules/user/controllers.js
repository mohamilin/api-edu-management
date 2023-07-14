const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-error');
const UserServices = require('./services');


const getAll = catchAsync(async (req, res) => {
    const user = await UserServices.getAll()


    return res.status(200).json({
        success: true,
        data: user
    })
})

module.exports = {
    getAll
}