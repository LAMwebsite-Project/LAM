const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const app = express();

// view engine setup.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', require('./routes/homepage'));
app.use('/', require('./routes/quiz'));

// route voor all resources. (bijv. js & css).
app.use('/resources', require('./routes/resources'));

// route alle ongebruikte routes naar de 404 page.
app.use('*', require('./routes/404'));

app.listen(80);