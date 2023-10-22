const express = require('express');
const registrationController = require('../controllers/registration.controller');

const router = express.Router();

router.get('/registration', registrationController.getRegistration);

router.post('/registration', registrationController.updateRegistration);


module.exports = router;