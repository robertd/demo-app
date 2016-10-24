(function () {
  'use strict';

    angular.module('AdminDashboard')
         .controller('UserCreateCtrl', ['$scope', '$location', 'UserService', UserCreateCtrl]);

  function UserCreateCtrl($scope, $location, UserService) {
    $scope.user = new UserService();

    $scope.createUser = function () {
      if ($scope.createForm.$valid) {
        console.log($scope);
        $scope.user.first_name = $scope.first_name;
        $scope.user.last_name = $scope.last_name;
        $scope.user.email = $scope.email;
        $scope.user.phone = $scope.phone;
        $scope.user.address = $scope.address;
        $scope.user.city = $scope.city;
        $scope.user.state = $scope.state;
        $scope.user.$create(function () {
          $location.path("/dashboard");
        });
      }
    };
  }
}());