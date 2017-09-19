'use strict';

require('dotenv').config();
let express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/');

let app = express();

//middleware and routing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err,req,res,next) => {
    console.log("error", err, "route", req.url);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in env: ${process.env.NODE_ENV}`);
});

module.exports = app;