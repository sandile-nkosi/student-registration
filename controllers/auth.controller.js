const Student = require('../models/student.model');
const authUtil = require('../util/auth');
const sessionFlash = require('../util/session-flash');

function getSignup(req, res) {
  res.render('student/auth/signup');
}

async function signup(req, res, next) {
  const student = new Student(
    req.body.email,
    req.body.password
  );

  try {
    await student.signup();
  } catch (error) {
    next(error);
    return;
  }
  

  res.redirect('/login');
}

function getLogin(req, res) {
  let sessionData = sessionFlash.getSessionData(req);

  if(!sessionData) {
    sessionData = {
      email: '',
      password: ''
    }
  }
  res.render('student/auth/login', { inputData: sessionData });
}

async function login(req, res, next) {
  const student = new Student(req.body.email, req.body.password);
  let existingStudent;
  try {
    existingStudent = await student.getExistingStudentEmail(); 
  } catch (error) {
    next(error);
    return;
  }
  
  const sessionErrorData = {
    errorMessage: 'Invalid credentials - please double check your email and password!', 
    email: student.email,
    password: student.password
  }

  if (!existingStudent) {
    sessionFlash.flashDataToSession(req, sessionErrorData, ()=> {
      res.redirect('/login');
    })
    return;
  }

  const correctPassword = await student.hasMatchingPassword(existingStudent.password);

  if (!correctPassword) {
    sessionFlash.flashDataToSession(req, sessionErrorData, ()=> {
      res.redirect('/login');
    })
    return;
  }

  authUtil.createUserSession(req, existingStudent, ()=> {
    res.redirect('/student/dashboard');
  })

}

function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/login');
}

module.exports = {
  getSignup:getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
  logout: logout
}