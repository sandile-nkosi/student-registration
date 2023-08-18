const multer = require('multer');
const uuid = require('uuid').v4

const upload = multer({
  storage: multer.diskStorage({
    destination: 'student-data/images',
    filename: (req, file, cb)=> {
      cb(null, uuid() + '-' + file.originalname);
    }
  })
});

const configuredMulter = upload.single('image');

module.exports = configuredMulter;