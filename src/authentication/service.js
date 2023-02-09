const bcrypt = require("bcrypt");

const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const httpStatus = require("http-status");
const ApiError = require("../../utils/api-error");

const UserService = require("../user/service");
const TokenService = require("../token/service");

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
  if (!user) {
 throw new ApiError(
  httpStatus.UNAUTHORIZED,
  "Periksa kembali email atau password anda !"
);

  }
 
  const matchPassword = await bcrypt.compare(user_password, user.user_password);

  if (!matchPassword) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );
    }
  return user;
};

const refreshToken = async(token) => {
  try {
    const tokens = await TokenService.verifyToken(token, process.env.TOKEN_TYPE_REFRESH);
    const user = await UserService.getUserById(tokens);

    if (!user) {
      throw new Error();
    }
    
    await  TokenService.deleteToken(token, process.env.TOKEN_TYPE_REFRESH)
    return TokenService.generateAuthTokens(user);
  } catch (error) {
    console.log(error, 'Failed refreshToken');
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate !')
  }
}

const logout = async (payload) => {
  const refresh_token = payload.refresh_token;
  const refreshTokenDoc = await Model.tokens.findOne({
    where: { token:refresh_token },
  });

  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await refreshTokenDoc.destroy();
};

module.exports = {
  createUser,
  loginByEmail,
  refreshToken,
  logout,
};
