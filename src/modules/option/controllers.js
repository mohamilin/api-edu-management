// const httpStatus = require("http-status");
const OptionServices = require("./services");

const getOptionsByEmployment = async (req, res, next) => {
  try {
    const option_group = "employments";
    const orderBy = [["id", "ASC"]];

    const options = await OptionServices.getOptions(option_group, orderBy);

    return res.status(200).json({
      message: "Success getOptionsByEmployment",
      results: options,
    });
  } catch (error) {
    next(error);
  }
};

const getOptionsByEducation = async (req, res, next) => {
    try {
      const option_group = "educations";
      const orderBy = [["id", "ASC"]];
  
      const options = await OptionServices.getOptions(option_group, orderBy);
  
      return res.status(200).json({
        message: "Success getOptionsByEmployment",
        results: options,
      });
    } catch (error) {
      next(error);
    }
  };

const getOptionsByMonthlyIncome = async (req, res, next) => {
    try {
      const option_group = "monthly_incomes";
      const orderBy = [["id", "ASC"]];
  
      const options = await OptionServices.getOptions(option_group, orderBy);
  
      return res.status(200).json({
        message: "Success getOptionsByEmployment",
        results: options,
      });
    } catch (error) {
      next(error);
    }
  };
module.exports = {
  getOptionsByEmployment,
  getOptionsByEducation,
  getOptionsByMonthlyIncome
};
