function createUserSession(req, student, action) {  
  req.session.uid = student._id.toString();
  req.session.save(action);
}

function destroyUserAuthSession(req) {
  req.session.uid = null;
}

module.exports = {
  createUserSession: createUserSession,
  destroyUserAuthSession: destroyUserAuthSession
}