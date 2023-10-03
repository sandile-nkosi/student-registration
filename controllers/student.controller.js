const { ObjectId } = require('mongodb');
const db = require('../data/database');
const Student = require('../models/student.model');

async function getDashboard (req, res, next) {
  try {
    const student = await Student.findById(req.session.uid);
  res.render('student/dashboard/dashboard', {student: student});
  } catch (error) {
    next(error);
  }
};

async function getUpdateDashboard (req, res, next){
  let id = req.params.id;
  try {
    const student = await Student.findById(id);
    res.render('student/dashboard/update-dashboard', {student: student});
  } catch (error) {
    next(error);
  }
};

async function updateDashboard (req, res, next) {
  const id = new ObjectId(req.session.uid)
  try {
    const result = await db.getDb().collection('students').updateOne({_id: id}, { $set: { 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    imagePath: req.file.path
    }});
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('../dashboard');
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
