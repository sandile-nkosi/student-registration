const { ObjectId } = require('mongodb');
const db = require('../data/database');

async function getDashboard (req, res) {
  const studentId = new ObjectId(req.session.uid);
  const student = await db.getDb().collection('students').findOne({_id: studentId});

  res.render('student/dashboard/student-profile', {student: student});
};


function getPayment(req, res){
  res.render('student/registration/payment');
};

async function updateDashboard (req, res, next) {
  const studentId = new ObjectId(req.session.uid);
  const result = await db.getDb().collection('students').updateOne({_id: studentId}, { $set: { 
    firstName: req.body.firstName,
   } });

   console.log(result);

  res.redirect('/');
};

module.exports = {
  getDashboard: getDashboard,
  updateDashboard: updateDashboard,
  getPayment: getPayment
};
