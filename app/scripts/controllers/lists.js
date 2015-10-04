'use strict';

/**
 * @ngdoc function
 * @name shoppinglistSimpleApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the shoppinglistSimpleApp
 */
angular.module('shoppinglistSimpleApp')
	.controller('ListsCtrl', function ($scope) {
		$scope.items = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.addItem = function () {
			$scope.items.push($scope.formItem);
			$scope.formItem = '';
		};

		$scope.removeItem = function (index) {
			$scope.items.splice(index, 1);
		};
	});