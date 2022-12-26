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

module.exports = {
  getUserByEmail,
};
