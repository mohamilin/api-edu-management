const express = require('express');
const router = express.Router();
const AcademicControllers = require('../src/academic/controller');
const GDriveController = require('../src/gdrive/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/academic-years', AcademicControllers.getAllAcademicYears);
router.get('/gdrive', GDriveController.uploadFile);
router.get('/gdrive-v2', GDriveController.uploadFileV2);
router.get('/gfrom', GDriveController.runSample);
router.get('/oauth2callback', (req, res) => {
  res.json({data: 'gagal'})
})
// router.get('/gdrive-create-folder', GDriveController.createFolder);


module.exports = router;
