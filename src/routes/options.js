const express = require("express");

const OptionControllers = require('../modules/option/controllers');
 
const router = express.Router();

router.get('/by-employment', OptionControllers.getOptionsByEmployment );
router.get('/by-education', OptionControllers.getOptionsByEducation );
router.get('/by-monthly-income', OptionControllers.getOptionsByMonthlyIncome );

module.exports = router;
