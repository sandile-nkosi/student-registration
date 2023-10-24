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
  var payment;
  var accountBal = student.accountBal

  if (student.payments.amount >= 11290){
    payment = student.accountBal * 10 / 100
  } else {
    payment = 11290
  }

  accountBal -= payment
  
  const date = new Date();
  const dateString = date.toLocaleDateString('en-ZA', {hour: 'numeric', minute: 'numeric', second: 'numeric'});

  try { 
    await db.getDb().collection('students').updateOne({_id: student._id}, { $set: {
      "payments.amount": payment, 
      "payments.date": dateString,
      "course.deposit": true,
      accountBal: accountBal
    }});
    return res.redirect('../dashboard');
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