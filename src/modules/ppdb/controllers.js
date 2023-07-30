const httpStatus = require("http-status");
const PpdbServices = require("./services");

const addStudent = async (req, res, next) => {
  try {
    let payload = req.body;
    let student = await PpdbServices.getStudentByEmail(payload.email);
    if (!student) {
      const newStudent = await PpdbServices.addStudent(payload);
      return res.status(httpStatus.CREATED).json({
        message: "success add student",
        // result: 'student',
        results: newStudent,
      });
    }

    const updateStudent = await PpdbServices.updateStudent(payload);
    console.log({payload, updateStudent}, 'updateStudent')
    return res.status(200).json({
      message: "success update student",
      // result: 'student',
      results: student,
    });
  } catch (error) {
    next(error);
  }
};

const statusPpdb = async (req, res, next) => {
  try {
    const { email } = req.params;
    const student = await PpdbServices.getStudentByEmail(email);
    if (!student) {
      return res.status(200).json({
        message: "success status PPDB",
        results: "finance",
      });
    }

    return res.status(httpStatus.CREATED).json({
      message: "success status PPDB",
      results: student,
    });
  } catch (error) {
    console.log(error, "statusPpdb");
    next(error);
  }
};

const getStudentByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    let student = await PpdbServices.getStudentByEmail(email);
    return res.status(200).json({
      message: "success student by email",
      results: student
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addStudent,
  statusPpdb,
  getStudentByEmail,
};
