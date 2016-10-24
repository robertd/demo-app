(function () {
    'use strict';

    angular.module('AdminDashboard')
           .controller('UserEditCtrl', ['$scope', '$location', '$stateParams', 'UserService', UserEditCtrl]);

    function UserEditCtrl($scope, $location, $stateParams, UserService) {
        $scope.user = UserService.get({ id: $stateParams.id }, function (res) {
            $scope.user = res.data[0];
        });

        $scope.editUser = function () {
            console.log($scope.user);
            $scope.user.$update(function () {
                $location.path("/dashboard");
            });
        };
    }
}());