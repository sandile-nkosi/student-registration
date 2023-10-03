const mongodb = require('mongodb');
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

  static async findById(studentId){
    let studId;
    try {
      studId = new mongodb.ObjectId(studentId);
    } catch (error) {
      error.code = 404;
      throw error;
    }
    const student = await db.getDb.collection('students').findOne({ _id: studId});

    if (!student){
      const error = new Error('Student does not exist');
      error.code = 404;
      throw error;
    }
    return student;
  };
}

module.exports = Student;