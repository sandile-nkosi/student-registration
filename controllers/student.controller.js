const { ObjectId } = require('mongodb');
const db = require('../data/database');
const Student = require('../models/student.model');

async function getDashboard (req, res) {
  const studentId = new ObjectId(req.session.uid);
  const student = await db.getDb().collection('students').findOne({_id: studentId});

  res.render('student/dashboard/dashboard', {student: student});
};

async function getUpdateDashboard (req, res, next){
  try {
    const student = await Student.findById(req.params.id);
    res.render('student/dashboard/update-dashboard', {student: student});
  } catch (error) {
    next(error);
  }
};

async function updateDashboard (req, res, next) {
  try {
    const result = await db.getDb().collection('students').updateOne({_id: studentId}, { $set: { 
    firstName: req.body.firstName,
    } });
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/dashboard');
};

function getPayment(req, res){
  res.render('student/registration/payment');
};

module.exports = {
  getDashboard: getDashboard,
  getUpdateDashboard: getUpdateDashboard,
  updateDashboard: updateDashboard,
  getPayment: getPayment
};
