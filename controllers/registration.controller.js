const { ObjectId } = require('mongodb');
const db = require('../data/database');
const Student = require('../models/student.model');

async function getRegistration (req, res) {
  try {
    const student = await Student.findById(req.session.uid);
    const modules1 = await db.getDb().collection('firstYearModules').find().toArray();
    const modules2 = await db.getDb().collection('secondYearModules').find().toArray();
    const modules3 = await db.getDb().collection('thirdYearModules').find().toArray();
    const modules4 = await db.getDb().collection('fourthYearModules').find().toArray();
      
    res.render('student/registration/registration', { modules1: modules1,modules2: modules2, modules3: modules3, modules4: modules4, student: student });
  } catch (error) {
    next(error)
  }
  
};

async function getPOR (req, res){
  

  try {
    const student = await Student.findById(req.session.uid);
    res.render('student/registration/por', { student: student });
  } catch (error) {
    next(error)
  }
  
}


async function updateRegistration (req, res, next){
  let registrationBal = 0; 
  let currentModules;
  let regYear;
  let registrationModules = {};
  
  const student = await Student.findById(req.session.uid);
  currentModules = student.grades3;
  regYear = student.course.year + 1

  const selectedModules = req.body.selectedModules;


  //to iterate through each module to be registered and sum up the balance
  for(selectedModule of selectedModules) {

    selectedModuleId = new ObjectId(selectedModule);
    const singleModule = await db.getDb().collection('modules').findOne({_id: selectedModuleId});

    registrationModules[singleModule.moduleCode] = 0;

  };



  // registraton logic. 
  if (student.course.year === 1) {
    if (student.grades1.INFS113 < 50) {
      //logic needed
      delete registrationModules.INFS212;
      delete registrationModules.INFS213;
      delete registrationModules.INFS214;
      delete registrationModules.INFS221;
      delete registrationModules.INFS222;
      registrationModules["INFS113"] = 0;    
    }
    if (student.grades1.INFS122 < 50) {
      delete registrationModules.INFS211;
      delete registrationModules.INFS212;
      delete registrationModules.INFS224;
      registrationModules["INFS122"] = 0;
    }
  }

  const subTotal = Object.keys(registrationModules).length;

  registrationBal = subTotal * 5200
  
  try { 
    await db.getDb().collection('students').updateOne({_id: student._id}, { $set: {
      "course.year": regYear, 
      accountBal: registrationBal,
      grades2 : registrationModules,
      "course.registered": true
    }});
    res.redirect('/student/dashboard');
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getRegistration: getRegistration,
  updateRegistration: updateRegistration,
  getPOR: getPOR
}