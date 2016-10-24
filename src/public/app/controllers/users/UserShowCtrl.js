(function () {
    'use strict';

    angular.module('AdminDashboard')
           .controller('UserShowCtrl', ['$scope', '$stateParams', 'UserService', UserShowCtrl]);

    function UserShowCtrl($scope, $stateParams, UserService) {
        UserService.get({ id: $stateParams.id }, function (res) {
        	$scope.user = res.data[0];
        });
    }
}());