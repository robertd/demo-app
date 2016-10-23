'use strict';

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const port = process.env.PORT || '3000';

const api = require('./routes/api');
const version = require('./routes/version');

const app = express();

app.use(logger('short'));
app.use(helmet());

//Routes
app.use('/api', api);
app.use('/version', version);
app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});