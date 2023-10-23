const express = require('express');
const paymentController = require('../controllers/payment.controller');
const documentUpload = require('../middlewares/document-upload');

const router = express.Router();

router.get('/registration/payment', paymentController.getPayment);

router.post('/upload-student-documents', documentUpload, paymentController.uploadDocument);

router.post('/registration/payment', paymentController.updatePayment);

module.exports = router;