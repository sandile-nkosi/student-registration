const express = require('express');
const studentController = require('../controllers/student.controller');
const imageUpload = require('../middlewares/image-upload');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);

router.get('/payment', studentController.getPayment);

router.post('/dashboard/edit'), imageUpload, studentController.updateDashboard;

module.exports = router;