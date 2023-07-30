const express = require("express");

const PpdbControllers = require('../modules/ppdb/controllers');
const auth = require("../../middlewares/authentication");
 
const router = express.Router();

router.post('/add-student', auth(), PpdbControllers.addStudent );
router.get('/status-student/:email', PpdbControllers.statusPpdb );
router.get('/student/:email', PpdbControllers.getStudentByEmail );


module.exports = router;
