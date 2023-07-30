const bcrypt = require("bcrypt");
const InvariantError = require("../../exceptions/InvariantError");
const UserServices = require("../user/services");
const TokenServices = require("../token/services");

const register = async (req, res, next) => {
  try {
    const { 
      user_name,
      user_password,
      user_full_name,
      user_email,
      user_url,
      user_type } = req.body;

    
    let payload = {
      user_name,
      user_password,
      user_full_name,
      user_email,
      user_url,
      user_type
    };

    const isUser = await UserServices.getUserByEmail(user_email);
    if (isUser) {
      throw new InvariantError("Email sudah digunakan");
    }

    payload.user_password = await bcrypt.hash(user_password, 10);

    const user = await UserServices.createUser(payload);
    const token = await TokenServices.generateAuthTokens(user);
    return res
      .status(200)
      .json({ message: "Success register", results: { token, user } });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { user_email, user_password } = req.body;
    const payload = {
     
      user_email,
      user_password,
    
    };

    let user = await UserServices.getUserByEmail(payload.user_email);
    console.log(user, 'user');
    if (!user) {
      throw new InvariantError("Periksa kembali email / password anda !");
    }

    const isMatchPassword = await bcrypt.compare(user_password, user?.dataValues?.user_password);

    if (!isMatchPassword) {
      throw new InvariantError("Periksa kembali email / password anda !");
    }

    delete user.dataValues.user_password;
    const token = await TokenServices.generateAuthTokens(user);
    return res
      .status(200)
      .json({ message: "Success login", results: { token, user } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
