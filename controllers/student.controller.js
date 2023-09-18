const { ObjectId } = require('mongodb');
const db = require('../data/database');

async function getDashboard (req, res) {
  const studentId = new ObjectId(req.session.uid);
  const student = await db.getDb().collection('students').findOne({_id: studentId});

  console.log(student);

  res.render('student/dashboard/student-profile', {student: student});
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
