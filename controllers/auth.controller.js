const Student = require('../models/student.model');
const authUtil = require('../util/auth');

function getSignup(req, res) {
  res.render('student/auth/signup');
}

async function signup(req, res) {
  const student = new Student(
    req.body.email,
    req.body.password
  );

  await student.signup();

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('student/auth/login')
}

async function login(req, res) {
  const student = new Student(req.body.email, req.body.password);
  const existingStudent = await student.getExistingStudentEmail();

  if (!existingStudent) {
    res.redirect('/login')
    return;
  }

  const correctPassword = await student.hasMatchingPassword(existingStudent.password);

  if (!correctPassword) {
    res.redirect('/login')
    return;
  }

  authUtil.createUserSession(req, existingStudent, ()=> {
    res.redirect('/');
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