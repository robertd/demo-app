'use strict';

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const port = process.env.PORT || '3000';

const version = require('./routes/version');

const app = express();

app.use(logger('short'));
app.use(helmet());

//Routes
app.use('/version', version);
app.use('/', (req, res, next) => {
	res.json('Hello world');
})

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});