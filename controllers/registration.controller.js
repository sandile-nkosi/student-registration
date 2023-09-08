const db = require('../data/database');

async function getRegistration (req, res) {
  const modules = await db.getDb().collection('modules').find().toArray();
  
  res.render('student/registration/registration', { modules: modules });
};



module.exports = {
  getRegistration: getRegistration
}