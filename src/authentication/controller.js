const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const AuthenticationService = require("./service");
const TokenService = require("../token/service");

const register = CatchAsync(async (req, res) => {
  const user = await AuthenticationService.createUser(req.body);
  const token = await TokenService.generateAuthTokens(user);

  return res.status(httpStatus.CREATED).json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

const loginByEmail = CatchAsync(async (req, res) => {
  const user = await AuthenticationService.loginByEmail(req.body);
  const token = await TokenService.generateAuthTokens(user);

  res.json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

const logout = CatchAsync(async (req, res) => {
  await AuthenticationService.logout(req.body);
  res.status(httpStatus.OK).send({message: 'Logout Success'});
});

module.exports = {
  register,
  loginByEmail,
  logout,
};
