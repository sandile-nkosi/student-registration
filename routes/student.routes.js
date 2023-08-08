const express = require('express');
const studentController = require('../controllers/student.controller');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);
router.get('/registration', studentController.getRegistration);

module.exports = router;