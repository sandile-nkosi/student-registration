const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfToken = require('./middlewares/csrf-token');
const errorHandler = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const baseRoutes = require('./routes/base.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());
app.use(addCsrfToken);

app.use(baseRoutes);
app.use(authRoutes);
app.use(dashboardRoutes);

app.use(errorHandler);

db.connectToDb().then(()=> {
  app.listen(3000); 
})
.catch((error)=> {
  console.log('Database connection error');
  console.log(error);
});
