const ModelDatabase = require("../../../database/models");
const Model = ModelDatabase.sequelize.models;

const getUserByUsername = async (payload) => {
  return Model.users.findOne({
    where: {
      username: payload?.username,
    },
  });
};

const getUserById = async (user) => {
  return Model.users.findOne({
    where: {
      id: user.memberId,
    },
  });
};

const getUserByEmail = async (email) => {
  return Model.users.findOne({
    where: {
      user_email: email
    },
  });
};

const getAll = async () => {
  return Model.users.findAll();
};

const createUser = async (payload) => {
  return Model.users.create(payload)
}
module.exports = {
  getUserById,
  getAll,
  getUserByUsername,
  createUser,
  getUserByEmail
};
