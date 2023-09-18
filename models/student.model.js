const bcrypt = require('bcryptjs');

const db = require('../data/database');

class Student {
  constructor(studentNum, password) {
    this.studentNum = studentNum,
    this.password = password
  }

  getExistingStudentNumber() {
    return db.getDb().collection('students').findOne({ studentNum: this.studentNum });
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    await db.getDb().collection('students').insertOne({
      studentNum: this.studentNum,
      password: hashedPassword
    });
  };

  hasMatchingPassword(hashedPassword) {
    return bcrypt.compare(this.password, hashedPassword);
  }
}

module.exports = Student;