(function () {
  'use strict';

  angular.module('AdminDashboard', [
      'ui.bootstrap',
      'ui.router',
      'ngCookies',
      'ngResource'
  ]).config(['$stateProvider', '$urlRouterProvider', RouteConfig]);

  function RouteConfig($stateProvider, $urlRouterProvider) {

    // Application routes
    $stateProvider
        .state('dashboard', {
          url: '/',
          templateUrl: '/app/partials/admin-dashboard.html',
          controller: 'AdminDashboardCtrl',
          controllerAs: 'dashboard'
        })
        .state('maintenance', {
          url: '/maintenance',
          templateUrl: '/app/partials/maintenance.html',
          controller: 'MaintenanceCtrl',
          controllerAs: 'maintenance'
        })
        .state('create', {
          url: '/users/new',
          templateUrl: '/app/partials/user-create.html',
          controller: 'UserCreateCtrl',
          controllerAs: 'userCreate'
        })
        .state('edit', {
          url: '/users/:id/edit',
          templateUrl: '/app/partials/user-edit.html',
          controller: 'UserEditCtrl',
          controllerAs: 'userEdit'
        })
        .state('show', {
          url: '/users/:id/show',
          templateUrl: '/app/partials/user-show.html',
          controller: 'UserShowCtrl',
          controllerAs: 'userShow'
        });

    // For unmatched routes
    $urlRouterProvider.otherwise('/');
  }

}());