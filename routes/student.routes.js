const express = require('express');
const studentController = require('../controllers/student.controller');
const imageUpload = require('../middlewares/image-upload');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);

router.get('/update-dashboard/:id', studentController.getUpdateDashboard);

router.post('/update-dashboard/:id', imageUpload, studentController.updateDashboard);

router.get('/payment', studentController.getPayment);

module.exports = router;