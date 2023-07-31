const bcrypt = require('bcryptjs');

const db = require('../data/database');

class Student {
  constructor(email, password) {
    this.email = email,
    this.password = password
  }

  getExistingStudentEmail() {
    return db.getDb().collection('students').findOne({ email: this.email });
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    await db.getDb().collection('students').insertOne({
      email: this.email,
      password: hashedPassword
    });
  };

  hasMatchingPassword(hashedPassword) {
    return bcrypt.compare(this.password, hashedPassword);
  }
}

module.exports = Student;