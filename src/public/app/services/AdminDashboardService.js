(function () {
  'use strict';

  angular.module('AdminDashboard')
         .factory('AdminDashboardService', ['$http', AdminDashboardService]);

  function AdminDashboardService($http) {
    var AdminDashboard = {};
    return AdminDashboard;
  }
}());