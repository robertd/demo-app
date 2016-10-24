'use strict';

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const port = process.env.PORT || '3000';

const api = require('./routes/api');
const version = require('./routes/version');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('src/public'));


//Routes
app.use('/api', api);
app.use('/version', version);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;