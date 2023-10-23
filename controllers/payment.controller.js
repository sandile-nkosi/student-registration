const { ObjectId } = require('mongodb');
const db = require('../data/database');
const Student = require('../models/student.model');

async function getPayment (req, res){
  try {
    const student = await Student.findById(req.session.uid);
    res.render('student/registration/payment', { student: student });
  } catch (error) {
    next(error);
  }
    
};

async function uploadDocument (req, res, next) {
  const id = new ObjectId(req.session.uid)
  const uploadedDocument = req.file;
  const bursary = true;

  try {
    await db.getDb().collection('students').updateOne({_id: id}, { $set: { 
      "course.deposit": bursary,
      documentPath: uploadedDocument.path
    }});
  } catch (error) {
    next(error)
  }

  res.redirect('../dashboard');
}

async function updatePayment(req, res, next){
  const student = await Student.findById(req.session.uid);
  
  const date = new Date();
  const dateString = date.toLocaleDateString('en-ZA', {hour: 'numeric', minute: 'numeric', second: 'numeric'});

  try { 
    await db.getDb().collection('students').updateOne({_id: student._id}, { $set: {
      "payments.amount": 1000, 
      "payments.date": dateString,
    }});
    res.redirect('../registration/payment');
  } catch (error) {
    next(error)
  }

  res.redirect('../registration/payment');
}

module.exports = {
  getPayment: getPayment,
  uploadDocument: uploadDocument,
  updatePayment: updatePayment
}