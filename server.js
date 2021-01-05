const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', require('./routes/homepage'));

// route all unused routes to 404
app.use('*')

app.listen(80);