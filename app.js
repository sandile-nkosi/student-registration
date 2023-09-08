const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfToken = require('./middlewares/csrf-token');
const errorHandler = require('./middlewares/error-handler');
const checkAuthStatus = require('./middlewares/check-auth');
const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const registrationRoutes = require('./routes/registration.routes');
const baseRoutes = require('./routes/base.routes');
const exp = require('constants');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.static('student-data'));
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(addCsrfToken);
app.use(checkAuthStatus);

app.use(baseRoutes);
app.use(authRoutes);
app.use('/student', studentRoutes);
app.use('/student', registrationRoutes);

app.use(errorHandler);

db.connectToDb().then(()=> {
  app.listen(3000); 
})
.catch((error)=> {
  console.log('Database connection error');
  console.log(error);
});
