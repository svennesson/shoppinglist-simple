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
    'as.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });