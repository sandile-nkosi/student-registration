const express = require('express');
const studentController = require('../controllers/student.controller');
const imageUpload = require('../middlewares/image-upload');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);
router.post('/dashboard/:id'), imageUpload, studentController.updateDashboard;

router.get('/payment', studentController.getPayment);

module.exports = router;