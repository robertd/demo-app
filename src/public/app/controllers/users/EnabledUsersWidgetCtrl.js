(function () {
  'use strict';

  angular.module('AdminDashboard')
         .controller('EnabledUsersWidgetCtrl', ['$scope', 'UserService', EnabledUsersWidgetCtrl]);

  function EnabledUsersWidgetCtrl($scope, UserService) {
    UserService.get(function (res) {
      $scope.users = res.data;
    });
  }

}());