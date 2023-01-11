const bcrypt = require("bcrypt");

const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const httpStatus = require("http-status");
const ApiError = require("../../utils/api-error");

const UserService = require("../user/service");

const createUser = async (payload) => {
  const { user_email, user_name, user_password } = payload;
  const userByEmail = await Model.users.findOne({
    where: {
      user_email: user_email,
    },
    attributes: ["id", "user_name", "user_email"],
  });

  if (userByEmail)
    throw new ApiError(httpStatus.BAD_REQUEST, "Email sudah digunakan");
  if (payload?.user_name) {
    const userByUsername = await Model.users.findOne({
      where: {
        user_name: user_name,
      },
      attributes: ["id", "user_name", "user_email"],
    });

    if (userByUsername)
      throw new ApiError(httpStatus.BAD_REQUEST, "Username sudah digunakan");
  }

  const saltRounds = 10;
  const newUser_password = await bcrypt.hash(user_password, saltRounds);

  return Model.users.create({
    user_email,
    user_name,
    user_password: newUser_password,
  });
};

const loginByEmail = async (payload) => {
  const { user_password } = payload;
  const user = await UserService.getUserByEmail(payload);
  if (!user)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );

  const matchPassword = await bcrypt.compare(user_password, user.user_password);

  if (!matchPassword)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );

  return user;
};

const logout = async (payload) => {
  const { refresh_token } = payload;
  const refreshTokenDoc = await Model.tokens.findOne({
    where: { token: refresh_token },
  });

  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await refreshTokenDoc.destroy();
};

module.exports = {
  createUser,
  loginByEmail,
  logout,
};
