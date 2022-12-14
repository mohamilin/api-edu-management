const express = require('express');
const router = express.Router();
const AcademicControllers = require('../src/academic/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/academic-years', AcademicControllers.getAllAcademicYears);


module.exports = router;
