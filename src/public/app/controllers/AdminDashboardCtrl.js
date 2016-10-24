(function () {
    'use-strict';

    angular.module('AdminDashboard')
        .controller('AdminDashboardCtrl', ['$scope', '$window', '$cookieStore', AdminDashboardCtrl]);

    function AdminDashboardCtrl($scope, $window, $cookieStore) {

        $scope.toggle = false;

        $scope.toggleSidebar = function () {
            $scope.toggle = ! $scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };

        $window.onresize = function () { $scope.$apply(); };
    }
}());