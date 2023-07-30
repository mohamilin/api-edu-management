const ModelDatabase = require("../../../database/models");
const Model = ModelDatabase.sequelize.models; 

const addStudent =  (payload) => {
    return Model.students.create(payload)
}

const getStudentByEmail =  (email) => {
    return Model.students.findOne({
        where : {
            email
        }
    })
}

const updateStudent = async(payload) => {
    return Model.students.update(payload, {
        where : {
            email: payload.email
        }
    })
}
module.exports = {
    addStudent,
    getStudentByEmail,
    updateStudent
}