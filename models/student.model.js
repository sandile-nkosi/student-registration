const bcrypt = require('bcryptjs');

const db = require('../data/database');

class Student {
  constructor(studentNum, password, idNum, nationality,email, studentImg, name, gender, lang, contactNum, address, courseId, modules =[]) {
    this.studentNum = studentNum,
    this.password = password
    this.idNum = idNum,
    this.nationality = nationality,
    this.email = email,
    this.studentImg =studentImg,
    this.name = name,
    this.gender = gender,
    this.lang = lang,
    this.contactNum = contactNum,
    this.address =address,
    this.courseId =courseId,
    this.modules = modules
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