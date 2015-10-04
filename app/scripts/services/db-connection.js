'use strict';

/**
 * @ngdoc service
 * @name shoppinglistSimpleApp.dbConnection
 * @description
 * # dbConnection
 * Factory in the shoppinglistSimpleApp.
 */
angular.module('shoppinglistSimpleApp')
  .factory('dbConnection', function ($firebaseArray) {
    // Service logic
    // ...
    var ref = new Firebase("https://vivid-fire-6230.firebaseio.com/");
    // Public API here
    return {
      getItems: function () {
        return $firebaseArray(ref);
      }
    };
  });