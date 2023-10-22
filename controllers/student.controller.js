const { ObjectId } = require('mongodb');
const db = require('../data/database');
const Student = require('../models/student.model');
const fs = require('fs');

async function getDashboard (req, res, next) {
  try {
    const student = await Student.findById(req.session.uid);
  res.render('student/dashboard/dashboard', {student: student});
  } catch (error) {
    next(error);
  }
};

async function getUpdateDashboard (req, res, next){
  // const id = req.params.id;
  try {
    const student = await Student.findById(req.session.uid);
    res.render('student/dashboard/update-dashboard', {student: student});
  } catch (error) {
    next(error);
  }
};

async function updateDashboard (req, res, next) {
  const id = new ObjectId(req.session.uid)
  try {
    
    await db.getDb().collection('students').updateOne({_id: id}, { $set: { 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contact: req.body.contact,
      email: req.body.email
    }});
  } catch (error) {
    next(error);
    
  }

  res.redirect('../dashboard');
};

async function updateImage (req, res, next) {
  const id = new ObjectId(req.session.uid)
  const uploadedImage = req.file;

  try {
    await db.getDb().collection('students').updateOne({_id: id}, { $set: { 
      imagePath: uploadedImage.path
    }});
  } catch (error) {
    next(error)
  }

  res.redirect('../dashboard');
}

async function getRecord (req, res, next) {
  try {
    const student = await Student.findById(req.session.uid);
  res.render('student/dashboard/record', {student: student});
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getDashboard: getDashboard,
  getUpdateDashboard: getUpdateDashboard,
  updateDashboard: updateDashboard,
  updateImage: updateImage,
  getRecord: getRecord
};
