function createUserSession(req, student, action) {  
  req.session.uid = student._id.toString();
  req.session.save(action);
}

module.exports = {
  createUserSession: createUserSession
}