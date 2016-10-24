(function () {
  'use strict';

  angular.module('AdminDashboard')
         .factory('UserService', ['$resource', UserService]);

  function UserService($resource) {
    return $resource('/api/contacts/:id', { id: '@id' },
    {
      'update': { method: 'PUT' },
      'create': { method: 'POST' },
      'delete': { method: 'DELETE' }
    });
  }
}());