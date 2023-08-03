function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
}

function editDetails () {

};

module.exports = {
  getDashboard: getDashboard,
  editDetails: editDetails
}
