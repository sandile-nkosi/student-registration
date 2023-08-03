function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
}

function getDetails () {

}

function editDetails () {

};

module.exports = {
  getDashboard: getDashboard,
  getDetails: getDetails,
  editDetails: editDetails
}
