const { Op } = require("sequelize");

const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getUserByEmail = async (payload) => {
  return Model.users.findOne({
    where: {
      [Op.or]: [{ user_email: payload?.user_email }],
    },
  });
};

const getUserById = async (user) => {
  return Model.users.findOne({
    where: {
      id: user.user_id
    },
  });
}

const getAll = async () => {
  return Model.users.findAll()
}
module.exports = {
  getUserByEmail,
  getUserById,
  getAll
};
