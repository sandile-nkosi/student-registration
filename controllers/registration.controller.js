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
  if (student.course.year === 3) {
    if (student.grades3.INFS223 < 50) {
      delete registrationModules.INFS312;
      registrationModules["INFS223"] = 0;    
    }
    if (student.grades3.INFS224 < 50 || student.grades3.WVES222 < 50) {
      delete registrationModules.INFS313;  
      registrationModules["INFS224"] = 0;   
    }
    if (student.grades3.WVES222 < 50) {
      delete registrationModules.WVES312;
      registrationModules["WVES222"] = 0;
    }
  }

  const subTotal = Object.keys(registrationModules).length;

  registrationBal = subTotal * 5200
  
  try { 
    await db.getDb().collection('students').updateOne({_id: student._id}, { $set: {
      "course.year": regYear, 
      accountBal: registrationBal,
      grades4 : registrationModules,
      "course.registered": true
    }});
    res.redirect('/student/dashboard');
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getRegistration: getRegistration,
  updateRegistration
}