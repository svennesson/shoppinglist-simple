'use strict';

/**
 * @ngdoc overview
 * @name shoppinglistSimpleApp
 * @description
 * # shoppinglistSimpleApp
 *
 * Main module of the application.
 */
angular
  .module('shoppinglistSimpleApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngTouch',
    'as.sortable',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'ListsCtrl'
      })
      .otherwise({
        redirectTo: '/lists'
      });
  });