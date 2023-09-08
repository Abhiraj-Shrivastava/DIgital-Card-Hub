var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var axios=require('axios');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customerRouter = require('./routes/customer');
var cardDetailsRouter = require('./routes/carddetails');
var enquiryRouter = require('./routes/enquiry');
var customDesignRouter = require('./routes/customDesign');
var adminRouter = require('./routes/superadmin');
var orderRouter=require('./routes/orders');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
const crypto = require('crypto');
const upload = require('./routes/multer');


app.post('/api/proxy',upload.single(''), (req, res) => {

  const encodedData = btoa(JSON.stringify(req.body));
  const body1={"request":encodedData}
  console.log(encodedData)
  const hash = crypto.createHash('sha256').update(encodedData+'/pg/v1/payeed63ec6-3ad8-42fb-8131-311f7aaff6e0').digest('hex');
  const sha=hash+"###1"
  console.log(typeof(sha))

  const apiUrl = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
  const headers = {
    'Content-Type': 'application/json',
    'X-Verify': sha,
  };

  const requestBody = body1;

  // Make the API call
  axios.post(apiUrl, requestBody, { headers })
    .then(response => {
      // Return the API response back to the frontend
      console.log('succes',response.data.data)
      return res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle the error
      console.log(error)
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.get('/check-status', (req, res) => {


  const tmid=req.query.tmid
console.log(tmid);
  const hash = crypto.createHash('sha256').update(`/pg/v1/status/DIGITALCARDONLINE/${tmid}eed63ec6-3ad8-42fb-8131-311f7aaff6e0`).digest('hex');
  const sha=hash+"###1"
  console.log(typeof(sha))

  const apiUrl = `https://api.phonepe.com/apis/hermes/pg/v1/status/DIGITALCARDONLINE/${tmid}`;
  const headers = {
    'Content-Type': 'application/json',
    'X-Verify': sha,
    'X-Merchant-Id':'DIGITALCARDONLINE'
  };

  // Make the API call
  axios.get(apiUrl, { headers })
    .then(response => {
      // Return the API response back to the frontend
      console.log('succes',response.data)
      return res.status(200).json(response.data);
    })
    .catch(error => {
      // Handle the error
      console.log(error)
      res.status(500).json({ error: 'An error occurred' });
    });
});




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customerLogin', customerRouter);
app.use('/carddetails', cardDetailsRouter);
app.use('/enquiry', enquiryRouter);
app.use('/customdesign', customDesignRouter);
app.use('/admin', adminRouter);
app.use('/orders',orderRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
