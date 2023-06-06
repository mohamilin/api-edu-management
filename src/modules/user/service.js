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

const getAll = async () => {
  return Model.users.findAll();
};
module.exports = {
  getUserById,
  getAll,
  getUserByUsername,
};
