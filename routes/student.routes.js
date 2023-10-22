const express = require('express');
const studentController = require('../controllers/student.controller');
const imageUpload = require('../middlewares/image-upload');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);

router.get('/update-dashboard/:id', studentController.getUpdateDashboard);

router.get('/academic-record', studentController.getRecord);

router.post('/update-dashboard', studentController.updateDashboard);

router.post('/update-dashboard-image', imageUpload, studentController.updateImage);

module.exports = router;