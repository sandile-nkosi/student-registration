function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
}

function getRegistration (req, res) {
  res.render('student/registration/registration');
}

module.exports = {
  getDashboard: getDashboard,
  getRegistration: getRegistration
}
