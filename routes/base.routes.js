const express = require('express');
const baseController = require('../controllers/base.controller');

const router = express.Router();

router.get('/', baseController.getIndex);

router.get('/enquiries', baseController.getEnquiries);
router.get('/about', baseController.getAbout);

module.exports = router;