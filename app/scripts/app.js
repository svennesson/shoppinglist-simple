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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
