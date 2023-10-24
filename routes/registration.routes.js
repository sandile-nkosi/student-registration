const express = require('express');
const registrationController = require('../controllers/registration.controller');

const router = express.Router();

router.get('/registration', registrationController.getRegistration);

router.post('/registration', registrationController.updateRegistration);

router.get('/por', registrationController.getPOR);

module.exports = router;