const express = require('express');
const studentController = require('../controllers/student.controller');

const router = express.Router();

router.get('/dashboard', studentController.getDashboard);
router.post('dashboard/edit', studentController.editDetails);

module.exports = router;