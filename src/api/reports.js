'use strict';

const Promise = require('bluebird');
const reportsModel = require('../models/reports');

module.exports = {
  byStates: byStates,
  chart: chart
};

//GET /api/reports/state
function byStates(req, res, next) {
  reportsModel.byStates()
    .then((result) => {
      res.json({
        status: 'success',
        data: result
      })
    })
    .catch(next);
}

//GET /api/reports/chart
function chart(req, res, next) {

  res.json({
    status: 'success',
    data: reportsModel.chart()
  });
}