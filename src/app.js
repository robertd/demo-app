'use strict';

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const port = process.env.PORT || '3000';

const api = require('./routes/api');
const version = require('./routes/version');

const app = express();

app.use(logger('short'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/api', api);
app.use('/version', version);
app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});