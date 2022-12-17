const express = require('express');

const router = express.Router();
const AcademicControllers = require('../src/academic/controller');
const GDriveController = require('../src/gdrive/controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/academic-years', AcademicControllers.getAllAcademicYears);
router.get('/gdrive', GDriveController.uploadFile);

module.exports = router;
