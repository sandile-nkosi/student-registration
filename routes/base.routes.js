const express = require('express');
const baseController = require('../controllers/base.controller');

const router = express.Router();

router.get('/', (req, res)=> {
  res.redirect('/index');
});

router.get('/index', (req, res)=> {
  res.render('shared/index');
});

router.get('/enquiries', baseController.getEnquiries);
router.get('/about', baseController.getAbout);

module.exports = router;