const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const AuthenticationService = require("./service");
const TokenService = require("../token/service");
const catchAsync = require("../../utils/catch-error");

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

  console.log({data: {
    user,
    token,
  }});
  res.json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

const refreshToken = catchAsync(async(req, res) => {
  const {token} = req.query
  const tokens = await AuthenticationService.refreshToken(token);
  res.send({token: {...tokens}})
})

const logout = CatchAsync(async (req, res) => {
  await AuthenticationService.logout(req.body);
  res.status(httpStatus.OK).send({message: 'Logout Success'});
});

module.exports = {
  register,
  loginByEmail,
  refreshToken,
  logout,
};
