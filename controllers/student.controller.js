const db = require('../data/database');

function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
};


function getPayment(req, res){
  res.render('student/registration/payment');
};

function updateDashboard (req, res) {
  console.log(req.body);
  console.log(req.file);

  res.redirect('/dashboard');
};

module.exports = {
  getDashboard: getDashboard,
  updateDashboard: updateDashboard,
  getPayment: getPayment
};
