const db = require('../data/database');

function getDashboard (req, res) {
  res.render('student/dashboard/student-profile');
};

async function getRegistration (req, res) {
  const modules = await db.getDb().collection('modules').find().toArray();
  
  res.render('student/registration/registration', { modules: modules });
};

function updateDashboard (req, res) {
  console.log(req.body);
  console.log(req.file);

  res.redirect('/dashboard');
};

module.exports = {
  getDashboard: getDashboard,
  getRegistration: getRegistration,
  updateDashboard: updateDashboard
};
