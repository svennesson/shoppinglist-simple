'use strict';

/**
 * @ngdoc service
 * @name shoppinglistSimpleApp.dbConnection
 * @description
 * # dbConnection
 * Factory in the shoppinglistSimpleApp.
 */
angular.module('shoppinglistSimpleApp')
  .factory('dbConnection', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
