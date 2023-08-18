function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
}

function getRegistration (req, res) {
  
  res.render('student/registration/registration');
}

function updateDashboard (req, res) {
  console.log(req.body);
  console.log(req.file);

  res.redirect('/dashboard');
}

module.exports = {
  getDashboard: getDashboard,
  getRegistration: getRegistration,
  updateDashboard: updateDashboard
}
