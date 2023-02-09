
const httpStatus = require('http-status');
const CatchAsync = require('../../utils/catch-error');
const AcademicYearService = require('./service');

const getAll = CatchAsync(async (req, res) => {
  const data = await AcademicYearService.getAll()
  res.status(200).json({
    success: true,
    data,
  });
});

const add = CatchAsync(async(req, res) => {
  let payload = req.body;

  payload.created_by = req.user.id;
  
  const data  = await AcademicYearService.add(payload)
  res.status(httpStatus.CREATED).json({
    success: true,
    data,
  });
})
module.exports = {
  getAll,
  add
};
